import React from "react";
import { render } from "../test-utils";
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Calculator from "./Calculator";

let myApp
let getScreenOutput: any
let getScreenLog: any
let expectedLogValue: string
let expectedScreenValue: string
beforeEach(() => {
  render(<Calculator />);
  getScreenOutput = screen.getByTestId('screen_output_value');
  getScreenLog = screen.getByTestId('screen_log_value');
});

describe("__APP_TEST_CASE", () => {
  it("calculate test 7*7 = 49", () => {
    expectedLogValue = "7*7"
    expectedScreenValue = "49"
    userEvent.click(screen.getByTestId('button_7'));
    userEvent.click(screen.getByTestId('button_*'));
    userEvent.click(screen.getByTestId('button_7'));
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);
  });

  it("reset button", () => {
    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = ""
    expectedScreenValue = "0"
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);
  })

  it("percent button", () => {
    expectedLogValue = "7"
    expectedScreenValue = "0.07"
    userEvent.click(screen.getByTestId('button_7'));
    userEvent.click(screen.getByTestId('button_%'));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);
  })

  it("+/- button", () => {
    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = "-7"
    expectedScreenValue = "-7"
    userEvent.click(screen.getByTestId('button_7'));
    userEvent.click(screen.getByTestId('button_+/-'));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);

    expectedLogValue = "7"
    expectedScreenValue = "7"
    userEvent.click(screen.getByTestId('button_+/-'));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);
  })

  it("comma button", () => {
    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = "8.5-0.5"
    expectedScreenValue = "8"
    userEvent.click(screen.getByTestId('button_8'));
    userEvent.click(screen.getByTestId('button_,'));
    userEvent.click(screen.getByTestId('button_5'));
    userEvent.click(screen.getByTestId('button_-'));
    userEvent.click(screen.getByTestId('button_0'));
    userEvent.click(screen.getByTestId('button_,'));
    userEvent.click(screen.getByTestId('button_5'));
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);
  })

  it('should print "Not a number" for expressions starting with any other operator apart from "-" ', () => {
    expectedScreenValue = "Not a number";
    expectedLogValue = "*30-6";
    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = "*30-6";
    userEvent.click(screen.getByTestId('button_*'));
    userEvent.click(screen.getByTestId('button_3'));
    userEvent.click(screen.getByTestId('button_0'));
    userEvent.click(screen.getByTestId('button_-'));
    userEvent.click(screen.getByTestId('button_6'));
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);

    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = "*3";
    userEvent.click(screen.getByTestId('button_*'));
    userEvent.click(screen.getByTestId('button_3'));
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);

    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = "+4-6";
    userEvent.click(screen.getByTestId('button_+'));
    userEvent.click(screen.getByTestId('button_4'));
    userEvent.click(screen.getByTestId('button_-'));
    userEvent.click(screen.getByTestId('button_6'));
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);

    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = "/4-6";
    userEvent.click(screen.getByTestId('button_÷'));
    userEvent.click(screen.getByTestId('button_4'));
    userEvent.click(screen.getByTestId('button_-'));
    userEvent.click(screen.getByTestId('button_6'));
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);
  });

  it("ignores trailing operators while evaluating the expression correctly", () => {
    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = "2+3+4-4*3-";
    expectedScreenValue = "-3";
    userEvent.click(screen.getByTestId('button_2'));
    userEvent.click(screen.getByTestId('button_+'));
    userEvent.click(screen.getByTestId('button_3'));
    userEvent.click(screen.getByTestId('button_+'));
    userEvent.click(screen.getByTestId('button_4'));
    userEvent.click(screen.getByTestId('button_-'));
    userEvent.click(screen.getByTestId('button_4'));
    userEvent.click(screen.getByTestId('button_*'));
    userEvent.click(screen.getByTestId('button_3'));
    userEvent.click(screen.getByTestId('button_-'));
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);
  });

  it("not ignores every expression after multiple operators while evaluating the expression correctly", () => {
    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = "2+3++4-/4*3+78-";
    expectedScreenValue = "5";
    userEvent.click(screen.getByTestId('button_2'));
    userEvent.click(screen.getByTestId('button_+'));
    userEvent.click(screen.getByTestId('button_3'));
    userEvent.click(screen.getByTestId('button_+'));
    userEvent.click(screen.getByTestId('button_+'));
    userEvent.click(screen.getByTestId('button_4'));
    userEvent.click(screen.getByTestId('button_-'));
    userEvent.click(screen.getByTestId('button_÷'));
    userEvent.click(screen.getByTestId('button_4'));
    userEvent.click(screen.getByTestId('button_*'));
    userEvent.click(screen.getByTestId('button_3'));
    userEvent.click(screen.getByTestId('button_+'));
    userEvent.click(screen.getByTestId('button_7'));
    userEvent.click(screen.getByTestId('button_8'));
    userEvent.click(screen.getByTestId('button_-'));
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);
  });

  it("evaluates the expression correctly", () => {
    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = "2+3+4-4*3";
    expectedScreenValue = "-3";
    userEvent.click(screen.getByTestId('button_2'));
    userEvent.click(screen.getByTestId('button_+'));
    userEvent.click(screen.getByTestId('button_3'));
    userEvent.click(screen.getByTestId('button_+'));
    userEvent.click(screen.getByTestId('button_4'));
    userEvent.click(screen.getByTestId('button_-'));
    userEvent.click(screen.getByTestId('button_4'));
    userEvent.click(screen.getByTestId('button_*'));
    userEvent.click(screen.getByTestId('button_3'));
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);

    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = "0+3+4";
    expectedScreenValue = "7";
    userEvent.click(screen.getByTestId('button_0'));
    userEvent.click(screen.getByTestId('button_+'));
    userEvent.click(screen.getByTestId('button_3'));
    userEvent.click(screen.getByTestId('button_+'));
    userEvent.click(screen.getByTestId('button_4'));
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);

    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = "0-9";
    expectedScreenValue = "-9";
    userEvent.click(screen.getByTestId('button_0'));
    userEvent.click(screen.getByTestId('button_-'));
    userEvent.click(screen.getByTestId('button_9'));
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);

    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = "0.5+2.3";
    expectedScreenValue = "2.8";
    userEvent.click(screen.getByTestId('button_0'));
    userEvent.click(screen.getByTestId('button_,'));
    userEvent.click(screen.getByTestId('button_5'));
    userEvent.click(screen.getByTestId('button_+'));
    userEvent.click(screen.getByTestId('button_2'));
    userEvent.click(screen.getByTestId('button_,'));
    userEvent.click(screen.getByTestId('button_3'));
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);
  });

  it('evaluates longer expressions starting with a "-" operator', () => {
    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = "-30-6";
    expectedScreenValue = "-36"
    userEvent.click(screen.getByTestId('button_3'));
    userEvent.click(screen.getByTestId('button_0'));
    userEvent.click(screen.getByTestId('button_+/-'));
    userEvent.click(screen.getByTestId('button_-'));
    userEvent.click(screen.getByTestId('button_6'));
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);

    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = "-0.5+5.3";
    expectedScreenValue = "4.8";
    userEvent.click(screen.getByTestId('button_0'));
    userEvent.click(screen.getByTestId('button_,'));
    userEvent.click(screen.getByTestId('button_5'));
    userEvent.click(screen.getByTestId('button_+/-'));
    userEvent.click(screen.getByTestId('button_+'));
    userEvent.click(screen.getByTestId('button_5'));
    userEvent.click(screen.getByTestId('button_,'));
    userEvent.click(screen.getByTestId('button_3'));
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);
  });

  it("evaluates reset log and screen output after press = and then press button numbers", () => {
    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = "9*9";
    expectedScreenValue = "81";
    userEvent.click(screen.getByTestId('button_9'));
    userEvent.click(screen.getByTestId('button_*'));
    userEvent.click(screen.getByTestId('button_9'));
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);
    userEvent.click(screen.getByTestId('button_9'));
    expectedLogValue = "9";
    expectedScreenValue = "9";
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);
  })

  it("evaluates continue calculate after press = and then press button operators", () => {
    userEvent.click(screen.getByTestId('button_ac'));
    expectedLogValue = "9*9";
    expectedScreenValue = "81";
    userEvent.click(screen.getByTestId('button_9'));
    userEvent.click(screen.getByTestId('button_*'));
    userEvent.click(screen.getByTestId('button_9'));
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);
    userEvent.click(screen.getByTestId('button_*'));
    userEvent.click(screen.getByTestId('button_9'));
    expectedLogValue = "9*9*9";
    expectedScreenValue = "729";
    userEvent.click(screen.getByTestId('button_='));
    expect(getScreenLog).toHaveTextContent(expectedLogValue);
    expect(getScreenOutput).toHaveTextContent(expectedScreenValue);
  })
});