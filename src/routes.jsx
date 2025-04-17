import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/Teams/Team";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Team />} />
      </Routes>
    </Router>
  );
}
