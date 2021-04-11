import React, { useContext } from "react";
import { CountContext } from "./App";

const ComponentB = () => {
  const contextHandler = useContext(CountContext);

  return (
    <div>
      ComponentB
      <button onClick={() => contextHandler.countDispatch("INC")}>B-INC</button>
      <button onClick={() => contextHandler.countDispatch("DEC")}>B-DEC</button>
      <button onClick={() => contextHandler.countDispatch("RESET")}>
        B-RESET
      </button>
      <div>Value in Component B: {contextHandler.countVal}</div>
    </div>
  );
};

export default ComponentB;
