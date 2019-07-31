import React from 'react';
import CardsParent from './layout/CardsParent';
import Api from './layout/Api';
import FaveEpisodes from "./layout/FaveEpisodes";

function App() {
  return (
    <React.Fragment>
      <Api />
      <CardsParent />
    </React.Fragment>
  );
}

export default App;
