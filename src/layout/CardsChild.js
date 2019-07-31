import React from 'react';
   
const images = [
  "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/100.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/110.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/127.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/206.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/134.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/303.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/259.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/172.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/36.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/80.jpeg",
  "https://rickandmortyapi.com/api/character/avatar/93.jpeg"
];

const randomImages = images[Math.floor(Math.random) * images.length];


export default function CardsChild({ data,im }) {

    return (
      <>
        <div className="container">
          <div className="row">
            {data.map(m => (
              <div className="col-sm-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title"> {m.episode}</h5>
                    <p className="card-text"> {m.name}</p>
                    <p>{m.air_date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}
       
             
           
               
