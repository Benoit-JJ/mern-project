import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:5050/api/user/login";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch(url, requestOptions)
      .then((response) => console.log("Connexion avec succès"))
      .catch((error) => console.log("Form submit error", error));

    console.log(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Connexion</h3>

        <div className="form-group">
          <label>Adresse email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Adresse email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Connexion
        </button>
      </form>
      <Link to="/">Acceuil</Link>
    </>
  );
};

export default Login;
