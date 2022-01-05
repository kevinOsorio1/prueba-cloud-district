import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import InputText from '../../components/InputText/InputText';

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

it("should show value and placeholder", async () => {
  const name='input'
  render(
    <InputText value='value' text='texto' name={name} onChange={()=>{}} placeholder='placeholder' /> ,container);


  expect(container?.querySelector('[data-testid="text"]')?.textContent).toBe("texto");
  expect(container?.querySelector(`[data-testid=${name}]`)?.getAttribute('placeholder')).toBe("placeholder");
  expect(container?.querySelector(`[data-testid=${name}]`)?.getAttribute('value')).toBe("value");
});
