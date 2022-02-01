export interface ProximityModel {
  lng: number;
  lat: number;
}

export interface MapBoxMobilityTypeModel {
  type: "driving" | "walking";
}
export interface LngLatModel {
  lng: number;
  lat: number;
}

export interface PlaceModel {
  id: string;
  type: string;
  place_type: ["poi"];
  relevance: number;
  properties: {
    foursquare: string;
    landmark: true;
    category: string;
    maki?: string;
    address?: string;
  };
  "text_pt-PT": string;
  "place_name_pt-PT": string;
  text: string;
  place_name: string;
  /**
   * O Array deve ser exatamente nesse ordem:
   * @ longitude, latatiude
   */
  center: Array<number>;
  geometry: {
    /**
     * O Array deve ser exatamente nesse ordem:
     * @ longitude, latatiude
     */
    coordinates: Array<number>;
    type: "Point";
  };
  context: Array<{
    id: string;
    short_code?: string;
    wikidata?: string;
    "text_pt-PT"?: string;
    "language_pt-PT"?: string;
    text: string;
    language?: string;
  }>;
}

export interface RoutingResponseModel {
  origin?: {
    type: "Feature";
    geometry: {
      type: "Point";
      /**
       * O Array deve ser exatamente nesse ordem:
       * @ longitude, latatiude
       */
      coordinates: Array<number>;
    };
    properties: {
      name: string;
    };
  };
  destination?: {
    type: "Feature";
    geometry: {
      type: "Point";
      /**
       * O Array deve ser exatamente nesse ordem:
       * @ longitude, latatiude
       */
      coordinates: Array<number>;
    };
    properties: {
      name: string;
    };
  };
  waypoints?: [];
  routes?: Array<{
    distance: number;
    duration: number;
    steps: Array<{
      distance: number;
      duration: number;
      way_name: string;
      mode: string;
      direction: string;
      heading: number;
      maneuver: {
        instruction: string;
        type: string;
        location: {
          type: "Point";
          /**
           * O Array deve ser exatamente nesse ordem:
           * @ longitude, latatiude
           */
          coordinates: Array<number>;
        };
      };
    }>;
    geometry: RouteGeometry;
    summary: string;
  }>;
}

export interface RouteGeometry {
  type: "LineString";
  coordinates: Array<Array<number>>;
}
