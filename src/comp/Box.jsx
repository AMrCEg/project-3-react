import React, { useState } from "react";

const Box = (props) => {
  // console.log(props);

  // derived state  don't use it
  // const [on, setOn] = useState(props.on);

  // const toggle = () => {
  //   // console.log("toggle");
  //   setOn((prevstate) => !prevstate);
  // };

  const stylesheet = {
    // backgroundColor: on ? "#222222" : "none",
    // backgroundColor: on ? "#222222" : "transparent",
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  // return <div style={stylesheet} className="box" onClick={toggle}></div>;
  return (
    <div
      style={stylesheet}
      className="box"
      // onClick={props.toggle}
      // onClick={() => props.toggle(props.id)}
      onClick={props.toggle}
    ></div>
  );
};

export default Box;
