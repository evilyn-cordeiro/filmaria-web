import React from 'react';
// style
import {
  Container, ErrorStyle, TextStyle, StyleLink,
} from './style';

export default function NotFound() {
  return (
    <Container>
      <ErrorStyle>
        404
      </ErrorStyle>
      <TextStyle>
        Página Não encontrada
      </TextStyle>
      <StyleLink to="/Home">Tela inicial</StyleLink>
    </Container>
  );
}
