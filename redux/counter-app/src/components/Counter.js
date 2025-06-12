import React from "react";
import { useSelector } from "react-redux";

function Counter() {
  const countValue = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>Count: {countValue}</h1>
    </div>
  );
}

export default Counter;
