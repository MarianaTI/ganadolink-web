import React from 'react';
import { AlertContainer, Image, Title, Text, Button, Overlay } from "./index.style";


const CustomAlertSeverity = ({ imageSrc, title, text, onClose, bcStyled }) => {
  return (
    <>
      <Overlay />
    <AlertContainer bcStyled={bcStyled}>
      {imageSrc && <Image src={imageSrc} alt="alerta2"/>}
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Button onClick={onClose}>Hecho</Button>
    </AlertContainer>
    </>
  );
};

export default CustomAlertSeverity;
