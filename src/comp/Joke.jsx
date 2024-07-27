import React, { useState } from "react";

const Joke = (props) => {
  const [isShown, setIsShown] = useState(false);

  const toggleShown = () => {
    console.log(isShown);
    setIsShown((prevState) => !prevState);
  };

  return (
    <div style={{ fontSize: "30px", color: "green" }}>
      {props.setup && <h3>setup:{props.setup}</h3>}

      {isShown && (
        <p style={{ margin: "10px" }}>Punchline: {props.Punchline}</p>
      )}

      <button style={{ margin: "10px" }} onClick={toggleShown}>
        {isShown ? "Hide" : "Show"} Punchline
      </button>
      <hr />
    </div>
  );
};

export default Joke;
