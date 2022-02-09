import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import Screen from './components/Screen';
import Keypad from './components/Keypad';
import { Theme } from "./constant/Theme";
import { bindActionCreators } from "redux";
import * as configActionCreators from './redux/actions/config-action';

const App: React.FC<{}> = () => {
  const app_config = useSelector((state: RootState) => state.config);
  const dispatch = useDispatch();
  const { changeDarkmodeAction, changeLightmodeAction } = bindActionCreators(configActionCreators, dispatch);
  const getThemeButton:string = app_config.isDarkmode ? Theme.dark_color : Theme.light_color;
  document.body.style.backgroundColor = app_config.isDarkmode ? Theme.dark_backgroundColor : Theme.light_backgroundColor;
  return (
    <>
      <span 
      className="deploy-date-text" 
      style={{
          color: getThemeButton
        }}
      >
        Deployed: 09/01/2021
      </span>
      <span 
        className="theme_button"
        style={{
          borderColor: getThemeButton,
          color: getThemeButton
        }}
        onClick={() => {
          return app_config.isDarkmode ? changeLightmodeAction() : changeDarkmodeAction()
        }}
      >
        {`${app_config.isDarkmode ? "Light" : "Dark"} Mode`}
      </span>
      <div 
        className="calculator-box" 
        style={Object.assign(
          { backgroundColor: app_config.isDarkmode ? Theme.dark_backgroundColor_calculator : Theme.light_backgroundColor_calculator }
        )}
      >
        <Screen/>
        <Keypad/>
      </div>
    </>
  );
};

export default App;