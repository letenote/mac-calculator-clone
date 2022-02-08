import { Theme } from "../constant/Theme";

export const generateButtonBgColor = ( idButton: string ): string => {
  switch ( idButton ) {
    case "button_7":
    case "button_8":
    case "button_9":
    case "button_4":
    case "button_5":
    case "button_6":
    case "button_1":
    case "button_2":
    case "button_3":
    case "button_0":
    case "button_,":
      return Theme.button_number_backgroundColor
    case "button_÷":
    case "button_*":
    case "button_-":
    case "button_+":
    case "button_=":
      return Theme.button_operatorRight_backgroundColor
    case "button_ac":
    case "button_+/-":
    case "button_%":
      return Theme.button_operatorTop_backgroundColor
    default:
      return "black"
  }
}