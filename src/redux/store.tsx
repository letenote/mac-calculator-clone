import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "./middleware/logger";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const middleware = [thunk, logger];
const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  process.env.NODE_ENV === "development"
    ? composeEnhanchers(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
