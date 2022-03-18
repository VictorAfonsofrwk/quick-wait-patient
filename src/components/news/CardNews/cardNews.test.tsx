import { render } from "@testing-library/react";
import CardNews from ".";

describe("Component Test", () => {
    test('test render', () => {
        const props = {
            article: {
                source: {
                    id: 0,
                    name: 'teste',
                },
                author: "string",
                title: "string",
                description: "string",
                url: "string",
                urlToImage: "string",
                publishedAt: "string",
                content: "string"
            },
            index: 0,
        }
        render(<CardNews {...props}/>)
    })
})