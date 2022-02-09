import { OutputActionTypes } from '../../reducers/output-reducer/action-type';
import { Dispatch } from 'redux';
import { OutputActionInterface } from '../../reducers/output-reducer/interface/OutputActionInterface'
import { calculate } from '../../../helper/calculate';
import { RootState } from '../../reducers';
import { ErrorMessage } from '../../../constant/ErrorMessage';

export const onChangeOutputAction = ( value: string ) => {
  return ( dispatch: Dispatch<OutputActionInterface> ) => {
    dispatch({
      type: typeController(value),
      payload: value
    })
  }
};

export const onChangeOperatorClickAction = ( value: string ) => {
  return ( dispatch: Dispatch<OutputActionInterface> ) => {
    dispatch({
      type: OutputActionTypes.ONCHANGE_IS_OPERATOR_CLICK,
      payload: value
    })
  }
};

export const onChangeCalculateAction = () => {
  return ( dispatch: Dispatch<OutputActionInterface>, getState: () => RootState ): void => {
    dispatch({
      type: OutputActionTypes.ONCHANGE_CALCULATE,
      payload: generateOutput(getState().screen.log)
    })
  }
};

export const onChangePercentCalculateAction = () => {
  return ( dispatch: Dispatch<OutputActionInterface>, getState: () => RootState ): void => {
    dispatch({
      type: OutputActionTypes.ONCHANGE_CALCULATE,
      payload: getState().screen.log === "" ? "" : generateOutput(`${getState().screen.log}/100`)
    })
  }
};

export const generateOutput = ( value: string ): string => {
  try {
    let getOutput = calculate(value)
    return getOutput.toString()
  } catch (error) {
    return ErrorMessage.NAN
  }
};

const typeController = ( value: string ): OutputActionTypes => {
  switch ( value ) {
    case "AC":
      return OutputActionTypes.ONCHANGE_CLEAR_OUTPUT 
    case "+/-":
      return OutputActionTypes.ONCHANGE_IS_MINUS
    default:
      return OutputActionTypes.ONCHANGE_OUTPUT
  }
}