import { Routes, Route } from 'react-router-dom';
import News from '../pages/News';
import Home from '../pages/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/patient' element={<Home />} />
      <Route path='/patient/hospitais' element={<Home />} />
      <Route path='/patient/noticias' element={<News />} />
    </Routes>
  );
}
