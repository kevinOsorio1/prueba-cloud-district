import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop,
} from "./modal.style";

const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const modal = (
    <React.Fragment>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText data-testid='headertext'>{headerText}</HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>{modalContent}</Content>
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal