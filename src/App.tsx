import React from "react";
import Screen from './components/Screen';
import Keypad from './components/Keypad';

const App: React.FC<{}> = () => {
  // document.body.style.backgroundColor = '#24272a'
  return (
    <div className="calculator-box">
      <Screen/>
      <Keypad/>
    </div>
  );
};

export default App;