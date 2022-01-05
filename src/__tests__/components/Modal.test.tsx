import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import Modal from '../../components/Modal/Modal';

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

it("should not show modal", async () => {
  render(
    <Modal isShown={false} hide={()=>{}} modalContent={<></>} headerText='' /> ,container);


  expect(container?.querySelector('[data-testid="headertext"]')).toBe(null);
});
it("should show modal", async () => {
  render(
    <Modal isShown={true} hide={()=>{}} modalContent={<></>} headerText='this is a modal' /> ,container);


  expect(document.body?.querySelector('[data-testid="headertext"]')?.textContent).toBe('this is a modal');
});
