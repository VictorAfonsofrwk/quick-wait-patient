import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import CheckIn from '.';

describe("Component test", () => {
    const navigator = {
        go: jest.fn(),
        push: jest.fn(),
        replace: jest.fn(),
        createHref: jest.fn()
    }
    test("render test", () => {
        render(<Router navigator={navigator} location={'./home'} ><CheckIn /></Router>)
    })
})