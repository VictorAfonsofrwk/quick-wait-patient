import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import NavBar from "./components/navbar";
import ViewReminders from "./components/ViewReminders";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ViewReminders/>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
