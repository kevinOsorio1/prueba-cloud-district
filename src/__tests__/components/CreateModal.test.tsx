
import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent, screen} from '@testing-library/react'
import CreateModal from '../../components/Modal/ModalTypes/CreateModal';

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
const setup = (onConfirm:(name:string,job:string)=>void,onCancel:()=>void) => {
  render(<CreateModal onConfirm={onConfirm} onCancel={onCancel}  />,container)
  const input1 = screen.getByTestId('username')
  const input2 = screen.getByTestId('userjob')
  return {
    input1,
    input2,
  }
}
it("should change name", async () => {
  let data = {}
  const mockNameChange = jest.fn((name:string,job:string)=>{
    data={name,job}
  })
  const {input1} = setup(mockNameChange,()=>{data={}})
  fireEvent.change(input1,{target:{value:'name'}})
  const yesButon = screen.getByTestId('yesbutton')
  fireEvent.click(yesButon)
  expect(data).toEqual({name:'name',job:''});
});
it("should change job", async () => {
  let data = {}
  const mockNameChange = jest.fn((name:string,job:string)=>{
    data={name,job}
  })
  const {input2} = setup(mockNameChange,()=>{data={}})
  fireEvent.change(input2,{target:{value:'job'}})
  const yesButon = screen.getByTestId('yesbutton')
  fireEvent.click(yesButon)
  expect(data).toEqual({job:'job',name:''});
});