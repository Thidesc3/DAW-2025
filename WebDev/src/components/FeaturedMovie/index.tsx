import React from 'react';
import './styles.css';

const FeaturedMovie: React.FC = () => {
  return (
    <section className="destaque">
      <img src="/assets/img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg" alt="Capa Filme" />
      <div>
        <h2>COMO TREINAR O SEU DRAGÃO</h2>
        <div>
          <span>Fantasia</span>
          <span>Ação e aventura</span>
          <span>2023</span>
        </div>
        <div>
          <h4>Sinopse</h4>
          <p>
            Em um mundo onde dragões e humanos coexistem, um jovem viking chamado Soluço se torna amigo
            de um dragão ferido chamado Banguela. Juntos, eles desafiam as tradições de suas tribos e descobrem que
            dragões não são os monstros que todos acreditavam ser.
          </p>
        </div>
        <div>
          <button>Assistir</button>
          <button>Adicionar aos Favoritos</button>
          <button>Detalhes</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;
