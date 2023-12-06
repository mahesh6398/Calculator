import React, { useState } from "react";
import Display from "./Display";
import Buttoncontainer from "./buttonContainer";

import style from "./App.module.css";
const App = () => {
  const [calval, setVal] = useState("");

  const calcualte = (buttontext) => {
    if (buttontext === "C") {
      setVal("");
    } else if (buttontext === "=") {
      let result = eval(calval);
      setVal(result);
    } else {
      let displayval = calval + buttontext;
      setVal(displayval);
    }
  };

  return (
    <div className={style.container}>
      <Display calval={calval}></Display>
      <Buttoncontainer onCal={calcualte}></Buttoncontainer>
    </div>
  );
};

export default App;
