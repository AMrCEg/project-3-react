// import React from "react";
import React, { useState } from "react";

// import API from "./Comp/API";

import "./index.css";
import "./App.css";

import Header from "./comp/Header";
import Meme from "./comp/Meme";
import Practice from "./comp/Practice";
import CardChallenge from "./comp/CardChallenge";
import BoxesChallenge from "./comp/BoxesChallenge";
import ConditionalRender from "./comp/ConditionalRender";
import Form from "./comp/Form";
import LoginFormChallenge from "./comp/LoginFormChallenge";
import API from "./comp/API";
import WindowTracker from "./comp/WindowTracker";

// import lightToggle from "./images/lightToggle.png"; // use this if move image folder to src folder
// import darkToggle from "./images/darkToggle.png";  // use this if move image folder to src folder

const App = () => {
  const [isLight, setIslight] = useState(false);

  //Box state and toggle
  // const[squares,setSquares]=useState(boxes);
  // const handelToggle=(id)=>{
  //   setSquares((prevState)=>
  //             prevState.map((square)=>
  //                         square.id===id?{...square,on:!square.on}:square))
  // }

  // const handelClick = () => {
  //   setIslight(!isLight);
  // };

  // console.log("App component rendered");

  //WindowTracker challenge
  const [isShow, setIsShow] = useState(true);
  return (
    <div
      className="container"
      // style={{ backgroundColor: isLight ? "white" : "black" }}
    >
      {/* <div> */}
      {/* {squares.map((square)=> <Box key={square.id}  on={square.on} toggle={()=>handelToggle(square.id)} />)} */}

      {/* <Header /> */}

      {/* 
      <img
        style={{ paddingTop: "10px" }}
        src={isLight ? "./images/lightToggle.png" : "./images/darkToggle.png"}
        alt="lightToggle"
        onClick={handelClick}
      /> */}

      <Meme />

      {/* <Practice /> */}

      {/* <CardChallenge /> */}

      {/* <BoxesChallenge /> */}
      {/* <BoxesChallenge darkMood={false} /> */}

      {/* <ConditionalRender /> */}

      {/* <Form /> */}
      {/* <LoginFormChallenge /> */}

      {/* <API /> */}

      {/* WindowTracker challenge */}
      {/* <div className="window-tracker-container">
        <button
          className="window-tracker-button"
          onClick={() => {
            setIsShow((prevState) => !prevState);
          }}
        >
          Toggle WindowTracker
        </button>
        {isShow && <WindowTracker />}
      </div> */}
    </div>
  );
};

export default App;
