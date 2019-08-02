import React from "react";
import CardsChild from "./CardsChild";
import { Button } from "react-floating-action-button";

const inputStyle = {
    textAlign: 'center',
    fontFamily: 'verdana',  
    marginTop:'10px'
}


class CardsParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
    async componentDidMount() {
        console.log("ComponentDidMount");
        console.log("=================");
    const url = "https://rickandmortyapi.com/api/episode";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data.results });
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
        <form style={inputStyle} onSubmit={this.reset}>
          <input
            type="text"
            placeholder="Search Episode"
            ref="eps"
            onChange={this.filterNames.bind(this)}
          />
          <br />
                <Button
          size="small"          
            tooltip="oh geez rick"
                    icon="fas fa-skull"
                    
          />
            
          
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
  


  