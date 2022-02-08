import { OutputActionTypes } from '../action-type';

interface OnChangeOutputInterface {
  type: OutputActionTypes.ONCHANGE_OUTPUT,
  payload: string
}

interface OnChangeClearOutputInterface {
  type: OutputActionTypes.ONCHANGE_CLEAR_OUTPUT,
  payload?: string
}

interface OnChangeIsMinusInterface {
  type: OutputActionTypes.ONCHANGE_IS_MINUS,
  payload?: string
}

interface OnChangeCalculateInterface {
  type: OutputActionTypes.ONCHANGE_CALCULATE,
  payload: string
}

interface OnChangeIsOperatorClickInterface {
  type: OutputActionTypes.ONCHANGE_IS_OPERATOR_CLICK,
  payload?: string
}

export type OutputActionInterface = OnChangeOutputInterface | OnChangeClearOutputInterface | OnChangeIsMinusInterface | OnChangeCalculateInterface | OnChangeIsOperatorClickInterface