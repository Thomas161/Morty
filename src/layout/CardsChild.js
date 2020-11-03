import React from "react";
import ImageNavbar from "./ImageNavbar";
import PropTypes from "prop-types";
import c from "../css/cardchild.module.css";

export default function CardsChild({ data, characters }) {
  console.log("Data =>", data);
  console.log("Data =>", characters);
  return (
    <>
      <table className={c.containerTable}>
        <tbody>
          <tr>
            <th>Episode no.</th>
            <th>Title</th>
            <th>Aired</th>
          </tr>
          {data.map((m) => (
            <tr key={m.id}>
              <td>{m.episode}</td>
              <td>{m.name}</td>
              <td>{m.air_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
