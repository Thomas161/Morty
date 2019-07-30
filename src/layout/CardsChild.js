import React from 'react';
import Image from './Image';
//import images from "../pictures/RickandMortyPilot.jpg";


const cardStyle = {
  display: "grid",
  border: "1px dashed rgba(114, 186, 94, 0.35)",
  height: "230px",
  width: "12rem",
  gridTemplateColumns: "repeat(4, auto)",
    gridTemplateRows: "auto",
  background: "aqua",
  paddingLeft: "5px",
  justifyItems: "center",
  margin: 0
};    


export default function CardsChild({ data }) {

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              {data.map(m => (
                <div className="card" style={cardStyle}>
                  <div className="card-body">
                    <h5 className="card-title"> {m.episode}</h5>
                    <p className="card-text"> {m.name}</p>

                    <Image />
                  </div>
                </div>
              ))}
            </div>
            <div className="col-sm-4">
              {data.map(m => (
                <div className="card" style={cardStyle}>
                  <div className="card-body">
                    <h5 className="card-title"> {m.episode}</h5>
                    <p className="card-text"> {m.name}</p>

                    <Image />
                  </div>
                </div>
              ))}
             </div>
            </div>
        </div>    
      </>
    );
}
       
             
           
               
