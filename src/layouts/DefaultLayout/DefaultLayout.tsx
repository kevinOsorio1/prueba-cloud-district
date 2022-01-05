import React, { useCallback, useContext, useRef, useState } from "react";
import LoggedUser from "../../components/LoggedUser/LoggedUser";
import Burger from "../../components/Menu/Burger/Burger";
import Menu from "../../components/Menu/Menu";
import { LoginContext } from "../../contexts/LoginContext/useLoginContext";

import useOnClickOutside from "../../globals/hooks/useOnClickOutside";
import { Header, HeaderText, MenuContainer } from "./defaultLayout.style";

const DefaultLayout = () => {
  const {isLogged, handleLogout} = useContext(LoginContext)
  const [open, setOpen] = useState(false);
  const {user} = useContext(LoginContext)
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = "main-menu";

  const handleCLick = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  const handleCLickOutside = useCallback(() => {
    setOpen((prevState) => prevState && !prevState);
  }, []);

  useOnClickOutside(menuRef, handleCLickOutside);

  return (
    <Header ref={menuRef} style={{ width: "100%", justifyContent:'space-between' }}>
      <MenuContainer>

      <Burger open={open} handleClick={handleCLick} />
      <HeaderText>
        <h1>Prueba Cloud District</h1>
      </HeaderText> 
      </MenuContainer>
      <LoggedUser user={user}/>
      <Menu open={open} handleClick={handleCLick} props={{ id: menuId }} isLogged={isLogged} handleLogout={handleLogout} />
    </Header>
  );
};
export default DefaultLayout;
