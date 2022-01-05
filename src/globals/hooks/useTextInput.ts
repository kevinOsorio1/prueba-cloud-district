import {  useCallback, useState } from "react";

const useTextInput = () => {
  const [text, setText] = useState("");

  const handleChange = useCallback((newText:string) => {
    setText(newText);
  }, []);

  return {
    text,
    handleChange,
  };
};

export default useTextInput;
