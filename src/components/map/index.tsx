import L from "leaflet";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import {
  LngLatModel,
  MapBoxMobilityTypeModel,
  PlaceModel,
  RouteGeometry,
  RoutingResponseModel,
} from "../../interfaces/mapboxApiInterfaces";
import { getDirections, getPlaces } from "../../services/mapbox/mapboxService";
import { mockedplaces } from "./mockPlaces";
import { mockedRoute } from "./mockRoute";

const FrwkMap = () => {
  const openStreetApi = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const [places, setPlaces] = useState<Array<PlaceModel>>([]);
  const [route, setRoute] = useState<RoutingResponseModel>({});

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
    <div style={{ width: "100%", height: "calc(100vh - 82px)" }}>
      <MapContainer
        center={[mapCenter[0], mapCenter[1]]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url={openStreetApi} id="mapbox/streets-v11" />
        {places.map((place) => {
          const [lng, lat] = place.center;
          return (
            <Marker key={place.id} position={[lat, lng]}>
              <Popup>{place.place_name}</Popup>
            </Marker>
          );
        })}
        <Marker position={[mapCenter[0], mapCenter[1]]} key={"root"}>
          <Popup>Você está aqui</Popup>
        </Marker>

        {route.routes ? getLatLonRouteAndRender(mockedRoute.routes[0].geometry) : ""}
      </MapContainer>
    </div>
  );
};

export default FrwkMap;
