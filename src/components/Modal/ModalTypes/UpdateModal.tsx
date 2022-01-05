import React, { FunctionComponent } from "react";
import useTextInput from "../../../globals/hooks/useTextInput";
import InputText from "../../InputText/InputText";
import {
  ConfirmationButtons,
  FormContainer,
  Message,
  NoButton,
  YesButton,
} from "./create-modal.style";

const UpdateModal: FunctionComponent<UpdateModalProps> = (props) => {
  const { text: name, handleChange: handleNameChange } = useTextInput();
  const { text: job, handleChange: handleJobChange } = useTextInput();

  const handleConfirm = () => {
    let partialData = {};
    if (job) {
      partialData = { job };
    }
    if (name) {
      partialData = { ...partialData, name };
    }
    props.onConfirm(partialData);
  };
  return (
    <React.Fragment>
      <FormContainer data-testid="updateform">
        <InputText
          data-testid="username"
          name="username"
          text="Nombre"
          onChange={(event)=>handleNameChange(event.target.value)}
          value={name|| ""}
          placeholder="Nombre del usuario"
        />
        <InputText
          data-testid="userjob"
          name="userjob"
          text="Trabajo"
          onChange={(event)=>handleJobChange(event.target.value)}
          value={job|| ""}
          placeholder="Trabajo del usuario"
        />
      </FormContainer>
      <Message data-testid="modalmessage">{props.message}</Message>
      <ConfirmationButtons>
        <YesButton data-testid="butonyes" onClick={handleConfirm}>Actualizar</YesButton>
        <NoButton data-testid="butonno" onClick={props.onCancel}>Cancelar</NoButton>
      </ConfirmationButtons>
    </React.Fragment>
  );
};

export default UpdateModal;
