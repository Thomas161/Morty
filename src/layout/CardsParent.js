import React, { useEffect, useState } from "react";
import CardsChild from "./CardsChild";

export default function CardsParent() {
    const [data, setData] = useState([]);
    const [im, setIm] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/episode");
            const data = await response.json();
            console.log("Response ", response);
            console.log("Data", data);
            setData(data.results)
        }
        fetchData();
           
    }, [])

    useEffect(() => {
         const fetchIm = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character/");
            const im = await response.json();
            console.log("Response ", response);
            console.log("Data", im);
            setIm(im.results)
        }
        fetchIm();
           
    
    },[])
    
    
  return (
      <div>
          <CardsChild data={data} im={im} />  
   
    </div>
  );
}
