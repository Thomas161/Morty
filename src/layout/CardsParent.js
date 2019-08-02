import React from "react";
import CardsChild from "./CardsChild";

const inputStyle = {
      boxSizing: 'border-box',
  border: 'none',
  backgroundColor: '#3CBC8D',
  color: 'white'
}
const buttonStyle = {
    marginTop: '10px'
}
const formStyle = {
  textAlign: "center",
  fontFamily: "verdana",
  marginTop: "10px"
};


class CardsParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
    async componentDidMount() {
                                console.log(
                                  "ComponentDidMount"
                                );
                                console.log(
                                  "================="
                                );
                                const url =
                                "https://rickandmortyapi.com/api/episode/?page=1";
                                const url2 =
                                "https://rickandmortyapi.com/api/episode/?page=2";
                                const response = await fetch(url);
                                const response2 = await fetch(url2);
                                const data = await response.json();
                                const data2 = await response2.json();
                                this.setState({
                                  data:
                                    data.results.concat(data2.results)
                                });
                                console.log(data);
                              }
  
    componentDidUpdate(prevProps, prevState) {
       
        if (prevState.data !== this.state.data) {
          
            console.log("ComponentDidUpdate");
             console.log("=================");
        
      }
  }  
  
    filterNames(e) {
        e.preventDefault();
        const { data } = this.state;  
        let tempData = data.filter(item => item.name.toLowerCase()
            .includes(e.target.value.toLowerCase()));
         this.setState({data:tempData})
    }

    //reset input field
    reset(e) {
        this.refs.form.reset();
    }

  render() {
    const { data } = this.state;
    return (
      <div>
            <form style={formStyle} onSubmit={this.reset}>
                <input
                    style={inputStyle}
            type="text"
            placeholder="Search Episode"
            ref="eps"
            onChange={this.filterNames.bind(this)}
          />
          <br />
                <button className="btn btn-warning" style={buttonStyle}>Oh Geez Rick</button>
            
          
        </form>
        <CardsChild data={data} />
      </div>
    );
  }
  
    componentWillUnmount() {
        console.log('Component WillUnMount');
        console.log("=====================");
  }  
}
export default CardsParent;
  


  