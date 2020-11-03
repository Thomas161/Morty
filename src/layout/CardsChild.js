import React from "react";
import ImageNavbar from "./ImageNavbar";
import PropTypes from "prop-types";
import c from "../css/cardchild.module.css";

export default function CardsChild({ data, characters }) {
  console.log("Data =>", data);
  console.log("Data =>", characters);
  return (
    <>
      <div className={c.outer}>
        <table className={c.containerTable}>
          <tbody className={c.tableBod}>
            <tr>
              <th className={c.styleHeader}>Episode no.</th>
              <th className={c.styleHeader}>Title</th>
              <th className={c.styleHeader}>Aired</th>
            </tr>
            {data.map((m) => (
              <tr key={m.id}>
                <td className={c.apiStyles}>{m.episode}</td>
                <td className={c.apiStyles}>{m.name}</td>
                <td className={c.apiStyles}>{m.air_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
