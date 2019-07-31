import React from 'react';
import image from '../pic/mcnugs.jpg';
import { Link,BrowserRouter } from 'react-router-dom';

const rick = {
    width: "190px",
    marginTop: '95px',
    paddingLeft: '20px',
    borderRadius: '20%'
};

const Api = () => {
    return (
      <BrowserRouter>
        <Link to="https://rickandmortyapi.com/">
          <img src={image} alt="" style={rick} />
        </Link>
      </BrowserRouter>
    );
}
export default Api;
