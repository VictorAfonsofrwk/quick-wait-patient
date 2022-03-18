import { render } from "@testing-library/react";
import News from '.';

describe("Page test", () => {
    it("render", () => {
        render(<News/>)
    })
})