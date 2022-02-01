import { BrowserRouter } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import AppRoutes from "./Routes";
import NavBar from "./components/navbar";

function App() {
  return (
    // <BrowserRouter basename="patient">
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </MuiPickersUtilsProvider>
  );
}

export default App;
