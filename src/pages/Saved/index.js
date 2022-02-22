import React, { useEffect, useState } from 'react';
import {
  Container, StyleLink, StyledTitle,
  Stylelisting, BoxrigthStyle, MovieStyle, CommonButtonStyle,
  StyledSpn,
} from './style';

export default function Saved() {
  // movie set
  const [movies, setMovies] = useState([]);
  /**
   * transforming item from storange
   * location to JSON file.
   */
  useEffect(() => {
    const minhaLista = localStorage.getItem('filmes');
    setMovies(JSON.parse(minhaLista) || []);
  }, []);
  /**
   * Delete from page and filter
   * saved movies in storage location.
   */
  function handleDelet(id) {
    const filtroFilmes = movies.filter((item) => (item.id !== id));
    /**
     * List of films set in the
     * storange location.
     */
    setMovies(filtroFilmes);
    localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
  }
  return (
    <Container>
      <StyledTitle>Meus Filmes</StyledTitle>
      {movies.length === 0 && <StyledSpn> Você não possui filmes salvos :(</StyledSpn>}
      {movies.map((item) => (
        <Stylelisting key={item.id}>
          <MovieStyle>{item.nome}</MovieStyle>
          <BoxrigthStyle>
            <StyleLink to={`/filme/${item.id}`}>Ver detalhes</StyleLink>
            <CommonButtonStyle
              label="Excluir"
              onClick={() => handleDelet(item.id)}
            />
          </BoxrigthStyle>
        </Stylelisting>

      ))}
    </Container>

  );
}
