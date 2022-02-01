import { BrowserRouter } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import AppRoutes from "./Routes";
import NavBar from "./components/navbar";
import AddReminder from "./components/AddReminder";

function App() {
  return (
    // <BrowserRouter basename="patient">
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <BrowserRouter>
        <NavBar />
        <AddReminder />
        <AppRoutes />
      </BrowserRouter>
    </MuiPickersUtilsProvider>
  );
}

export default App;
