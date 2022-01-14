import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="presentation">
        <h1>Bienvenue sur Web App 2</h1>
        <p>
          Passioné par le JS, PHP, Python et les base de données. <br /> Vous
          retrouver sur le site tous les contenus orientés Web App et Data
          analyse que je vous partagerait.
        </p>
      </div>
      <nav>
        <div className="link-home">
          <div>
            <Link to="/login">Connexion</Link>
          </div>
          <div>
            <Link to="/register">S'inscrire</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
