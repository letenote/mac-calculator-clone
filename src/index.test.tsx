import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./redux/store"; 

jest.mock('react-dom', () => ({ render: jest.fn() }));
describe('__APPLICATION_ROOT', () => {
  it('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

  it('should render without crashing from DOM', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('./index.tsx');
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    ,div);
  });

  it('does not show prototypes for object and array inline', () => {
    const object = {
      array: [{hello: 'Dange-r'}],
    };
    expect(object).toMatchInlineSnapshot(`
      {
        "array": [
          {
            "hello": "Dange-r",
          },
        ],
      }
    `);
  });
});