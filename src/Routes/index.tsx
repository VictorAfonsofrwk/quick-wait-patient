import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CheckIn from '../pages/CheckIn';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='patient' element={<Home />} />
      <Route path='patient/checkin' element={<CheckIn />} />
      {/* <Route path='/hospitais' element={<Home />} /> */}      
    </Routes>
  );
}
