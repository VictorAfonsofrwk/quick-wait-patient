import {
  ProximityModel,
  PlaceModel,
  MapBoxMobilityTypeModel,
  LngLatModel,
  RoutingResponseModel,
} from "../../interfaces/mapboxApiInterfaces";
import { getService } from "../api/generalApiService";
const TOKEN =
  "pk.eyJ1IjoiYWRyaTRuMCIsImEiOiJja3l4MWVqaGowY2JkMnB0Ynk3ZG4yYmUxIn0.nlB0uFp7dZFqsYz0jm9xBA";
const BASE_URL = `https://api.mapbox.com/`;
const MAPBOX_PLACES = "geocoding/v5/mapbox.places/";
const MAPBOX_DIRECTIONS = "v4/directions/";

export async function getPlaces(
  proximity: ProximityModel,
  limit: number = 10
): Promise<Array<PlaceModel>> {
  // bbox=-46.01044975475227%2C-23.351775277267265%2C-45.91205229402439%2C-23.252593590800714&
  // proximity=-45.92526805946852%2C-23.295328529470012
  try {
    const uri = `${MAPBOX_PLACES}Hospital%2Cupa.json?limit=${limit}&proximity=${proximity.lng}%2C${proximity.lat}&language=pt-PT&access_token=${TOKEN}`;
    const { features } = await getService(BASE_URL, uri);
    return features;
  } catch (error) {
    console.log(error);
  }
}

export async function getDirections(
  mobility: MapBoxMobilityTypeModel,
  origin: LngLatModel,
  destination: LngLatModel
): Promise<RoutingResponseModel> {
  try {
    const uri = `${MAPBOX_DIRECTIONS}mapbox.${mobility.type}/${origin.lng},${origin.lat};${destination.lng},${destination.lat}.json?access_token=${TOKEN}`;
    return await getService(BASE_URL, uri);
  } catch (error) {
    console.log(error);
  }
}
export async function getAddress(address: string) {
  try {
    //https://api.mapbox.com/geocoding/v5/mapbox.places/votuporanga.json?types=place%2Cpostcode%2Caddress&access_token=pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg
    const uri = `${MAPBOX_PLACES}${address}.json?country=br&language=pt-PT&types=place%2Cpostcode%2Caddress&access_token=${TOKEN}`;
    return await getService(BASE_URL, uri);
  } catch (error) {
    console.log(error);
  }
}