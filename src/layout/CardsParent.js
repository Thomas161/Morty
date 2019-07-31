import React, { useEffect, useState } from "react";
import CardsChild from "./CardsChild";

const inputStyle = {
    textAlign: 'center',
    fontFamily: 'verdana',
   
    
}

export default function CardsParent() {
    const [data, setData] = useState([]);
    const [fill, setFill] = useState([]);

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

    const filterList = (event) => {
        let updatedList = [];
        let newList = [];

        if (event.target.value !== "") {
            updatedList = fill;
            newList = updatedList.filter(item => {
                const lc = item.toLowerCase();
                const filter = event.target.value.toLowerCase();

                return lc.includes(filter);
            });

        } else {
            newList = fill;
        }
        setFill({
            fill: newList
        })
    }
        // updatedList = updatedList.filter(item => {
        //     return (
        //       item
        //         .toLowerCase()
        //         .search(event.target.value.toLowerCase()) !== -1
        //     );
        // })
        // setFill({
        //     fill:updatedList
        // })



  
    
    
  return (
    <div>
      <form style={inputStyle}>
        <input type="text" placeholder="Search Episode" onChange={filterList}  />
      </form>
      <CardsChild data={data} />
    </div>
  );
}
