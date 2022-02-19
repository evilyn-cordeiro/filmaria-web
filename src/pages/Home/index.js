import React, { useEffect, useState } from 'react';
// services
import api from '../../services/api';
// style
import {
  CardStyle, Container, LinkStyle, MovieListStyle, StyleImg, TitleStyle,
} from './style';

export default function Home() {
  /**
   * Constant that receives data from the
   * API and enables navigation with a map.
   */
  const [movies, setMovies] = useState([]);
  // API requested data communication.
  useEffect(() => {
    async function loadMovies() {
      const response = await api.get('/r-api/?api=filmes');
      setMovies(response.data);
    }
    loadMovies();
  }, []);

  return (
    <Container>
      <MovieListStyle>
        {movies.map((item) => (
          <CardStyle key={item.id}>
            <TitleStyle>{item.nome}</TitleStyle>
            <StyleImg src={item.foto} alt={item.nome} />
            <LinkStyle to={`/filme/${item.id}`}>Acessar</LinkStyle>
          </CardStyle>
        ))}
      </MovieListStyle>
    </Container>
  );
}
