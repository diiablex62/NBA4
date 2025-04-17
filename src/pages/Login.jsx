import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContextInstance";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    console.log("Username:", username, "Password:", password);
    login();
    navigate("/");
  };

  return (
    <div
      className='d-flex flex-column align-items-center justify-content-center'
      style={{ minHeight: "100vh" }}>
      <h2 className='mb-20 text-white'>CONNEXION</h2>
      <form
        onSubmit={handleSubmit}
        className='d-flex flex-column align-items-center text-white'>
        <div className='mb-20 d-flex flex-column'>
          <label htmlFor='username' className='mb-5'>
            Nom d&apos;utilisateur
          </label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className='mb-20 d-flex flex-column'>
          <label htmlFor='password' className='mb-5'>
            Mot de passe
          </label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Mot de passe'
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
