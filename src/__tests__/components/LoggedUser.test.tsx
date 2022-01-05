import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import LoggedUser from '../../components/LoggedUser/LoggedUser';

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

it("should not show user", async () => {
  render(
    <LoggedUser user={null}  /> ,container);
  expect(container?.textContent).toBe("")
});
it("should show user", async () => {
  render(
    <LoggedUser user={{accessToken:'dummy-token',name:'User',id:'a',userID:'userID',picture:{data:{url:'a.url'}}}}  /> ,container);
  expect(container?.querySelector('[data-testid="userName"]')?.textContent).toBe("User")
  expect(container?.querySelector('[data-testid="userImage"]')?.getAttribute('src')).toBe("a.url")
});
