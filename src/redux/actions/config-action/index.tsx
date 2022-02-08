import { ConfigActionTypes } from '../../reducers/config-reducer/action-type';
import { Dispatch } from 'redux';
import { ConfigActionInterface } from '../../reducers/config-reducer/interface/ConfigActionInterface'

export const changeDarkmodeAction = () => {
  return ( dispatch: Dispatch<ConfigActionInterface> ) => {
    dispatch({
      type: ConfigActionTypes.CHANGE_DARKMODE
    })
  }
};

export const changeLightmodeAction = () => {
  return ( dispatch: Dispatch<ConfigActionInterface> ) => {
    dispatch({
      type: ConfigActionTypes.CHANGE_LIGHTMODE
    })
  }
};