import { createContext, useContext, useReducer, useState } from 'react';

const GameboardContext = createContext();

const arrayLength = 3;

const initialState = {
  gameboard: Array.from({ length: arrayLength }, (v, i) =>
    Array.from({ length: arrayLength }, (v, i) => null)
  ),
  status: 'loading',
  players: [
    { name: 'Player 1', playerSymbol: 'X', isEditing: false },
    { name: 'Player 2', playerSymbol: 'O', isEditing: false },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'editName': {
      return {
        ...state,
        players: state.players.toSpliced(action.payload.index, 1, {
          ...state.players[action.payload.index],
          name: action.payload.name,
          isEditing: action.payload.isEditing,
        }),
      };
    }
  }
}

function GameboardProvider({ children }) {
  const [{ status, players, gameboard }, dispatch] = useReducer(reducer, initialState);

  function editPlayerName(index, name) {
    dispatch({
      type: 'editName',
      payload: { index, name, isEditing: !players[index].isEditing },
    });
  }
  console.log(players);
  return (
    <GameboardContext.Provider
      value={{
        status,
        players,
        gameboard,
        editPlayerName,
      }}>
      {children}
    </GameboardContext.Provider>
  );
}

function useGameboard() {
  const context = useContext(GameboardContext);

  if (context === undefined) {
    throw new Error('Gameboard context was used outside the GameboardProvider');
  }
  return context;
}

export { GameboardProvider, useGameboard };
