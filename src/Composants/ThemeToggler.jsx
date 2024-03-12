import React from 'react';

const ThemeToggler = () => {
  return (
    <div className="theme-toggler">
      <div className="toggle-btn">
        <i className="fas fa-cog"></i>
      </div>

      <h3>choisir la couleur</h3>

      <div className="buttons">
        <div className="theme-btn" style={{ background: '#ccff33' }}></div>
        <div className="theme-btn" style={{ background: '#d35400' }}></div>
        <div className="theme-btn" style={{ background: '#f39c12' }}></div>
        <div className="theme-btn" style={{ background: '#1abc9c' }}></div>
        <div className="theme-btn" style={{ background: '#3498db' }}></div>
        <div className="theme-btn" style={{ background: '#9b59b6' }}></div>
      </div>
    </div>
  );
};

export default ThemeToggler;
