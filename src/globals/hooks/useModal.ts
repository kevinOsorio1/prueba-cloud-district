import { useCallback, useState } from "react";
export const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = useCallback(() => setIsShown((prevState) => !prevState), []);
  return {
    isShown,
    toggle,
  };
};
