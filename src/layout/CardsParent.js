import React from "react";
import CardsChild from "./CardsChild";
import f from "../css/cardparent.module.css";

class CardsParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      charData: [],
    };
  }
  async componentDidMount() {
    console.log("ComponentDidMount");
    console.log("=================");
    const url = "https://rickandmortyapi.com/api/episode/?page=1";
    const url2 = "https://rickandmortyapi.com/api/episode/?page=2";
    const characterUrl = "https://rickandmortyapi.com/api/character/";
    const response = await fetch(url);
    const response2 = await fetch(url2);
    const response3 = await fetch(characterUrl);
    const data = await response.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    this.setState({
      data: data.results.concat(data2.results),
      charData: data3.results,
    });
    console.log(data);
    console.log(data3);
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
    let tempData = data.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ data: tempData });
  }

  //reset input field
  reset(e) {
    this.refs.form.reset();
  }

  render() {
    const { data, charData } = this.state;
    return (
      <div>
        <form className={f.formStyle} onSubmit={this.reset}>
          <input
            className={f.inputStyle}
            type="text"
            placeholder="Search Episode"
            ref="eps"
            onChange={this.filterNames.bind(this)}
          />
          <br />
          <button className={f.buttonStyle}>Oh Geez Rick</button>
        </form>
        <CardsChild data={data} characters={charData} />
      </div>
    );
  }

  componentWillUnmount() {
    console.log("Component WillUnMount");
    console.log("=====================");
  }
}
export default CardsParent;
