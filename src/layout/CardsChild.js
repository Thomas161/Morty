import React from 'react';
export default function CardsChild({ data }) {

    return (
        <>
        
            {data.map(m => (
        <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title"> {m.episode}</h5>
                    <p className="card-text"> {m.name}</p>
                 
                </div>
                 </div>
                    ))}
       
        </>
       
    )
}
       
             
           
               
