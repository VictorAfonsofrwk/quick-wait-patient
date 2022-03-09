import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { mocked } from "jest-mock";
import Navbar from "./index"


describe('HeaderComponent', () => { 

  it('Should have 3 options', async () => {
    render(<Navbar />);
    await waitFor(() => {
      expect(screen.getAllByRole('link')).toHaveLength(3);
    });
  });




 })