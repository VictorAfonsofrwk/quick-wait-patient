import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CheckIn from "../pages/CheckIn";
import News from "../pages/News";
import Login from "../pages/Login";
import Sobre from "../components/about";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/noticias" element={<News />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/checkin" element={<CheckIn />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
