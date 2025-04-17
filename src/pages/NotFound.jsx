import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className='d-flex flex-column align-items-center justify-content-center'
      style={{ minHeight: "100vh", textAlign: "center" }}>
      <h1 className='text-error' style={{ fontSize: "4rem" }}>
        404
      </h1>
      <p>Page non trouvée</p>
      <NavLink to='/' className='btn btn-primary mt-20'>
        Retour à l'accueil
      </NavLink>
    </div>
  );
};

export default NotFound;
