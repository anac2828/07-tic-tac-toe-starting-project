// import { GameboardProvider, useGameboard } from './context/GameboardContext';
import Gameboard from './ui/Gameboard';
import Players from './ui/Players';

import { createContext, useContext, useState } from 'react';

const arrayLength = 3;

const initialGameboard = Array.from({ length: arrayLength }, (v, i) =>
  Array.from({ length: arrayLength }, (v, i) => null)
);

const GameboardContext = createContext();

function App() {
  const [gameboard, setGameboard] = useState(initialGameboard);

  return (
    <main>
      <div id='game-container'>
        <GameboardContext.Provider value={gameboard}>
          <Players />
          <Gameboard />
        </GameboardContext.Provider>
      </div>
    </main>
  );
}

export default App;
