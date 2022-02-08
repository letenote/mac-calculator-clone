import { BankReducer  } from "./interface/BankReducerInterface";
import { BankAction } from "./interface/BankActionInterface";
import { BankActionTypes } from "./action-types";
export const initialState = {
  money: 0
};

export const bankReducer = ( state: BankReducer = initialState, action: BankAction ) => {
  switch( action.type ){
    case BankActionTypes.DEPOSIT:
      return {
        ...state,
        money: state.money + action.payload
      }
    case BankActionTypes.WITHDRAW:
        return {
          ...state,
          money: state.money - action.payload
        }
    case BankActionTypes.BANKRUPT:
      return {
        ...state,
        money: 0
      }
    default:
      return state
  }
}

// export default bankReducer;