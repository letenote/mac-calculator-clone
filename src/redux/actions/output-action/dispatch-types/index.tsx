import {
  onChangeCalculateAction,
  onChangeOperatorClickAction,
  onChangeOutputAction,
  onChangePercentCalculateAction,
} from "..";

export type CalculatorActivityDispatchTypes = ReturnType<
  | typeof onChangeOutputAction
  | typeof onChangeCalculateAction
  | typeof onChangePercentCalculateAction
  | typeof onChangeOperatorClickAction
>;
