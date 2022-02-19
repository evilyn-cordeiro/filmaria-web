import React from 'react';
// style
import { Container } from './style';

export default function IconButton({
  // property that receives svg.
  svg,
  // click event.
  onClick,
  ...props
}) {
  return (
    <Container onClick={onClick} {...props}>
      {svg}
    </Container>
  );
}
