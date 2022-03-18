import { render, screen } from "@testing-library/react";
import Parcel from "single-spa-react/parcel";
import Login from '.';

describe("page test", () => {
    it("render", () => {
        render(<Login />)
       const t = <Parcel config={jest.fn()} />
        
    })

})