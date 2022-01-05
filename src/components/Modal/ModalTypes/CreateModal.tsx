import React, { FunctionComponent } from "react";
import useTextInput from "../../../globals/hooks/useTextInput";
import InputText from "../../InputText/InputText";
import {
  ConfirmationButtons,
  Message,
  YesButton,
  NoButton,
  FormContainer,
} from "./create-modal.style";

const CreateModal: FunctionComponent<ConfirmationModalProps> = (
  props
) => {
  const { text: name, handleChange: handleNameChange } = useTextInput();
  const { text: job, handleChange: handleJobChange } = useTextInput();

  return (
    <React.Fragment>
      <FormContainer data-testid="createform">
        <InputText
          text="Nombre"
          data-testid="username"
          name="username"
          onChange={(event)=>handleNameChange(event.target.value)}
          value={name}
          placeholder="Nombre del usuario"
          />
        <InputText
          data-testid="userjob"
          text="Trabajo"
          name="userjob"
          onChange={(event)=>handleJobChange(event.target.value)}
          value={job}
          placeholder="Trabajo del usuario"
        />
      </FormContainer>
      <Message>{props.message}</Message>
      <ConfirmationButtons>
        <YesButton data-testid="yesbutton" onClick={() => props.onConfirm(name, job)}>Crear</YesButton>
        <NoButton onClick={props.onCancel}>Cancelar</NoButton>
      </ConfirmationButtons>
    </React.Fragment>
  );
};

export default CreateModal