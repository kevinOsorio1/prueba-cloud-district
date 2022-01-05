import React, { FunctionComponent } from "react";
import {
  ConfirmationButtons,
  Message,
  NoButton,
  YesButton,
} from "./create-modal.style";

const RemoveModal: FunctionComponent<RemoveModalProps> = (props) => {

  const handleConfirm = () => {
    props.onConfirm();
  };
  return (
    <React.Fragment>
      <Message>{props.message}</Message>
      <ConfirmationButtons>
        <YesButton data-testid='yesbutton' onClick={handleConfirm}>Eliminar</YesButton>
        <NoButton  data-testid='nobutton'onClick={props.onCancel}>Cancelar</NoButton>
      </ConfirmationButtons>
    </React.Fragment>
  );
};

export default RemoveModal