import React from 'react';

const PriceSection = () => {
  return (
    <section className="price" id="price">
      <h1 className="heading">nos <span>prix</span></h1>
      <div className="box-container">
        {<>
  <div className="box">
    <h3 className="title">basic</h3>
    <h3 className="amount">$500.00</h3>
    <ul>
      <li>
        <i className="fas fa-check" />
        services complets
      </li>
      <li>
        <i className="fas fa-check" /> decorations
      </li>
      <li>
        <i className="fas fa-check" /> music &amp; photos
      </li>
      <li>
        <i className="fas fa-check" /> Nourriture et boissons
      </li>
      <li>
        <i className="fas fa-check" /> invitation numerique
      </li>
    </ul>
    <a href="#" className="btn">
      vérifier
    </a>
  </div>
  <div className="box">
    <h3 className="title">premium</h3>
    <h3 className="amount">$800.00</h3>
    <ul>
      <li>
        <i className="fas fa-check" />
        services complets
      </li>
      <li>
        <i className="fas fa-check" /> decorations
      </li>
      <li>
        <i className="fas fa-check" /> music &amp; photos
      </li>
      <li>
        <i className="fas fa-check" /> Nourriture et boissons
      </li>
      <li>
        <i className="fas fa-check" /> invitation numerique
      </li>
    </ul>
    <a href="#" className="btn">
      vérifier
    </a>
  </div>
  <div className="box">
    <h3 className="title">gold</h3>
    <h3 className="amount">$1000.00</h3>
    <ul>
      <li>
        <i className="fas fa-check" />
        services complets
      </li>
      <li>
        <i className="fas fa-check" /> decorations
      </li>
      <li>
        <i className="fas fa-check" /> music &amp; photos
      </li>
      <li>
        <i className="fas fa-check" /> Nourriture et boissons
      </li>
      <li>
        <i className="fas fa-check" /> invitation numerique
      </li>
    </ul>
    <a href="#" className="btn">
      vérifier
    </a>
  </div>
  <div className="box">
    <h3 className="title">ultra</h3>
    <h3 className="amount">$2500.00</h3>
    <ul>
      <li>
        <i className="fas fa-check" />
        services complets
      </li>
      <li>
        <i className="fas fa-check" /> decorations
      </li>
      <li>
        <i className="fas fa-check" /> music &amp; photos
      </li>
      <li>
        <i className="fas fa-check" /> Nourriture et boissons
      </li>
      <li>
        <i className="fas fa-check" /> invitation numerique
      </li>
    </ul>
    <a href="#" className="btn">
      vérifier
    </a>
  </div>
</>
}
      </div>
    </section>
  );
};

export default PriceSection;
