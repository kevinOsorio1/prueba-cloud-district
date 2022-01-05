import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledMenu } from "./Menu.Styled";
import MenuButtonComponent from "./MenuButtonComponent";
const handleOutPage = () => {
  window.location.assign("https://clouddistrict.com/sobre-nosotros/");
};
const Menu = ({ open, handleClick,isLogged,handleLogout }: MenuProps) => {
  const handleRedirect = (link: string) => {
    handleClick();
    navigate(link, { replace: true });
  };

  const handleLogoutClick = () => {
    handleLogout();
    handleClick();
  };
  const navigate = useNavigate();
  const tabIndex = open ? 0 : -1;
  return (
    <StyledMenu open={open} aria-hidden={!open}>
      <MenuButtonComponent
        text={"Home"}
        testid='home'
        handleClick={() => handleRedirect("/")}
        icon={"🏠"}
        tabIndex={tabIndex}
      />
      <MenuButtonComponent
        text={"Sobre Nosotros"}
        testid='aboutus'
        handleClick={handleOutPage}
        icon={"ℹ️"}
        tabIndex={tabIndex}
      />
      <MenuButtonComponent
        text={isLogged ? "Cerrar Sesion" : "Iniciar Sesion"}
        testid='login'
        handleClick={handleLogoutClick}
        icon={isLogged ? "❌" : "🚪"}
        tabIndex={tabIndex}
      />
    </StyledMenu>
  );
};

export default Menu;
