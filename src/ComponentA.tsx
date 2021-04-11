import React, { useContext } from "react";
import { CountContext } from "./App";

const ComponentA = () => {
  const contextHandler = useContext(CountContext);

  return (
    <div>
      ComponentA
      <button onClick={() => contextHandler.countDispatch("INC")}>A-INC</button>
      <button onClick={() => contextHandler.countDispatch("DEC")}>A-DEC</button>
      <button onClick={() => contextHandler.countDispatch("RESET")}>
        A-RESET
      </button>
    </div>
  );
};

export default ComponentA;
