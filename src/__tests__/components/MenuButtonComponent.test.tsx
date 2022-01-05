import React from "react";
import MenuButtonComponent from "../../components/Menu/MenuButtonComponent";
import { render, unmountComponentAtNode } from "react-dom";

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
it("should show text on button", async () => {
  render(<MenuButtonComponent />, container);

  expect(container?.textContent).toBe("");
});

it('should show text based on props',()=>{
  render(<MenuButtonComponent text="I'm a button" />, container);

  expect(container?.textContent).toBe("I'm a button");
})