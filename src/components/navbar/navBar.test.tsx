import { render, screen } from '@testing-library/react';
import NavBar from ".";
import { MemoryRouter } from 'react-router-dom'

describe("Component test", () => {
    const renderWithRouter = (ui, { route = '/' } = {}) => {
        window.history.pushState({}, 'Test page', route)
        return render(ui, { wrapper: MemoryRouter })
    }
    test("text", () => {
        renderWithRouter(<NavBar />, { route: '/something-that-does-not-match' })
    })
})