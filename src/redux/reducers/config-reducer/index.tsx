import { ConfigReducerInterface } from './interface/ConfigReducerInterface';
import { ConfigActionInterface } from './interface/ConfigActionInterface';
import { ConfigActionTypes } from './action-type';

export const initialState = {
  isDarkmode: false
}

export const ConfigReducer = ( state: ConfigReducerInterface = initialState, action: ConfigActionInterface ) => {
  switch ( action.type ) {
    case ConfigActionTypes.CHANGE_DARKMODE:
      return {
        ...state,
        isDarkmode: true
      }
    case ConfigActionTypes.CHANGE_LIGHTMODE:
        return {
          ...state,
          isDarkmode: false
        }
    default:
      return state
  }
}