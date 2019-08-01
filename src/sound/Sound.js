import React from 'react';

export default function Sound() {
    const sounds =
        new Audio("/sound/RickAndMorty.mp3");
    const play = sounds.play.bind(sounds);

    play();
    
    return (
      <div>

          <button onClick={sounds.play}>
            SHOW ME WHAT YOU GOT
          </button>
      
      </div>
    );
}