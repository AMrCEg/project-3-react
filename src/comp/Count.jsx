import React from "react";

const Count = (props) => {
  const clickHandle = () => props.setCount(0);

  // console.log("Count component rendered");

  return (
    <div>
      <h1>{props.number}</h1>
      <button onClick={clickHandle}>Reset</button>
    </div>
  );
};

export default Count;
