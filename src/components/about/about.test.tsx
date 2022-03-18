import React from "react";
import { render, screen } from "@testing-library/react";
import Sobre from ".";

describe("about component", () => {
    test("text test", () => {
        render(<Sobre />);

        const sobreTitle = screen.getByText("Quem somos?");

        expect(sobreTitle).toBeInTheDocument();
    })

    test("test class", () => {
        render(<Sobre />);

        const sobreTitle = screen.getByText("Quem somos?");

        expect(sobreTitle).toHaveClass("animate__animated animate__bounce mt-8 font-semibold text-cyan-50 text-3xl")
    })
})