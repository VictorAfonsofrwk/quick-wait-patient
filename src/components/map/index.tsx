import L, { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import MapaMundi from "../../assets/mapmundi.svg";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Tooltip,
} from "react-leaflet";
import {
  HospitalMapModel,
  HospitalMapRouteModel,
  RouteGeometry,
} from "../../interfaces/mapboxApiInterfaces";
import hM from "../../assets/hospitalMarker.png";
import uLM from "../../assets/userLocationMarker.svg";
import MapPopup from "./mapPopup";
import Modal from "./modal";
import Parcel from "single-spa-react/parcel";
import { getPlacesV2, getRoute } from "../../services/mapbox/mapboxService";

const FrwkMap = () => {
  const openStreetApi = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const [places, setPlaces] = useState<Array<HospitalMapModel>>([]);
  const [route, setRoute] = useState<HospitalMapRouteModel>({});
  const [showModal, setShowModal] = useState(false);
  const [latLng, setLatLng] = useState<Array<number>>([0, 0]);
  const [selectedItem, setSelectedItem] = useState<HospitalMapModel>({});
  const [qwMap, setQwMap] = useState<L.Map>(null);
  const [sharedModule, setSharedModule] = useState<any>({});
  const hospitalMarker = L.icon({
    iconUrl: hM,
    iconSize: [40, 40], // size of the icon
    iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -40], // point from which the popup should open relative to the iconAnchor
  });
  const userLocationMarker = L.icon({
    iconUrl: uLM,
    iconSize: [30, 30], // size of the icon
    iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -30], // point from which the popup should open relative to the iconAnchor
  });

  function handleShowModal() {

    setShowModal(!showModal);
  }
  function handleAddressCoordinates(lat: number, lon: number) {
    localStorage.setItem('coordenada', JSON.stringify({ lat: lat, lon: lon }))
    loadPlaces(lat, lon);
    setLatLng(() => {
      return [lat, lon];
    });
  }
  function initiateLocalization() {
    let lat: number = 0;
    let lon: number = 0;
    const coordStorage = localStorage.getItem("coordenada");
    if (coordStorage) {
      const parsedObj = JSON.parse(coordStorage);
      lat = parsedObj.lat;
      lon = parsedObj.lon;
      loadPlaces(lat, lon);
      setLatLng(() => {
        return [lat, lon];
      });
    } else {
      setShowModal(true);
    }
  }

  async function loadPlaces(lat: number, lon: number) {
    const resPlaces = await getPlacesV2(lat, lon, 10);
    resPlaces.sort(function (a, b) {
      if (a.timeInSeconds > b.timeInSeconds) {
        return 1;
      }
      if (a.timeInSeconds < b.timeInSeconds) {
        return -1;
      }
      return 0;
    });
    // console.log(sharedModule);

    // if (sharedModule.actions) {
    //   console.log(sharedModule);
    //   sharedModule.actions.setOrigin({ hospitalList: resPlaces });
    // }
    setPlaces((oldPlaces) => {
      return [...oldPlaces, ...resPlaces];
    });
    setSelectedItem(resPlaces[0]);
  }

  async function loadRoute(
    sLat: number = latLng[0],
    sLon: number = latLng[1],
    dLat: number = selectedItem.latitude,
    dLon: number = selectedItem.longitude
  ) {
    const response = await getRoute(sLat, sLon, dLat, dLon);
    setRoute((oldRoute) => {
      return { ...oldRoute, ...response };
    });
  }

  async function initSharedModule() {
    const sharedModule = await System.import("@frwk-shared");
    console.log(sharedModule);
    // setSharedModule((oldModule) => {
    //   return { ...oldModule, ...sharedModule };
    // });
    sharedModule.actions.setOrigin({ hospitalList: places });
    sharedModule.listenEvent("@angular/selectHospital", (e: any) => {
      checkSelectedMarker(e.detail.id);
    });
  }

  function checkSelectedMarker(id: string) {
    if (qwMap) {
      qwMap.eachLayer((layer) => {
        if (layer instanceof L.Marker && layer.options.attribution === id) {
          layer.openPopup();
        }
      });
    } else {
      console.log("mapa não carregado");
    }
  }

  useEffect(() => {
    initSharedModule();
    initiateLocalization();
  }, []);

  useEffect(() => {
    initSharedModule();
  }, [places]);

  useEffect(() => {
    if (selectedItem?.name) {
      loadRoute();
    }
  }, [selectedItem]);

  useEffect(() => {
    if (qwMap) {
      qwMap.on("click", (e) => {
        console.log(e);
      });
    }
  }, [qwMap]);

  useEffect(() => {
    checkSelectedMarker(selectedItem.id);
  }, [route]);

  function getLatLonRouteAndRender(geo: RouteGeometry) {
    const steps = geo.coordinates.map((coordinate) => {
      const [lon, lat] = coordinate;
      return new L.LatLng(lat, lon);
    });
    return (
      <Polyline
        positions={steps}
        color="#12A1A7"
        weight={5}
        opacity={1.0}
        smoothFactor={1}
      />
    );
  }

  return (
    <>
      {showModal || latLng[0] === 0 ? (
        <div>
          <Modal
            isOpen={showModal}
            showModal={handleShowModal}
            setCoordinates={handleAddressCoordinates}
          />
          <img className="h-full w-full" src={MapaMundi} />
        </div>
      ) : (
        <div style={{ width: "100%", height: "calc(100vh - 82px)" }}>
          <div className="absolute h-full w-full">
            <MapContainer
              center={latLng as LatLngExpression}
              zoom={15}
              style={{ width: "100%", height: "100%" }}
              whenCreated={(map: L.Map) => {
                console.log("mapa criado");
                setQwMap((oldMap) => {
                  return map;
                });
              }}
              whenReady={() => {
                console.log("mapa ready");
              }}
            >
              <TileLayer
                url={openStreetApi}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {places.map((place: HospitalMapModel) => {
                return (
                  <Marker
                    icon={hospitalMarker}
                    key={place.id}
                    position={[place.latitude, place.longitude]}
                    attribution={place.id}
                  >
                    <MapPopup
                      name={place.name}
                      address={place.address}
                      place={place}
                      selectItem={setSelectedItem}
                    />
                    <Tooltip direction="auto" offset={[0, 0]} opacity={1}>
                      {place.name}
                    </Tooltip>
                  </Marker>
                );
              })}
              <Marker
                icon={userLocationMarker}
                position={latLng as LatLngExpression}
                key={"root"}
              >
                <Tooltip
                  position={latLng as LatLngExpression}
                  direction="bottom"
                  offset={[0, 0]}
                  opacity={1}
                >
                  Você está aqui
                </Tooltip>
              </Marker>
              {route.routes
                ? getLatLonRouteAndRender(route.routes[0].geometry)
                : "Carregando rota..."}
            </MapContainer>
          </div>
          <div
            style={{ height: "calc(100vh - 82px)" }}
            className="absolute z-[1000] right-0 "
          >
            <Parcel
              config={() => System.import("@frwk/frwk-shared-side-nav")}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FrwkMap;
