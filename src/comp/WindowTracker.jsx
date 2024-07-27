import React, { useEffect, useState } from "react";

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    function watchWidth() {
      console.log("Setting up...");
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);
    //useEffect clean up function
    return () => {
      console.log("Cleaning up...");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <div>
      {/* <h1>Window Width: {window.innerWidth}</h1> */}
      <h1>Window Width: {windowWidth}</h1>
    </div>
  );
};

export default WindowTracker;
