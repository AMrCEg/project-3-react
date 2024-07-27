// 8:51:05 Making API Calls
// 8:55:08 Intro to useEffect
// https://legacy.reactjs.org/docs/hooks-effect.html
// 9:00:54 useEffect()

import React, { useEffect, useState } from "react";

const API = () => {
  const [starWarsData, setStarWarsData] = useState({});
  // const [count, setCount] = useState(0);
  const [id, setId] = useState(1);

  // console.log("Components rendered");

  // fetch("https://swapi.dev/api/people/1")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   //     setStarWarsData(data); // dont run this line will cause infinite loop render
  //   });

  useEffect(() => {
    /* anything that we put inside of this callback function
     is guaranteed to run only after the user interface has been painted to the screen
     in other words only after react has taken our user interface our elements and created real elements on our page
     */
    console.log("Effect Function ran");
    // side effect code
    // fetch(`https://swapi.dev/api/people/1`)
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setStarWarsData(data);
      });
    //  [] Dependencies — If present, effect will only activate if the values in the list change.
    // }, [count]);
  }, [id]);

  return (
    <div>
      {/* <h1>{count}</h1> */}
      {/* <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        add
      </button> */}

      <button
        type="button"
        onClick={() =>
          setId((prevState) => (prevState > 1 ? prevState - 1 : prevState))
        }
      >
        Get previous Character
      </button>

      <h1>{id}</h1>

      <button type="button" onClick={() => setId((prevState) => prevState + 1)}>
        Get Next Character
      </button>

      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
};

export default API;
