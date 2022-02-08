import React, { CSSProperties, FC, Fragment, memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import {calculate} from '../helper/calculate';

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
  const app_config = useSelector((state: RootState) => state.config)
  console.log("calculate is error", calculate( '*30-6' ))
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
      <p 
        className="screen-top" 
        style={{ 
          fontSize: "clamp(1rem, -0.875rem + 8.333vw, 3.5rem)" 
        }}
      >
        100
      </p>
    </div>
  )
};

export default memo(Screen);