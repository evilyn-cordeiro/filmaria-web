import React from 'react';
// style
import { ButtonStyle } from './style';

export default function CommonButton({
  // button description text.
  label,
  // click event.
  onClick,
  ...props
}) {
  return (
    <ButtonStyle onClick={onClick} {...props}>
      {label}
    </ButtonStyle>
  );
}
