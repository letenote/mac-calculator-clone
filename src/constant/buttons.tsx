export interface ButtonInterface {
  id: string
  display: string,
  value: string 
}

export const buttons: Array<ButtonInterface> = [
  { id: "button_ac", display: "AC", value: "AC" },
  { id: "button_+/-", display: "+/-", value: "+/-" },
  { id: "button_%", display: "%", value: "%" },
  { id: "button_÷", display: "÷", value: "/" },
  { id: "button_7", display: "7", value: "7" },
  { id: "button_8", display: "8", value: "8" },
  { id: "button_9", display: "9", value: "9" },
  { id: "button_*", display: "x", value: "*" },
  { id: "button_4", display: "4", value: "4" },
  { id: "button_5", display: "5", value: "5" },
  { id: "button_6", display: "6", value: "6" },
  { id: "button_-", display: "-", value: "-" },
  { id: "button_1", display: "1", value: "1" },
  { id: "button_2", display: "2", value: "2" },
  { id: "button_3", display: "3", value: "3" },
  { id: "button_+", display: "+", value: "+" },
  { id: "button_0", display: "0", value: "0" },
  { id: "button_,", display: ",", value: "." },
  { id: "button_=", display: "=", value: "=" },
];
