import React from 'react';
import MovieCard from '../MovieCard';
import './styles.css';

const MovieList: React.FC = () => {
  const movies = [
    { image: '/assets/img/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg', title: 'SUPERMAN' },
    { image: '/assets/img/4a63rQqIDTrYNdcnTXdPsQyxVLo.jpg', title: 'MEGAN 2.0' },
    { image: '/assets/img/9PXZIUsSDh4alB80jheWX4fhZmy.jpg', title: 'FÓRMULA 1' },
    { image: '/assets/img/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg', title: 'BALLERINA' },
    { image: '/assets/img/4CkZl1LK6a5rXBqJB2ZP77h3N5i.jpg', title: 'SINNERS' },
  ];

  return (
    <section className="filmes">
      <div className="grid-filmes">
        {movies.map((movie, index) => (
          <MovieCard key={index} image={movie.image} title={movie.title} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
