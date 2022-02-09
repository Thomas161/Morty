![React](https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png)
![Heroku](https://img.stackshare.io/service/133/3wgIDj3j.png)

[![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)

![Sauce](sauce.jpg)

## Rick and Morty SPA Web App

I love this show, so i thought id make a simple Reactjs app

[Rick and Morty API](https://rickandmortyapi.com/)

### Installation

`npx create-react-app`

`npm install`

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.

#### `npm build`

Build out for production

### Check Me Out

[Rick And Morty](https://rickandmorty2019.herokuapp.com/)

#### Legacy code

<!--
class CardsParent extends React.Component {
    constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
        data: [],
        charData: [],
    };
}
-->
<!--
async function componentDidMount() {
    console.log("**ComponentDidMount**");
    const url = "https://rickandmortyapi.com/api/episode/?page=1";
    const url2 = "https://rickandmortyapi.com/api/episode/?page=2";
    const characterUrl = "https://rickandmortyapi.com/api/character/?page=1";
    const characterUrl2 = "https://rickandmortyapi.com/api/character/?page=2";
    const response = await fetch(url);
    const response2 = await fetch(url2);
    const response3 = await fetch(characterUrl);
    const response4 = await fetch(characterUrl2);
    const data = await response.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    const data4 = await response4.json();

    this.setState({
        data: data.results.concat(data2.results),
        charData: data3.results.concat(data4.results),
    });
    console.log(data);
    console.log(data3);
}
-->

<!--
componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
    console.log("**ComponentDidUpdate**");
    }
}
-->

<!--
filterNames(e) {
    e.preventDefault();
    const { data } = this.state;
    let tempData = data.filter((item) => {
        return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log(tempData);
    this.setState({ data: tempData });
}
-->

<!-- reset input field -->

<!--
    reset(e) {
        this.refs.form.reset();
        e.preventDefault();
        const { data } = this.state;
        this.setState({ data: [] });
    }
-->

<!--
render() {
    const { data, charData } = this.state;
    return (
        <div className={f.formContainer}>
            <form className={f.formStyle} onSubmit={this.reset.bind(this)}>
                <input
                className={f.inputStyle}
                type="text"
                placeholder="Search Episode"
                ref="eps"
                onChange={this.filterNames.bind(this)}
                />
            {" "}
            <button className={f.buttonStyle}>Oh Geez Rick</button>
            </form>
        </div>
    );
}
-->
<!--
    componentWillUnmount() {
    console.log("**Component WillUnMount**");
} -->
<!--
{episodeData.filter((item) => {
   if(episodeData == "") {
        return item;
    } else if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return val;
        }})}
-->
<!--
/* <CardsChild episodeData={episodeData} chars={chars} />; */
-->
<!--
let tempData = episodeData.filter((item) => {
  return item.name.toLowerCase().includes(e.target.value.toLowerCase());
  setData({ episodeData: tempData });
-->
