import React from 'react';
import './styles.css';

interface MovieCardProps {
  image: string;
  title: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ image, title }) => {
  return (
    <div className="card-filme">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default MovieCard;
