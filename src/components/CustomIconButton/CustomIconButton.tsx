import React from "react";
import { Button, ButtonContainer, Text } from "./customIconButton.style";

const CustomIconButton = ({ onClick, text, icon }: CustomIconButtonProps) => {
  return (
    <ButtonContainer>
      <Button onClick={onClick}>
        {icon}
        <Text>{text}</Text>
      </Button>
    </ButtonContainer>
  );
};

export default CustomIconButton;
