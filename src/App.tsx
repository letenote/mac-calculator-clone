import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Screen from "./components/Screen";
import Keypad from "./components/Keypad";
import { Theme } from "./constant/Theme";
import { bindActionCreators } from "redux";
import * as configActionCreators from "./redux/actions/config-action";

const App: React.FC<{}> = () => {
  const { isDarkmode } = useSelector((state: RootState) => state.config);
  const dispatch = useDispatch();
  const { changeDarkmodeAction, changeLightmodeAction } = bindActionCreators(
    configActionCreators,
    dispatch
  );
  let getThemeButton: string = Theme[`${isDarkmode ? "dark" : "light"}_color`];
  document.body.style.backgroundColor = Theme[`${isDarkmode ? "dark" : "light"}_backgroundColor`];
  return (
    <>
      <span className="deploy-date-text" style={{ color: getThemeButton }}>
        Deployed: 10/01/2021
      </span>
      <span
        className="theme_button"
        style={{ borderColor: getThemeButton, color: getThemeButton }}
        onClick={() => {
          return isDarkmode ? changeLightmodeAction() : changeDarkmodeAction();
        }}
      >
        {`${isDarkmode ? "Light" : "Dark"} Mode`}
      </span>
      <div
        className="calculator-box"
        style={Object.assign({
          backgroundColor:
            Theme[
            `${isDarkmode ? "dark" : "light"}_backgroundColor_calculator`
            ],
        })}
      >
        <Screen />
        <Keypad />
      </div>
    </>
  );
};

export default App;
