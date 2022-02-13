import React from "react";
import renderer from "react-test-renderer";
import { render } from "./test-utils";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// get real redux store
// https://reactjs.org/docs/test-renderer.html
let myApp: any;
let instance;
beforeEach(() => {
  myApp = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
  instance = myApp.root;
});

describe("__REDUX_CONNECTED", () => {
  it("create snapshoot", () => {
    const tree = myApp.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with given default "Config" state from Redux store', () => {
    const getConfigReducer = store.getState().config;
    const expected = {
      isDarkmode: false
    };

    expect(getConfigReducer.isDarkmode).toEqual(expected.isDarkmode);
  })

  it('should render with given default "Screen" state from Redux store', () => {
    const getOutputReducer = store.getState().screen;
    const expected = {
      output: "",
      log: "",
      isMinus: false,
      isOperatorClick: false
    };

    expect(getOutputReducer.output).toEqual(expected.output);
    expect(getOutputReducer.log).toEqual(expected.log);
    expect(getOutputReducer.isMinus).toEqual(expected.isMinus);
    expect(getOutputReducer.isOperatorClick).toEqual(expected.isOperatorClick);
  })
});
