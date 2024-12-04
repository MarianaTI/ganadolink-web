import React from "react";
import { Modal } from "@mui/material";
import { ModalContent, ModalHead, ModalMain } from "./index.style";

const CustomModal = ({ open, onClose, title, message, children }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContent>
        <ModalHead>
          <h1>{title}</h1>
        </ModalHead>
        <span>{message}</span>
        <ModalMain>{children}</ModalMain>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;