import L from "leaflet";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Tooltip,
} from "react-leaflet";
import {
  LngLatModel,
  MapBoxMobilityTypeModel,
  PlaceModel,
  RouteGeometry,
  RoutingResponseModel,
} from "../../interfaces/mapboxApiInterfaces";
import { mockedplaces } from "./mockPlaces";
import { mockedRoute } from "./mockRoute";
import hM from "../../assets/hospitalMarker.png";
import uLM from "../../assets/userLocationMarker.svg";
import MapPopup from "./mapPopup";
import Modal from "./modal";

const FrwkMap = () => {
  const openStreetApi = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const [places, setPlaces] = useState<Array<PlaceModel>>([]);
  const [route, setRoute] = useState<RoutingResponseModel>({});
  const { lat, lon } = JSON.parse(localStorage.getItem('coordenada'))
  const [showModal, setShowModal] = useState(false)
  const [latitude, setLatitude] = useState(lat)
  const [longitude, setLongitude] = useState(lon)

  function handleShowModal() {
    setShowModal(!showModal)
  }
  function handleAddressCoordinates(lat: number, lon: number) {
    setLatitude(lat)
    setLongitude(lon)
  }
  async function initiateLocalization() {
    try {
      if (lat === 0) {
        setShowModal(true)
      }
    } catch (err) {
      console.error(err.message)
    }
  }
  useEffect(() => {
    initiateLocalization()
  }, []);
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

  const getMockedPlaces = new Promise<Array<PlaceModel>>((resolve, reject) => {
    setTimeout(() => {
      resolve(mockedplaces);
    }, 0);
  });

  const getMockedRoute = new Promise<RoutingResponseModel>(
    (resolve, reject) => {
      setTimeout(() => {
        resolve(mockedRoute);
      }, 0);
    }
  );

  // lat, long
  const mapCenter = [-23.295361, -45.925122];
  async function loadPlaces() {
    // const resPlaces = await getPlaces({ lat: mapCenter[0], lng: mapCenter[1] });
    const resPlaces = await getMockedPlaces;
    setPlaces((oldPlaces) => {
      return [...oldPlaces, ...resPlaces];
    });
    await loadRoute();
  }

  async function loadRoute() {
    const mobility: MapBoxMobilityTypeModel = { type: "driving" };
    const originPoint: LngLatModel = {
      lat: mapCenter[0],
      lng: mapCenter[1],
    };
    const destinationPoint: LngLatModel = {
      lat: mockedplaces[0].center[0],
      lng: mockedplaces[0].center[1],
    };
    // const response = await getDirections(
    //   mobility,
    //   originPoint,
    //   destinationPoint
    // );
    const response = await getMockedRoute;
    setRoute((oldRoute) => {
      return { ...oldRoute, ...response };
    });
  }

  useEffect(() => {
    loadPlaces();
  }, []);

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
      {showModal ? <div><Modal isOpen={showModal} showModal={handleShowModal} setCoordinates={handleAddressCoordinates} /><img src="https://54337.cdn.simplo7.net/static/54337/sku/digital-digital-exclusivas-tricoline-estampa-digital-mapa-mundo-ref-st-287-1589240857424.jpg" /></div>
        :
        <div style={{ width: "100%", height: "calc(100vh - 82px)" }}>
          <MapContainer
            center={[latitude, longitude]}
            zoom={15}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              url={openStreetApi}
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {places.map((place) => {
              const [lng, lat] = place.center;
              return (
                <Marker icon={hospitalMarker} key={place.id} position={[lat, lng]}>
                  <MapPopup name={place.text} address={place.place_name} />
                  <Tooltip direction="auto" offset={[0, 0]} opacity={1}>
                    {place.text}
                  </Tooltip>
                </Marker>
              );
            })}
            <Marker
              icon={userLocationMarker}
              position={[latitude, longitude]}
              key={"root"}
            >
              <Tooltip
                position={[latitude, longitude]}
                direction="bottom"
                offset={[0, 0]}
                opacity={1}
              >
                Você está aqui
              </Tooltip>
            </Marker>

            {route.routes
              ? getLatLonRouteAndRender(mockedRoute.routes[0].geometry)
              : ""}
          </MapContainer>
        </div>}
    </>
  );
};

export default FrwkMap;

