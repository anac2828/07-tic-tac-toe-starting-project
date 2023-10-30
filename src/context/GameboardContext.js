import { createContext, useContext, useState } from 'react';

const arrayLength = 3;

const initialGameboard = Array.from({ length: arrayLength }, (v, i) =>
  Array.from({ length: arrayLength }, (v, i) => null)
);

const GameboardContext = createContext();

function GameboardProvider({ children }) {
  const [gameboard, setGameboard] = useState(initialGameboard);

  const row = gameboard;

  return (
    <GameboardContext.Provider value={{ row }}>{children}</GameboardContext.Provider>
  );
}

function useGameboard() {
  const context = useContext(GameboardContext);
  if (context) {
    throw new Error('Gameboard context was used outside the GameboardProvider');
  }
  return context;
}

export { GameboardProvider, useGameboard };
