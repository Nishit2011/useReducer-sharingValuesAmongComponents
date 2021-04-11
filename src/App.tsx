import "./styles.css";
import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return 0;
  }
};

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <div>
        <b>Sharing state across 3 components using useReducer</b>
      </div>
      <br />
      <CountContext.Provider
        value={{ countVal: count, countDispatch: dispatch }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>

      <p>
        <b>Count Value: {count}</b>
      </p>
    </div>
  );
}
