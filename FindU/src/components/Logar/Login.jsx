import { useState } from "react";
import React from "react";
import "./Login.css";
import GlobalStyle from "../Styles/Global";
import {useNavigate} from 'react-router-dom';



function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navegar = useNavigate();

  const handleEntrar = async () => {
    if (username === "" || password === "") {
      setError("Preencha todos os campos");
      return;
    }
    const entrada = {
      username: username,
      password: password,
    };
    try{
      const response = await fetch(
        "https://api.secureme.me/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(entrada),
        }
      );
      if (response.ok) {
        const gettoken = await response.json();
        const token = gettoken.token;
        localStorage.setItem('user-token', token);
        alert("Login efetuado com sucesso");
        navegar('/home');

      } else {
        setError("Username ou password incorretos");
      }
    } catch (error) {
      console.log("Error:", error);
    }
    
  };
  

  return (
    <>
        <p className="logo">FindU</p>
        <div className="box">
        <form>
          <input
            type="email"
            value={username}
            onChange={(e) => [setUsername(e.target.value), setError("")]}
            className="form1"
            placeholder="Username"
            />
          <span className="pop">{error}</span>
          <input
            type="password"
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}
            className="form2"
            placeholder="Password"
            />
        </form>
        <div>
          <span id="span">
            Deve ter mínimo de 8 caracteres.
          </span>
        </div>
        <button type="button" className="btn" onClick={handleEntrar}>
          Entrar
        </button>
      </div>
    </>
  );
};

export default Login;


