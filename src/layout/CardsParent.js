import React from "react";
import CardsChild from "./CardsChild";
import _ from 'lodash';

const inputStyle = {
    textAlign: 'center',
    fontFamily: 'verdana',   
}

class CardsParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    const url = "https://rickandmortyapi.com/api/episode";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data.results });
    console.log(data);
  }
  
    filterNames(e) {
        e.preventDefault();
        const { data } = this.state;
          console.log(data);

          console.log(e.target.value);
        //   console.log(data);
        let tempData = data.filter(item => item.name.toLowerCase()
            .includes(e.target.value.toLowerCase()));
         this.setState({data:tempData})
    }
    reset(e) {
        this.refs.form.reset();
    }

  render() {
    const { data } = this.state;
    return (
      <div>
        <form style={inputStyle} onSubmit={this.reset} >
          <input
            type="text"
                    placeholder="Search Episode"
            ref="eps"        
            onChange={this.filterNames.bind(this)}
          />
          <button  type="submit">Revert</button>
        </form>
        <CardsChild data={data} />
      </div>
    );
  }
}
export default CardsParent;
  

//   componentWillMount() {
//     console.log("Component Mounts");
//     fetch("https://rickandmortyapi.com/api/episode")
//       .then(res => res.json())
//       .then(result => {
//         this.setState({
//           data: result
//         });
//         // console.log(data);
//       }, error);
//   }
  //const [tempData, tempSetData] = useState([]);
  // const [fill, setFill] = useState([]);

  //     useEffect(() => {
  //         const fetchData = async () => {
  //             const response = await fetch();
  //             const apiResponse = await response.json();

  //             console.log("Data", apiResponse);
  //             setData(apiResponse.results)
  //             console.log(data);
  //         }
  //         fetchData();

  //     }, [])

  