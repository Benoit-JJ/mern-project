import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [auth, setAuth] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = "http://localhost:5050/api/user/register";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    };
    fetch(url, requestOptions)
      .then((response) => console.log("Submitted successfully"))
      .catch((error) => console.log("Form submit error", error));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>S'inscrire</h3>

        <div className="form-group">
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Nom d'utilisateur"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Adresse email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Adresse email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          S'inscrire
        </button>
        <p className="forgot-password text-right">
          Déjà enregistré <a href="/login">s'identifier?</a>
        </p>
      </form>
      <Link to="/">Acceuil</Link>
    </>
  );
};

export default Register;
