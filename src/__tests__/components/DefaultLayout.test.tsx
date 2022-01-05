import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { HeaderText } from '../../layouts/DefaultLayout/defaultLayout.style';
let container: Element | null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {

  if(container){
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

it("should show text on header", async () => {
  render(
    <HeaderText>Prueba Cloud District</HeaderText> ,container);

  expect(container?.textContent).toBe("Prueba Cloud District");
});
