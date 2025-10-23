import React from 'react';
import './styles.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <ol>
        <li><a href="#">Mais votado</a></li>
        <li><a href="#">Melhor avaliado</a></li>
        <li><a href="#">Novidades</a></li>
        <li><a href="#">Gêneros</a></li>
      </ol>
    </nav>
  );
};

export default Navigation;
