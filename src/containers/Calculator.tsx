import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Screen from "../components/Screen";
import Keypad from "../components/Keypad";
import { Theme } from "../constant/Theme";


const Calculator: React.FC<{}> = () => {
  const { isDarkmode } = useSelector((state: RootState) => state.config);
  document.body.style.backgroundColor = Theme[`${isDarkmode ? "dark" : "light"}_backgroundColor`];
  return (
    <div
      className="calculator-box"
      data-testid="calculator-box"
      style={Object.assign({
        backgroundColor:
          Theme[
          `${isDarkmode ? "dark" : "light"}_backgroundColor_calculator`
          ],
      })}
    >
      <Screen />
      <Keypad />
    </div>
  );
}

export default Calculator