import React, { CSSProperties, FC, memo } from "react";
import { Textfit } from 'react-textfit';

const screenGroupStyles: CSSProperties = {
  height: "25%", 
  padding: 10
}

const Screen: FC= () => {
  return(
    <div style={screenGroupStyles}>
      <div style={{ display: "flex", justifyContent: "space-between", width: 50, position: "absolute" }}>
        {
          ["DE564F","EDBB3F","75C84E"].map((button, index) => {
            return (
              <div key={index} className={"miniButton"} style={{ backgroundColor: `#${button}`}}/>
            )
          })
        }
      </div>
      <Textfit
        max={55}
        throttle={10}
        mode="single"
        className="screen-top"
      >
        0
      </Textfit>
    </div>
  )
};

export default memo(Screen);