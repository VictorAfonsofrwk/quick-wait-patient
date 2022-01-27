<<<<<<< Updated upstream
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
=======
import { Routes, Route } from 'react-router-dom';
import News from '../pages/News';
import Home from '../pages/Home';
>>>>>>> Stashed changes

export default function AppRoutes() {
  return (
    <Routes>
<<<<<<< Updated upstream
      <Route path="patient" element={<Home />} />
      {/* <Route path="hospitais" element={<Home />} /> */}
=======
      <Route path='/patient' element={<Home />} />
      <Route path='/patient/hospitais' element={<Home />} />
      <Route path='/patient/noticias' element={<News />} />
>>>>>>> Stashed changes
    </Routes>
  );
}
