import React, { useState } from "react";
import "./Registo.css";
import GlobalStyle from "../Styles/Global";
import { useNavigate } from "react-router-dom";

function Registo() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navegar = useNavigate();
  
  const maiuscula = /[A-Z]/;
  const numero = /[0-9]/;
  const especial = /[!#%&?*@]/;

  const handleRegistar = async () => {

    const entrada = {
      username: username,
      password: password,
    };

    if (username === "" || password === "") {
      setError("Preencha todos os campos");
      return;
    }
    if (password.length < 8 || !maiuscula.test(password) || !numero.test(password) || !especial.test(password)){
      setError("Senha deve possuir 8 caracteres, 1 número e um caractere especial");
      return;
    }
  
    
    try {
      const response = await fetch(
        "https://api.secureme.me/api/v1/auth/register",
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
        alert("Conta registada com sucesso");
        navegar("/");
      } else {
        setError("Falha no registo");
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
        <button type="button" className="btn" onClick={handleRegistar}>
          Registar
        </button>
     </div>
    </>
  );
}

export default Registo;
