import React from 'react';
import { AlertContainer, Image, Title, Text, Button, Overlay } from "./index.style";


const AlertComponent = ({ imageSrc, title, text, onClose, btmstyle }) => {
  return (
    <>
      <Overlay />
    <AlertContainer btmstyle={btmstyle}>
      {imageSrc && <Image src={imageSrc} alt="alerta"/>}
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Button onClick={onClose}>aceptar</Button>
    </AlertContainer>
    </>
  );
};

export default AlertComponent;
