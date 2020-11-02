import React from "react";
// import StarRating from "./StarRating";
import PropTypes from "prop-types";
import c from "../css/cardchild.module.css";

export default function CardsChild({ data, characters }) {
  console.log("Data =>", data);
  console.log("Data =>", characters);
  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((m) => (
            <div key={m.id} className={c.row}>
              <div className="card bg-info text-white">
                <div className={c.cardBody}>
                  <h6 className="card-header bg-primary"> {m.episode}</h6>
                  <p className="card-text"> {m.name}</p>

                  {/* <br /> */}
                  {characters.map((c) => (
                    <img
                      key={c.id}
                      src={c.image}
                      style={{
                        width: "100px",
                        height: "100px",
                        position: "relative",
                      }}
                      alt=""
                    />
                  ))}
                  {/* <StarRating totalStars={5} /> */}
                  <small className={c.dateAired}> Aired: {m.air_date}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
