import { ConfigActionTypes } from '../action-type';

interface ChangeDarkmodeInterface {
  type: ConfigActionTypes.CHANGE_DARKMODE,
}

interface ChangeLightmodeInterface {
  type: ConfigActionTypes.CHANGE_LIGHTMODE,
}

export type ConfigActionInterface = ChangeDarkmodeInterface | ChangeLightmodeInterface