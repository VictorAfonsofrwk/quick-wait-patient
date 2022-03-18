import { render } from "@testing-library/react";
import UserThumbNail from ".";

describe("Test Component", () => {
    test("test Render", () => {

        render(<UserThumbNail children={{userName: ''}}/>)
    })
})