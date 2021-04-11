import React, { useContext } from "react";
import { CountContext } from "./App";

const ComponentC = () => {
  const contextHandler = useContext(CountContext);

  return (
    <div>
      ComponentB
      <button onClick={() => contextHandler.countDispatch("INC")}>C-INC</button>
      <button onClick={() => contextHandler.countDispatch("DEC")}>C-DEC</button>
      <button onClick={() => contextHandler.countDispatch("RESET")}>
        C-RESET
      </button>
    </div>
  );
};

export default ComponentC;
