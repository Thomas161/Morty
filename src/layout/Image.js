import React from "react";

const rick = [
   "https://rickandmortyapi.com/api/character/avatar/14.jpeg",

]    

const style = {
  width: "7rem"
};
export default function Image() {
    
    return (
        <div>
            {rick.map(src => 
                <img src={src} alt="" style={style}/>            
)}
        </div>
    )
}
