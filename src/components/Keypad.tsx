import React, { CSSProperties, FC, memo } from "react";
import { buttons } from '../constant/buttons';

const keypadContainerStyles: CSSProperties = {
  height: "75%",
  width: "100%",
  justifyContent: "space-between",
  display: "flex",
  flexWrap: "wrap",
};

const Keypad: FC= () => {
  return(
    <div style={keypadContainerStyles}>
      {
        buttons.map((button, buttonIndex) => {
          return(
            <button
              key={buttonIndex}
              className="button"
              style={Object.assign(
                {
                  width: button.id === "button_0" ? "50%" : "25%", // "49.7%" : "24.5%",
                  backgroundColor: button.backgroundColor,
                  height: "20%", // "19.2%",
                  fontSize: button.id === "button_÷" || button.id === "button_-" ? 20 : 14,
                  border: "solid #58565a 0.1px"
                },
                button.id === "button_0" && { "borderBottomLeftRadius": "10px 10px" },
                button.id === "button_=" && { "borderBottomRightRadius": "10px 10px" }
              )} 
              type={'button'}
              onClick={() => {}}
            >
              { button.display }
            </button>
          )
        })
      }
    </div>
  )
};

export default memo(Keypad);