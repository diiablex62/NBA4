import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/Teams/Team";
import Login from "./pages/Login"; 

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Team />} />
        <Route path='/login' element={<Login />} /> 
      </Routes>
    </Router>
  );
}
