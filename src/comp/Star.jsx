import React from "react";

// import favoritesStarIconE from "../images/favoritesStarIconE.png"; // use this if move image folder to src folder
// import favoritesStarIconF from "../images/favoritesStarIconF.png";   // use this if move image folder to src folder

const Star = (props) => {
  let starIcon =
    props.isFilled === true
      ? "../images/favoritesStarIconF.png"
      : "../images/favoritesStarIconE.png";

  return (
    <div>
      <img
        className="card-favIcon"
        // src={
        //   props.isFilled
        //     ? "../images/favoritesStarIconF.png"
        //     : "../images/favoritesStarIconE.png"
        // }
        src={starIcon}
        alt="favorites Star Icon"
        onClick={props.handleClick}
      />
    </div>
  );
};

export default Star;
