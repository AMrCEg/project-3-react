// import React from 'react'
import React, { useState } from "react";
import Star from "./Star";

// import cardImage0 from '../images/cardImage0.png'                 // use this if move image folder to src folder
// import favoritesStarIconE from '../images/favoritesStarIconE.png' // use this if move image folder to src folder
// import favoritesStarIconF from '../images/favoritesStarIconF.png' // use this if move image folder to src folder

// import Star from './Star'

const CardChallenge = () => {
  const amr = {
    firstName: "AMr",
    lastname: "Abdel Fattah",
    phone: "111-000-000-111",
    email: "amr@gmail.com",
    isFavorite: true, // instead of usestate for isFavorite put it in object
  };

  const emad = {
    firstName: "Emad",
    lastname: "Abdel Fattah",
    phone: "111-111-000-000",
    email: "emad@gmail.com",
    isFavorite: false,
  };

  const [contact, setContact] = useState(amr);

  const toggleFavIcon = () => {
    setContact((prevState) => ({
      ...prevState,
      isFavorite: !prevState.isFavorite,
    }));
  };

  //  let starIcon;
  //  if(contact.isFavorite===true){
  //   starIcon=favoritesStarIconF
  //  }else{
  //   starIcon=favoritesStarIconE
  //  }
  // let starIcon = contact.isFavorite===true ? favoritesStarIconF:favoritesStarIconE

  return (
    <article
      className="card"
      style={{ backgroundColor: contact.isFavorite ? "#2196F3" : "#009688" }}
    >
      <img
        className="card-image"
        src="../images/cardImage0.png"
        alt="card"
        onClick={() => {
          // console.log("clicked");
          setContact((prevState) => {
            if (prevState === amr) {
              return emad;
            } else {
              return amr;
            }
          });
        }}
      />

      {/* <img
        onClick={toggleFavIcon}
        className="card-favIcon"
        src={
          contact.isFavorite
            ? "../images/favoritesStarIconF.png"
            : "../images/favoritesStarIconE.png"
        }
        alt=""
      /> */}

      {/*  6:31:59 Passing state as props */}
      <Star isFilled={contact.isFavorite} handleClick={toggleFavIcon} />
      {/* <Star isFilled={starIcon} toggle={toggleFavIcon}/> */}

      <div className="card-info ">
        <h1
          className="card-name"
          style={{ color: contact.isFavorite ? "#2196F3" : "#009688" }}
        >
          {contact.firstName} {contact.lastname}
        </h1>
        <p className="card-phone">{contact.phone}</p>
        <p className="card-email">{contact.email}</p>
      </div>
    </article>
  );
};

export default CardChallenge;
