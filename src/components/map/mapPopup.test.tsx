import { fireEvent, render, screen } from "@testing-library/react";
import { MapContainer } from "react-leaflet";
import MapPopup from "./mapPopup";

describe("MapPoupUp test", () => {
    test("render test", () => {
        render(<MapContainer>
                    <MapPopup name={"frame"} address={"São Paulo"} selectItem={true} place={true} />
               </MapContainer>
        )
    })
})