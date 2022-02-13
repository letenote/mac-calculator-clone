import { OutputActionInterface } from "./interface/OutputActionInterface";
import { OutputReducerInterface } from "./interface/OutputReducerInterface";
import { OutputActionTypes } from "./action-type";
import { ErrorMessage } from "../../../constant/ErrorMessage";

export const initialState = {
  output: "",
  log: "",
  isMinus: false,
  isOperatorClick: false,
  isFinishCalculate: false
};

export const OutputReducer = (
  state: OutputReducerInterface = initialState,
  action: OutputActionInterface
) => {
  switch (action.type) {
    case OutputActionTypes.ONCHANGE_IS_OPERATOR_CLICK:
      return {
        ...state,
        isOperatorClick: true,
        log: `${state.log === "" ? "" : state.log}` + action.payload,
        isFinishCalculate: false
      };

    case OutputActionTypes.ONCHANGE_OUTPUT:
      return {
        ...state,
        log: state.log === ErrorMessage.NAN
          ? action.payload
          : state.isFinishCalculate
            ? action.payload
            : `${state.log === "" ? "" : state.log}` + action.payload,
        output: state.isOperatorClick || state.isFinishCalculate
          ? action.payload
          : `${state.output === "" ? "" : state.output}` + action.payload,
        isOperatorClick: false,
        isFinishCalculate: false
      };

    case OutputActionTypes.ONCHANGE_CLEAR_OUTPUT:
      return {
        ...state,
        log: "",
        output: "",
        isMinus: false,
        isOperatorClick: false,
        isFinishCalculate: false
      };

    case OutputActionTypes.ONCHANGE_IS_MINUS:
      let clearMinus = state.log.split("");
      state.isMinus && (clearMinus[0] = "");
      const getValue = state.isMinus
        ? clearMinus.join("")
        : state.log === ""
          ? ""
          : `-${state.log}`
      return {
        ...state,
        log: getValue,
        output: getValue,
        isMinus: state.log === "" ? false : !state.isMinus,
      };
    case OutputActionTypes.ONCHANGE_CALCULATE:
      return {
        ...state,
        isFinishCalculate: true,
        isMinus: false,
        output: action.payload,
      };
    default:
      return state;
  }
};
