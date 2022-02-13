import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Theme } from "../constant/Theme";
import { bindActionCreators } from "redux";
import * as configActionCreators from "../redux/actions/config-action";

const AppTheme: FC<{}> = () => {
  const dispatch = useDispatch();
  const { isDarkmode } = useSelector((state: RootState) => state.config);
  const { changeDarkmodeAction, changeLightmodeAction } = bindActionCreators(
    configActionCreators,
    dispatch
  );
  let getThemeButton: string = Theme[`${isDarkmode ? "dark" : "light"}_color`];
  return <>
    <span className="deploy-date-text" style={{ color: getThemeButton }}>
      Deployed: 14/02/2021
    </span>
    <span
      className="theme_button"
      data-testid="theme_button"
      style={{ borderColor: getThemeButton, color: getThemeButton }}
      onClick={() => {
        return isDarkmode ? changeLightmodeAction() : changeDarkmodeAction();
      }}
    >
      {`${isDarkmode ? "Light" : "Dark"} Mode`}
    </span></>
}

export default AppTheme;