import React from "react";
import {
  AcceptButton,
  ButtonContainer,
  CancelButton,
  Container,
  Content,
  Icon,
  Modal,
} from "./index.style";

import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const CustomAlerts = ({
  title,
  text,
  acceptButton,
  cancelButton,
  open,
  onClose,
  error,
  noButtons,
  onClickContinue,
  onClickCancele, 
  login
}) => {
  const icon = error ? faCircleXmark : faCircleCheck;
  return (
    <Modal open={open} onClose={onClose}>
      <Container error={error}>
        <div>
          <Icon icon={icon} error={error} />
        </div>
        <Content error={error}>
          <h1>{title}</h1>
          <span>{text}</span>
          <ButtonContainer noButtons={noButtons} login={login}>
            <AcceptButton type="button" error={error} onClick={onClickContinue}>
              {acceptButton}
            </AcceptButton>
            <CancelButton type="button" login={login} error={error} onClick={onClickCancele}>
              {cancelButton}
            </CancelButton>
          </ButtonContainer>
        </Content>
      </Container>
    </Modal>
  );
};

export default CustomAlerts;
