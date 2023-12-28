/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div
      style={{
        border: "2px solid yellow",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <h2>Counter: {count}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};

export default Counter;
