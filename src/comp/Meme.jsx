// 9:24:46 Project:get memes from API
// 9:33:00 State and Effect Practices
// 9:40:05 useEffect cleanup function
// 9:46:00 Using an sync function inside useEffect
// 9:49:14 Section3 recap

import React, { useEffect, useState } from "react";

import { memesData } from "./memesData";

// import memeimg1 from "../images/memeimg1.png"; // use this if move image folder to src folder

const Meme = () => {
  // const [memeImg, setMemeImg] = useState("./images/memeimg1.png");
  // const [topText, setTopText] = useState("");
  // const [bottomText, setBottomText] = useState("");

  const [meme, setMeme] = useState({
    topText: "Hello",
    bottomText: ":)",
    randomImage: "./images/memeimg1.png",
  });

  // const [allMeme, setAllMeme] = useState([memesData]);
  const [allMeme, setAllMeme] = useState([]);

  //get  data from API set it to state
  // useEffect(() => {
  //   console.log("side effect ran");

  //   fetch("https://api.imgflip.com/get_memes")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.data.memes);
  //       setAllMeme(data.data.memes);
  //     });
  // }, []);

  //   //use effect with async await
  //  // dont use this
  // // because async return "promise" but useEffect expecting return "clean up function"
  // useEffect(async() => {
  //     const res = await fetch("https://api.imgflip.com/get_memes");
  //     const data = await res.json();
  //     setAllMeme(data.data.memes);
  // }, []);
  // // use this
  // //  define a separate async function inside of use effect

  useEffect(() => {
    console.log("side effect ran");
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMeme(data.data.memes);
    }
    getMemes();
    // in this case with don't need a cleanup function
    // useEffect cleanup function
    // return () => {
    //   // Cleanup function to clear data
    //   console.log("Cleanup ...");
    //   setAllMeme([]);
    // };
  }, []);

  //get image url from external data file directly
  // let allMeme = data;
  const getMemeImage = () => {
    //get image url from external data file and set it to state by useState
    // const memesArray = allMeme.data.memes;
    //get image url from state After using useEffct API to update state
    // const randomNumber = Math.floor(Math.random() * memesArray.length);
    // const imageUrl = memesArray[randomNumber].url;
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const imageUrl = allMeme[randomNumber].url;
    // console.log(imageUrl);

    // setMemeImg(imageUrl);
    // setTopText("");
    // setBottomText("");

    // setMeme((prevState) => ({ ...prevState, randomImage: imageUrl }));
    setMeme({
      topText: "",
      bottomText: "",
      randomImage: imageUrl,
    });
  };

  //set Text Inputs to state by one function
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className="form">
        <div className="input-box">
          <label className="input-label" htmlFor="topText">
            Top text
          </label>
          <input
            className="form-input"
            placeholder="Top text"
            type="text"
            id="topText"
            // onChange={(event) => {
            //   setTopText(event.target.value);
            // }}
            // onChange={(event) =>
            //   setMeme((prevState) => ({
            //     ...prevState,
            //     topText: event.target.value,
            //   }))
            // }
            onChange={handleChange}
            name="topText"
            // value={topText}
            value={meme.topText}
            onBlur={(event) => {
              event.target.value = "";
            }}
          />
        </div>
        <div className="input-box">
          <label className="input-label" htmlFor="bottomText">
            Bottom text
          </label>
          <input
            className="form-input"
            placeholder="Bottom text"
            type="text"
            id="bottomText"
            // onChange={(event) => {
            //   setBottomText(event.target.value);
            // }}
            // onChange={(event) =>
            //   setMeme((prevState) => ({
            //     ...prevState,
            //     bottomText: event.target.value,
            //   }))
            // }
            onChange={handleChange}
            name="bottomText"
            // value={bottomText}
            value={meme.bottomText}
            onBlur={(event) => {
              event.target.value = "";
            }}
          />
        </div>
        <button className="form-button" type="button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img
          className="meme-img"
          // src="./images/memeimg1.png"
          // src={memeImg}
          src={meme.randomImage}
          alt=""
        />
        <h2 className="top-text">
          {/* Shut up */}
          {/* {topText.toLocaleUpperCase()} */}
          {meme.topText.toLocaleUpperCase()}
        </h2>
        <h2 className="bottom-text">
          {/* And take my money */}
          {/* {bottomText.toLocaleUpperCase()} */}
          {meme.bottomText.toLocaleUpperCase()}
        </h2>
      </div>
    </main>
  );
};

export default Meme;
