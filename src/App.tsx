import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import NavBar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
