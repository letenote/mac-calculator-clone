import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux"
import { store } from "./redux/store"; 
import {initialState, bankReducer} from './redux/reducers/bank-reducer/index';
import { BankActionTypes } from "./redux/reducers/bank-reducer/action-types";

// get real redux store
// https://reactjs.org/docs/test-renderer.html
let myApp:any;
let instance;
beforeEach(() => {
  myApp = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
  instance = myApp.root;
});

describe('__REDUX_CONNECTED', () => {
  it('create snapshoot', () => {
    const tree = myApp.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
