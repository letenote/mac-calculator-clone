import { combineReducers } from 'redux'
import { ConfigReducer } from './config-reducer';

const reducers = combineReducers({
  config: ConfigReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>