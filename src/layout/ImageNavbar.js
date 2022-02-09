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
      <div className={i.middle}>
        <div className={i.text}>
          {chars.map((c) => (
            <p>
              Name:{c.name}
              <br />
              Species:{c.species}
              <br />
              No. Eps:{c.episode.length}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ImageNavbar;
