import { BankActionTypes } from '../action-types';

interface DepositAction {
  type: BankActionTypes.DEPOSIT,
  payload: number
}

interface WithdrawAction {
  type: BankActionTypes.WITHDRAW,
  payload: number
}

interface BankruptAction {
  type: BankActionTypes.BANKRUPT
}

export type BankAction = DepositAction | WithdrawAction | BankruptAction