import React, { CSSProperties, FC, memo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { buttons } from "../constant/buttons";
import { Theme } from "../constant/Theme";
import { generateButtonBgColor } from "../helper/generateButtonBgColor";
import * as outputActionCreators from "../redux/actions/output-action";
import { ButtonInterface } from "../constant/buttons";
import type { CalculatorActivityDispatchTypes } from "../redux/actions/output-action/dispatch-types";

const keypadContainerStyles: CSSProperties = {
  height: "75%",
  width: "100%",
  justifyContent: "space-between",
  display: "flex",
  flexWrap: "wrap",
};

const Keypad: FC = () => {
  const dispatch = useDispatch();
  const {
    onChangeOutputAction,
    onChangeCalculateAction,
    onChangePercentCalculateAction,
    onChangeOperatorClickAction,
  } = bindActionCreators(outputActionCreators, dispatch);

  const onClickHandler = (
    button: ButtonInterface
  ): CalculatorActivityDispatchTypes => {
    switch (button.id) {
      case "button_=":
        return onChangeCalculateAction()
      // return (
      //   onChangeOperatorClickAction(button.value),
      //   onChangeCalculateAction()
      // );
      case "button_%":
        return onChangePercentCalculateAction();
      case "button_÷":
      case "button_*":
      case "button_-":
      case "button_+":
        return onChangeOperatorClickAction(button.value);
      default:
        return onChangeOutputAction(button.value);
    }
  };

  return (
    <div style={keypadContainerStyles}>
      {buttons.map((button, buttonIndex) => {
        return (
          <button
            key={buttonIndex}
            className="button"
            data-testid={button.id}
            style={Object.assign(
              {
                width: button.id === "button_0" ? "50%" : "25%",
                backgroundColor: generateButtonBgColor(button.id),
                height: "20%",
                fontSize: button.id === "button_÷" || button.id === "button_-"
                  ? 20
                  : 14,
                border: `solid ${Theme.light_backgroundColor_calculator} 0.1px`,
              },
              button.id === "button_0" && { borderBottomLeftRadius: "10px" },
              button.id === "button_=" && { borderBottomRightRadius: "10px" }
            )}
            type={"button"}
            onClick={() => onClickHandler(button)}
          >
            {button.display}
          </button>
        );
      })}
    </div>
  );
};

export default memo(Keypad);
