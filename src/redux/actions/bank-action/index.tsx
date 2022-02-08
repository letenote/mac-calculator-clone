import { BankActionTypes } from "../../reducers/bank-reducer/action-types";
import { Dispatch } from 'redux';
import { BankAction } from "../../reducers/bank-reducer/interface/BankActionInterface";

export const depositMoney = ( amount: number ) => {
  console.log("XXX", amount)
  return ( dispatch: Dispatch<BankAction> ) => {
    dispatch({
      type: BankActionTypes.DEPOSIT,
      payload: amount
    })
  }
};

export const withdrawMoney = ( amount: number ) => {
  return ( dispatch: Dispatch<BankAction> ) => {
    dispatch({
      type: BankActionTypes.WITHDRAW,
      payload: amount
    })
  }
};

export const bankruptMoney = () => {
  return ( dispatch: Dispatch<BankAction> ) => {
    dispatch({
      type: BankActionTypes.BANKRUPT
    })
  }
};
