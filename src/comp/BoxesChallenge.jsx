// 6:50:53 Boxes Challenge

// import React from 'react'
import React, { useState } from "react";

import { boxes } from "./boxes";
import Box from "./Box";

const BoxesChallenge = () => {
  // console.log(props);

  //box
  const [squares, setSquares] = useState(boxes);

  // const stylesheet = {
  //   // backgroundColor: "black",
  //   backgroundColor: props.darkMood ? "#222222" : "#cccccc",
  // };

  const toggle = (id) => {
    // console.log("toggle");
    // console.log(id);

    setSquares((prevSquares) => {
      //  //using for loop

      // let newSquares = [];
      // for (let i = 0; i < prevSquares.length; i++) {
      //   const currentSquare = prevSquares[i];
      //   if (currentSquare.id === id) {
      //     // const updatedSquare = { ...currentSquare, on: !currentSquare.on };
      //     const updatedSquare = { id: currentSquare.id, on: !currentSquare.on };
      //     newSquares.push(updatedSquare);
      //   } else {
      //     newSquares.push(currentSquare);
      //   }
      // }

      //  //using forEach
      // let newSquares = [];
      // prevSquares.forEach((square) => {
      //   if (square.id === id) {
      //     // const updatedSquare = { ...currentSquare, on: !currentSquare.on };
      //     const updatedSquare = { id: square.id, on: !square.on };
      //     newSquares.push(updatedSquare);
      //   } else {
      //     newSquares.push(square);
      //   }
      // });

      //  //using map
      let newSquares = prevSquares.map((square) =>
        square.id === id ? { id: square.id, on: !square.on } : square
      );

      return newSquares;
    });
  };

  const squareElements = squares.map((square) => (
    // <div style={stylesheet} key={square.id} className="box">
    //   {square.id}
    // </div>
    // <Box key={square.id}  on={square.on} toggle={toggle} />
    // <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
    <Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />
  ));

  return (
    <>
      <main>
        <h1>Boxes Will Go Here</h1>
        {squareElements}
      </main>
    </>
  );
};

export default BoxesChallenge;
