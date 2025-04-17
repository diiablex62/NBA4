import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { AppProvider } from "./context/AppContext";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login"; 
import "./assets/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login />} />{" "}
          {/* Route pour la connexion */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </AppProvider>
  </React.StrictMode>
);
