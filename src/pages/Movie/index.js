import React, { useEffect, useState } from 'react';
// router
import { useParams, useHistory } from 'react-router-dom';
// services
import api from '../../services/api';
// style
import {
  Container, MovieList, BoxCard, MovieTitleStyle, StyleImg,
  SinopseStyle, SubtitleStyle, ButtonFooterStyle, FooterStyle,
  ButtonTrailerStyle, StyleAlert,
} from './style';

export default function Movie() {
  /**
   * Parameter used based on the
   * route id for data identification.
   */
  const { id } = useParams();
  /**
 * Constant that receives data from the
 * API and enables navigation with a map.
 */
  const [movies, setMovies] = useState([]);
  //
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  /*
   * Finds the API and sends only the necessary
   * data to the page based on the id.
   */
  useEffect(() => {
    async function loadMovies() {
      // API defined based on api join.
      const response = await api.get(`/r-api/?api=filmes/${id}`);
      /**
       * If the id is not found the page
       * will reload to home page path="/".
       */
      if (response.data.length === 0) {
        history.replace('/');
        return;
      }
      /**
       * Function that sets the api information
       * and displays it on the screen as required.
       */
      setMovies(response.data);
      setLoading(false);
    }
    loadMovies();
  }, [history, id]);

  // wait alert.
  if (loading) {
    return (
      <StyleAlert>Carregando seu Filme... Aguarde</StyleAlert>
    );
  }

  /**
   * Function that saves api data
   * ]in the browser's storange location.
   */
  function handleSavedMovies() {
    /**
     * saves the data to local storange
     * and transfers it to a constant.
     */
    const minhaLista = localStorage.getItem('filmes');
    // transform string constant to JSON. Or empty array.
    const filmesSalvos = JSON.parse(minhaLista) || [];
    /**
     * check if movie is saved based
     * on id action should be ignored.
     */
    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === movies.id);
    /**
     *check if movie is saved based
     *on id action should be ignored.
     */
    if (hasFilme) {
      alert('Você já possui esse filme na sua lista!');
      return;
    }
    // adds one more film in the storange location.
    filmesSalvos.push(movies);
    // Saved to the browser's storange location.
    localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
    alert('Filme salvo com sucesso!');
  }
  return (
    <Container>
      <MovieList>
        <BoxCard>
          <MovieTitleStyle>{movies.nome}</MovieTitleStyle>
          <StyleImg src={movies.foto} alt={movies.nome} />
          <SubtitleStyle>Sinopse</SubtitleStyle>
          <SinopseStyle>{movies.sinopse}</SinopseStyle>
        </BoxCard>
        <FooterStyle>
          <ButtonFooterStyle
            onClick={() => handleSavedMovies()}
            label="Salvar"
          />
          <ButtonTrailerStyle target="blank" href={`https://www.youtube.com/results?search_query=${movies.nome}`}>Trailer</ButtonTrailerStyle>
        </FooterStyle>
      </MovieList>
    </Container>
  );
}
