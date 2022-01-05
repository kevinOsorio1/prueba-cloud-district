import React, { MouseEventHandler } from 'react'
import { MenuButton, SesionText } from './Menu.Styled'
interface MenuButtonProps{
  tabIndex:number;
  handleClick: MouseEventHandler;
  icon: string;
  text:string;
  testid:string
}
const MenuButtonComponent = ({text,tabIndex,handleClick,testid, icon}:Partial<MenuButtonProps>)=>{
  return <MenuButton
        tabIndex={tabIndex}
        data-testid={testid}
        onClick={handleClick}
      >
        <SesionText role="img" aria-label="contact">
          {icon}
        </SesionText>
        {text}
      </MenuButton>
}
export default MenuButtonComponent