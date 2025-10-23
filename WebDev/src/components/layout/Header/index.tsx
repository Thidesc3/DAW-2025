import React from 'react';
import './styles.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="conteiner">
        <h1>THE MOVIEBOX</h1>
        <div className="actions">
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
