import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="patient" element={<Home />} />
      {/* <Route path="hospitais" element={<Home />} /> */}
    </Routes>
  );
}
