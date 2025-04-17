import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/Teams/Team";
import Login from "./pages/Login"; // Importez le composant Login

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Team />} />
        <Route path='/login' element={<Login />} /> {/* Route pour Login */}
      </Routes>
    </Router>
  );
}
