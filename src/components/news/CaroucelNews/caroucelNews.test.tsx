import { render, screen } from '@testing-library/react';
import CaroucelNews from '.';

describe("Component Test", () => {
    it("render Component", () => {
        render(<CaroucelNews articles={[
            {
                source: {
                    id: 10,
                    name: 'string'
                },
                author: 'string',
                title: 'string',
                description: 'string',
                url: 'string',
                urlToImage: 'string',
                publishedAt: 'string',
                content: 'string'
            }
        ]} />)

        const element = screen.queryByTestId("legend");

        expect(element).toBeInTheDocument();
    })
})