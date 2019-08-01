import React, { useEffect, useState } from "react";
import CardsChild from "./CardsChild";
//import _ from 'lodash';

const inputStyle = {
    textAlign: 'center',
    fontFamily: 'verdana',   
}

export default function CardsParent() {
    const [data, setData] = useState([]);
    // const [fill, setFill] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/episode");
            const data = await response.json();
            console.log("Component Mounts");
            console.log("Data", data);
            setData(data.results)
        }
        fetchData();
           
    }, [])

   // const filterList = () => data.filter(d => d === d.name);
      const filterNames=(e)=>{
 setData({fill: data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))})
}

        
  return (
    <div>
      <form style={inputStyle}>
              <input type="text" placeholder="Search Episode" onChange={filterNames} />     
      </form>
      <CardsChild data={data} />
    </div>
  );
}
