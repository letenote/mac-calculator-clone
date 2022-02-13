import React from "react";
import { render } from "../test-utils";
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from "../App";

let buttonTitleExpected: string
beforeEach(() => {
  render(<App />);
});

describe("__APP_THEME", () => {
  it("change dark mode", () => {
    userEvent.click(screen.getByTestId('theme_button'));
    buttonTitleExpected = "Light Mode";
    console.log(screen.getByTestId("calculator-box"))
    expect(screen.getByTestId('theme_button')).toHaveTextContent(buttonTitleExpected);
    expect(screen.getByTestId("calculator-box")).toHaveStyle("background-color: rgb(38, 34, 47)")
  })

  it("change light mode", () => {
    userEvent.click(screen.getByTestId('theme_button'));
    buttonTitleExpected = "Dark Mode";
    expect(screen.getByTestId('theme_button')).toHaveTextContent(buttonTitleExpected);
    expect(screen.getByTestId("calculator-box")).toHaveStyle("background-color: rgb(88, 86, 91)")
  })
})