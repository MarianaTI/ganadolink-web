import React from "react";
import { Modal } from "@mui/material";
import { AlertContainer, Image, Text } from "./index.style";

const AlertComponent = ({ imageSrc, title, text, onClose, open }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <AlertContainer>
        {imageSrc && <Image src={imageSrc} alt="alerta" />}
        <h1>{title}</h1>
        <Text>{text}</Text>
      </AlertContainer>
    </Modal>
  );
};

export default AlertComponent;
