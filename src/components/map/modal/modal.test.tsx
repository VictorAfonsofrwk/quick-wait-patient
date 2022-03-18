import { screen, render, fireEvent , waitFor} from "@testing-library/react";
import { getAddress } from '../../../services/mapbox/mapboxService'
import Modal from ".";

describe("Component Test", () => {
    const props = {
        address: 'São Paulo',
    }

    test("input test", async () => {
        
        render(<Modal isOpen={true} showModal={jest.fn} setCoordinates={jest.fn} {...props} />)

        const element = screen.queryByPlaceholderText("Ex: Rua, Número, Bairro, Cidade - Estado")

        fireEvent.change(element, {
            target: { value: props.address },
        
        })  
        await getAddress(props.address)
        


         

        // await waitFor(() => {
  
            
        //   });

 

    })

})
