import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContextInstance"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AppContext); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    console.log("Email:", email, "Password:", password);
    login(); 
    navigate("/"); 
  };

  return (
    <div
      className='d-flex flex-column align-items-center justify-content-center'
      style={{ minHeight: "100vh" }}>
      <h2 className='mb-20'>Connexion</h2>
      <form
        onSubmit={handleSubmit}
        className='d-flex flex-column align-items-center'>
        <div className='mb-20'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Entrez votre email'
            required
          />
        </div>
        <div className='mb-20'>
          <label htmlFor='password'>Mot de passe</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Entrez votre mot de passe'
            required
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
