import React from "react";
import * as ReactDOM from "react-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import singleSpaReact from "single-spa-react";

const FrwkMap = () => {
  return (
    <div style={{ width: "100%", height: "calc(100vh - 82px)" }}>
      <MapContainer
        center={[-23.293883, -45.9324992]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[-23.293883, -45.9324992]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default FrwkMap;
export const config = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: FrwkMap,
});
