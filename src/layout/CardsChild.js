import React from 'react';
import StarRating from "./StarRating";

    
export default function CardsChild({ data }) {

    return (
      <>
        <div className="container">
          <div className="row">
            {data.map(m => (
              <div key={m.id}
                className="col-sm-4"
                style={{ marginBottom: "10px", marginTop: "10px" }}
              >
                <div className="card bg-info text-white">
                  <div className="card-body">
                    <h6 className="card-header bg-primary"> {m.episode}</h6>
                    <p className="card-text"> {m.name}</p>
                    <br />
                    <StarRating
                      totalStars={5}
                    />
                    <small> Aired: {m.air_date}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}
       
             
           
               
