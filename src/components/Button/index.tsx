import React from "react";
import { ButtonContainer } from "./styles";
import { IButton } from './types'


export default function Button({ title, variant="primary", onClick }: IButton) {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
}
