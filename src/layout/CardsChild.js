import React from "react";
import ImageNavbar from "./ImageNavbar";
import PropTypes from "prop-types";
import c from "../css/cardchild.module.css";

export default function CardsChild({ data, characters }) {
  console.log("Data =>", data);
  console.log("Data =>", characters);
  return (
    <>
      {/* <div className={c.container}> */}
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              {data.map((m) => (
                <div key={m.id}>
                  <h6 className="card-title"> {m.episode}</h6>
                  <p className="card-text">{m.name}</p>
                  <ImageNavbar characters={characters} />

                  {/* <StarRating totalStars={5} /> */}
                  <small className={c.dateAired}> Aired: {m.air_date}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
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
