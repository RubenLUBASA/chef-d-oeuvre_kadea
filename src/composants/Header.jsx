import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo"><span>E</span>vent</a>
      {<nav className="navbar">
  <a href="#Acceuil">
    <i className="fa fa-home" /> Acceuil
  </a>
  <a href="#service">Service</a>
  <a href="#À propos">À propos</a>
  <a href="#gallerie">Gallerie</a>
  <a href="#prix">Prix</a>
  <a href="#revue">revue</a>
  <a href="#contact">Contact</a>
  <a href="#connexion">Connexion</a>
</nav>
}
    </header>
  );
};

export default Header;
