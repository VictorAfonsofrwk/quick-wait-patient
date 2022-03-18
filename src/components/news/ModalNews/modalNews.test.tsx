import { render } from "@testing-library/react";
import { ModalNews } from ".";

describe("Component test", () => {
    test("test render", () => {
        render(<ModalNews isOpen={false} showModal={jest.fn} article={[]}/>)
    })
})