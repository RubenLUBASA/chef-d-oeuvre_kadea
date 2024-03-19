import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo"><span>E</span>vent</Link>
      <nav className="navbar">
        <Link to="/acceuil">Acceuil</Link>
        <Link to="/service">Service</Link>
        <Link to="/a-propos">À propos</Link>
        <Link to="/gallerie">Gallerie</Link>
        <Link to="/prix">Prix</Link>
        <Link to="/revue">Revue</Link>
        <Link to="/contact">Contact</Link>
        <Link to="./Composants/Authentification/Auth.jsx">Connexion</Link>
      </nav>
    </header>
  );
};

export default Header;
