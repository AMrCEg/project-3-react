//Event Listeners
//Project: Get random meme
//Our current conundrum
//Props vs. State
//useState
//Changing State
//useState - Counter Practice
//useState - Changing state with a callback Function
//Challenge: Ternary Practice & flipping State back and forth

// 6:31:59 Passing state as props

import { useEffect } from "react";
import { useState } from "react";
import { memesData } from "../comp/memesData";
import Count from "./Count";

const Practice = () => {
  /*Event Listeners
  function handleMouseEnter() {
    console.log("Mouse Over");
  }
  function handleMouseLeave() {
    console.log("Mouse Leave");
  }
*/

  // /*Project: Get random meme*/
  // /*Our current conundrum */
  // let randomImageUrl;
  // function getMemeImage() {
  //   // console.log("button is clicked");
  //   // console.log(Math.floor(Math.random() * 100));
  //   const allMemesArray = memesData.data.memes;
  //   const randomNumber = Math.floor(Math.random() * allMemesArray.length);
  //   randomImageUrl = allMemesArray[randomNumber].url;
  //   console.log(randomImageUrl);
  // }

  const styleSheet = {
    width: "500px",
    height: "500px",
    backgroundColor: "aqua",
    margin: "0 auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  //   useEffect(() => {
  //     // console.log("effect");
  //     fetch("https://api.imgflip.com/get_memes")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log(data.data.memes[Math.floor(Math.random() * 100)].url);
  //         setAllMemes(data.data.memes);
  //         //     let i = 0;
  //         //     for (const iterator of data) {
  //         //       console.log(`User${i++}=>`);
  //         //       console.log(
  //         //         `Name=>${iterator.name}, EMail=>${iterator.email}, Phone=>${iterator.phone}, Address=>${iterator.address.street} street, ${iterator.address.city} city`
  //         //       );
  //         //       console.log(`Company=>${iterator.company.name}`);
  //         //       console.log(`Website: ${iterator.website}`);
  //         //     }
  //       })
  //       .catch((error) => console.error("Error Found"));
  //   }, []);

  // /*useState just example*/
  // // const array = ["thing1", "thing2"];
  // const [arr, setArr] = useState(["thing1", "thing2"]);

  // function addItem() {
  //   // console.log("add Item");
  //   //  setItemArr((prevArr) => prevArr.concat([`Thing${prevArr.length + 1}`]));
  //   setArr((prevArr) => [...prevArr, `thing${prevArr.length + 1}`]);
  //   // console.log(arr);
  // }
  // const items = arr.map((item, index) => <p key={index}>{item}</p>);

  /*useState*/
  // const result = useState("yes");
  // console.log(result);
  // console.log(result[0]);
  // const [state, func] = useState("yes");
  // console.log(state);

  /*useState & Changing State*/
  const [isImportant, setIsImportant] = useState("yes");

  /*useState - Counter Practice*/
  const [count, setCount] = useState(0);

  // /* named function*/
  // function incrementFunc() {
  //   setCount(count + 1);
  // }

  // /*anonymous function*/
  const incrementFunc = () => {
    setCount(count + 1);
  };

  // /*useState - Changing state with a callback Function and previous State value */
  const decrementFunc = () => {
    {
      count > 0 && setCount((prevState) => prevState - 1);
    }
  };

  /*Challenge: Ternary Practice & flipping State back and forth*/
  // const [isGoingOut, setisGoingOut] = useState(true);
  // // let answer;
  // // if (isGoingOut === true) {
  // //   answer = "yes";
  // // } else {
  // //   answer = "no";
  // // }
  // // let answer = isGoingOut ? "Yes" : "No";

  // function changeMood() {
  //   setisGoingOut((prevState) => !prevState);
  // }

  // const [isHover, setIsHover] = useState(false);

  // console.log("Practice component rendered");

  return (
    <div style={styleSheet}>
      {/*Event Listeners*/}
      {/* <img
        style={{ width: "500px" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src="../images/cardImage0.png"
        alt=""
      /> */}

      {/*Project: Get random meme*/}
      {/*Our current conundrum */}
      {/* <button onClick={getMemeImage}>Click me</button>
      <p>{randomImageUrl}X</p> */}

      {/*useState just example*/}
      {/* <button onClick={addItem}>Add Item</button>
      {items} */}

      {/*useState & Changing State*/}
      {/* <h1
        onClick={() => {
          setIsImportant("no");
        }}
      >
        {isImportant}
      </h1> */}

      <br />
      <br />

      {/*useState - Counter Practice/}
      {/*useState & Changing State*/}
      <h1 style={{ cursor: "pointer" }} onClick={incrementFunc}>
        +
      </h1>
      {/* <h1>{count}</h1> */}
      <h1
        style={{ cursor: "pointer", pointerEvents: count <= 0 && "none" }}
        onClick={decrementFunc}
      >
        -
      </h1>
      {/* 6:31:59 Passing state as props */}
      {/* <Count number={count} setCount={setCount} /> */}

      <br />
      <br />

      {/* Challenge: Ternary Practice & flipping State back and forth */}
      {/* <p style={{ display: isHover ? "block" : "none", color: "red" }}>
        Click On Me
      </p>
      <h1
        style={{ cursor: "pointer" }}
        onClick={changeMood}
        onMouseEnter={() => setIsHover((prevState) => !prevState)}
        onMouseLeave={() => setIsHover((prevState) => !prevState)}
      >
        {isGoingOut ? "Yes" : "No"}
      </h1> */}

      <br />
      <br />
    </div>
  );
};

export default Practice;
