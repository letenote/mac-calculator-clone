import React, { CSSProperties, FC, Fragment, memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import {calculate} from '../helper/calculate';
import { ErrorMessage } from "../constant/ErrorMessage";

const screenGroupStyles: CSSProperties = {
  height: "25%", 
  padding: "10px 10px 0px 10px",
  display: "flex"
}

const miniButtonGroupStyles: CSSProperties = {
  display: "flex", 
  justifyContent: "space-between", 
  width: 50, 
  position: "absolute"
}

const Screen: FC= () => {
  const app_screen = useSelector((state: RootState) => state.screen);
  const screenFontSizeDefault = 36
  console.log("calculate is error", calculate( '10%' ))
  console.log("calculate length", app_screen.log.length)
  return(
    <div style={screenGroupStyles}>
      <div style={miniButtonGroupStyles}>
        {
          ["DE564F","EDBB3F","75C84E"].map((button, index) => {
            return (
              <div key={index} className={"miniButton"} style={{ backgroundColor: `#${button}`}}/>
            )
          })
        }
      </div>
      <span style={{
        position: "absolute",
        right: "10px",
        color: "grey",
      }}>{app_screen.log}</span>
      <p 
        className="screen-top" 
        style={{ 
          // fontSize: "clamp(1rem, -0.875rem + 8.333vw, 3.5rem)" 
          fontSize: `${app_screen.output === ErrorMessage.NAN ?"28" : screenFontSizeDefault}px`
        }}
      >
        {app_screen.output === "" ? "0" : app_screen.output}
      </p>
    </div>
  )
};

export default memo(Screen);