import { render } from "@testing-library/react";
import FrwkMap from ".";

describe("Component test", () => {
    beforeEach(() => {
        Object.defineProperty(window, "localStorage", {
            value: {
                getItem: jest.fn(() => '{"lat": "-23.5507", "lon": "-46.63340"}'),
                setItem: jest.fn(() => '{"lat": "-23.5507", "lon": "-46.63340"}')
          },
          writable: true
        });
      });
    it("Component test", () => {
        render(<FrwkMap />)
    })
})