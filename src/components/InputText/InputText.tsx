import React from "react";
import { Input, Text } from "./input-text.style";

const InputText = ({ text, onChange, value, placeholder,name}: InputProps) => {
  return (
    <React.Fragment>
      <Text data-testid='text'>{text}</Text>
      <Input data-testid={name} placeholder={placeholder} onChange={onChange} value={value} />
    </React.Fragment>
  );
};

export default InputText;
