import React, { useState, useEffect } from "react";
import ImageNavbar from "./ImageNavbar";
import f from "../css/cardparent.module.css";

const url = "https://rickandmortyapi.com/api/episode/?page=1";
const url2 = "https://rickandmortyapi.com/api/episode/?page=2";
const characterUrl = "https://rickandmortyapi.com/api/character/?page=1";
const characterUrl2 = "https://rickandmortyapi.com/api/character/?page=2";

const CardsParent = () => {
  const [data, setData] = useState({
    episodeData: [],
    chars: [],
  });
  const [search, setNewSearch] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const response2 = await fetch(url2);
      const response3 = await fetch(characterUrl);
      const response4 = await fetch(characterUrl2);
      const data1 = await response.json();
      const data2 = await response2.json();
      const data3 = await response3.json();
      const data4 = await response4.json();
      setData({
        episodeData: data1.results.concat(data2.results),
        chars: data3.results.concat(data4.results),
      });
    })();
  }, []);
  console.log(data);

  const { episodeData, chars } = data;

  const onChangeNames = (e) => {
    setNewSearch(e.target.value);
  };

  const filteredEpisodes = !search
    ? episodeData
    : episodeData.filter((ep) =>
        ep.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className={f.main}>
      <input
        type="text"
        value={search}
        placeholder="Search Episode..."
        onChange={onChangeNames}
      />
      <div className={f.listContainer}>
        {filteredEpisodes.map((p) => {
          console.log(p.characters);
          return (
            <ul key={p.id}>
              <li>
                {p.episode} {p.name} {p.air_date}
              </li>
            </ul>
          );
        })}
      </div>
      <ImageNavbar chars={chars} />
    </div>
  );
};
export default CardsParent;
