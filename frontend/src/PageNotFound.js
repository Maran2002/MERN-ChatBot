import React from "react";
import image_404 from "./assests/404.gif";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <p className="font-bold text-center text-3xl text-white">
        Page Not Found
      </p>
      <img src={image_404} alt="" srcSet="" />
    </div>
  );
}

export default PageNotFound;
