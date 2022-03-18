import { render, screen, fireEvent  } from "@testing-library/react";
import {AddReminder} from ".";


describe("component test", () => {
    it("AddReminder have class", () => {
        render(<AddReminder />)

        const element = screen.getByTestId('custom-element-sunday')

        fireEvent.click(element)
    })

    it("AddReminder have class", () => {
        render(<AddReminder />)

        const element = screen.getByTestId('custom-element-monday')

        fireEvent.click(element)

        expect(element).toHaveClass('day px-3 py-1 active-day');
    })

    it("AddReminder have class", () => {
        render(<AddReminder />)

        const element = screen.getByTestId('custom-element-tuesday')

        fireEvent.click(element)


        expect(element).toHaveClass('day px-3 py-1 active-day');
    })

    it("AddReminder have class", () => {
        render(<AddReminder />)

        const element = screen.getByTestId('custom-element-wednesday')

        fireEvent.click(element)

        expect(element).toHaveClass('day px-3 py-1 active-day');
    })

    it("AddReminder have class", () => {
        render(<AddReminder />)

        const element = screen.getByTestId('custom-element-thursday')

        fireEvent.click(element)

        expect(element).toHaveClass('day px-3 py-1 active-day');
    })

    it("AddReminder have class", () => {
        render(<AddReminder />)

        const element = screen.getByTestId('custom-element-friday')

        fireEvent.click(element)

        expect(element).toHaveClass('day px-3 py-1 active-day');
    })

    it("AddReminder have class", () => {
        render(<AddReminder />)

        const element = screen.getByTestId('custom-element-saturday')

        fireEvent.click(element)

        expect(element).toHaveClass('day px-3 py-1 active-day');
    })
})
