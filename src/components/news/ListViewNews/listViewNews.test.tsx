import { render } from '@testing-library/react';
import ListViewNews from '.';

describe("Component Test", () => {
    test("render test", () => {
        const props = {
            articles: jest.fn(),
        }
        render(<ListViewNews />)
    })
})