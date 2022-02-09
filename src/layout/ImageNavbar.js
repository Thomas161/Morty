import React from "react";
import i from "../css/imagenavbar.module.css";

const ImageNavbar = ({ chars }) => {
  return (
    <div className={i.navbar}>
      {chars.map((c) => (
        <img
          key={c.id}
          src={c.image}
          className={i.imagestyle}
          alt="no_rickmorty_pic"
        />
      ))}
    </div>
  );
};
export default ImageNavbar;
