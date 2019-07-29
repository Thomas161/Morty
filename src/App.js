import React from 'react';
import CardsParent from './layout/CardsParent';
const style = {
  textAlign : 'center'
}

function App() {
  return (
    <React.Fragment>
      <div className="animated heartBeat delay-2s">
        <h1 style={style}>Rick and Morty</h1>
      </div>
      <CardsParent/>
    </React.Fragment>
  );
}

export default App;
