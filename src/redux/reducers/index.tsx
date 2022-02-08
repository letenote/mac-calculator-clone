import { combineReducers } from 'redux'
import { ConfigReducer } from './config-reducer';
import { OutputReducer } from './output-reducer';

const reducers = combineReducers({
  config: ConfigReducer,
  screen: OutputReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>