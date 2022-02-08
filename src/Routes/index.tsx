import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CheckIn from '../pages/CheckIn';
import News from '../pages/News';
import Login from '../pages/Login';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/patient' element={<Home />} />
      <Route path='/patient/hospitais' element={<Home />} />
      <Route path='/patient/noticias' element={<News />} />
      <Route path='/patient/checkin' element={<CheckIn />} />
      <Route path='/patient/profile' element={<Login />} />
    </Routes>
  );
}
