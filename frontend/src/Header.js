import React from "react";
import roboGif from "./assests/robot.gif";

const Header = () => {
  return (
    <header className="m-4 flex text-4xl font-bold justify-center p-2 text-custom text-center	">
      MERN - ChatBot
      <img className="size-14" src={roboGif} alt="" srcSet="" />
    </header>
  );
};

export default Header;
