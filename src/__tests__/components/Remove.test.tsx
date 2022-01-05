import { fireEvent, screen } from "@testing-library/react";
import {render, unmountComponentAtNode } from "react-dom";
import RemoveModal from "../../components/Modal/ModalTypes/RemoveModal";

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

test('should send delete event',()=>{
  let deleted = false
  render(<RemoveModal onConfirm={()=>{deleted=true}} onCancel={()=>{deleted=false}} />,container)
  const yesButton = screen.getByTestId('yesbutton')
  const noButton = screen.getByTestId('nobutton')
  fireEvent.click(yesButton)
  expect(deleted).toBe(true)
  fireEvent.click(noButton)
  expect(deleted).toBe(false)
})