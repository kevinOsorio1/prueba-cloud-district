import React, { JSXElementConstructor, ReactElement } from "react";
import { unmountComponentAtNode } from "react-dom";
import { fireEvent, screen ,render} from "@testing-library/react";
import Menu from "../../components/Menu/Menu";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui:ReactElement<any,string | JSXElementConstructor<any>>, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}
let container: Element | null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});
const setup = (handleClick: () => any) => {
  renderWithRouter(
      <Menu isLogged={false} handleLogout={()=>{}} open={true} handleClick={handleClick} /> 
  );
  const button1 = screen.getByTestId("home");
  const button2 = screen.getByTestId("aboutus");
  const button3 = screen.getByTestId("login");
  return {
    button1,
    button2,
    button3,
  };
};
it("should home click", async () => {
  let clicked = false
  const { button1 } = setup(()=>{clicked=true});
  fireEvent.click(button1)
  expect(clicked).toBe(true)
  expect(window.location.pathname).toBe('/')
});
it("should about click", async () => {
  let clicked = false
  const { button2 } = setup(()=>{clicked=true});
  expect(button2.textContent).toBe("ℹ️Sobre Nosotros")
});
it("should show init sesion", async () => {
  let clicked = false
  const { button3 } = setup(()=>{clicked=true});
  fireEvent.click(button3)
  expect(button3.textContent).toBe('🚪Iniciar Sesion')
});