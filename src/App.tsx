import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function App() {
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </>
  );
}

export default App;
