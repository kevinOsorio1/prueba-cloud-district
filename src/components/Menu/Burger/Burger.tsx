import React from "react";
import { StyledBurger } from "./Burger.styled";

const Burger = ({ open, handleClick }: BurgerProps) => {
  return (
    <StyledBurger aria-label="menu-button"  open={open} onClick={handleClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
