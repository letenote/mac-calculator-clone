interface ButtonInterface {
  id: string
  display: string,
  value: string 
  backgroundColor: string
}

export const buttons: Array<ButtonInterface> = [
  { id: "button_ac", display: "AC", value: "", backgroundColor: "#6B6971" },
  { id: "button_+/-", display: "+/-", value: "-", backgroundColor: "#6B6971" },
  { id: "button_%", display: "%", value: "%", backgroundColor: "#6B6971" },
  { id: "button_÷", display: "÷", value: "/", backgroundColor: "#FF9F0B" },
  { id: "button_7", display: "7", value: "7", backgroundColor: "#858288" },
  { id: "button_8", display: "8", value: "8", backgroundColor: "#858288" },
  { id: "button_9", display: "9", value: "9", backgroundColor: "#858288" },
  { id: "button_*", display: "x", value: "*", backgroundColor: "#FF9F0B" },
  { id: "button_4", display: "4", value: "4", backgroundColor: "#858288" },
  { id: "button_5", display: "5", value: "5", backgroundColor: "#858288" },
  { id: "button_6", display: "6", value: "6", backgroundColor: "#858288" },
  { id: "button_-", display: "-", value: "-", backgroundColor: "#FF9F0B" },
  { id: "button_1", display: "1", value: "1", backgroundColor: "#858288" },
  { id: "button_2", display: "2", value: "2", backgroundColor: "#858288" },
  { id: "button_3", display: "3", value: "3", backgroundColor: "#858288" },
  { id: "button_+", display: "+", value: "+", backgroundColor: "#FF9F0B" },
  { id: "button_0", display: "0", value: "0", backgroundColor: "#858288" },
  { id: "button_,", display: ",", value: ",", backgroundColor: "#858288" },
  { id: "button_=", display: "=", value: "=", backgroundColor: "#FF9F0B" },
];
