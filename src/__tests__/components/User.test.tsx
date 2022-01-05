import { screen } from "@testing-library/react";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import UserUI from "../../components/User/User";
import UserInfoText from "../../components/User/UserName";

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

it("should label and text", async () => {
  render(<UserInfoText label="Label: " text="Text" showKeys />, container);

  expect(container?.textContent).toBe("Label: Text");
});
it("should should show name email and job", async () => {
  render(<UserUI name='person' email="email" job='job' />, container);
  const nameField = screen.getByTestId('infotext-name')
  const emailField = screen.getByTestId('infotext-email')
  const jobField = screen.getByTestId('infotext-job')
  expect(nameField.textContent).toBe("person");
  expect(emailField?.textContent).toBe("email");
  expect(jobField?.textContent).toBe("job");
});
it("should show keys", async () => {
  render(<UserUI name='person' email="email" job='job' showKeys />, container);
  const nameField = screen.getByTestId('infotext-name')
  const emailField = screen.getByTestId('infotext-email')
  const jobField = screen.getByTestId('infotext-job')
  expect(nameField.textContent).toBe("Nombre: person");
  expect(emailField?.textContent).toBe("Correo: email");
  expect(jobField?.textContent).toBe("Trabajo: job");
});
