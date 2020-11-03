import React from "react";
import ImageNavbar from "./ImageNavbar";
import PropTypes from "prop-types";
import c from "../css/cardchild.module.css";

export default function CardsChild({ data, characters }) {
  console.log("Data =>", data);
  console.log("Data =>", characters);
  return (
    <>
      <div className={c.containerGrid}>
        <div className={c.cards}>
          <div className={c.card}>
            {data.map((m) => (
              <div key={m.id} className={c.styleCards}>
                <h6> {m.episode}</h6>
                <p>{m.name}</p>

                {/* <StarRating totalStars={5} /> */}
                <small className={c.dateAired}> Aired: {m.air_date}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ImageNavbar characters={characters} />
    </>
  );
}

CardsChild.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      episode: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      air_date: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
