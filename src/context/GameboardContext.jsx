import { createContext, useContext, useReducer, useState } from 'react';

const GameboardContext = createContext();

const arrayLength = 3;

const initialState = {
  gameboard: Array.from({ length: arrayLength }, (v, i) =>
    Array.from({ length: arrayLength }, (v, i) => null)
  ),
  status: 'loading',
  player: ['Player 1', 'Player 2'],
  playerOneSymbol: 'X',
  playerTwoSymbol: 'O',
  isEditing: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'editName': {
      return { ...state, player[action.payload.player]: action.payload.name };
    }
  }
}

function GameboardProvider({ children }) {
  const [
    {
      status,
      playerOne,
      playerTwo,
      playerOneSymbol,
      playerTwoSymbol,
      isEditing,
      gameboard,
    }, dispatch,
  ] = useReducer(reducer, initialState);

  function editPlayerName(player, name) {
    dispatch({type: 'editName', payload: {player, name}})
  }

  function handleClick() {
    // setIsEditing((editing) => !editing);
  }

  return (
    <GameboardContext.Provider
      value={{
        status,
        playerOne,
        playerTwo,
        playerOneSymbol,
        playerTwoSymbol,
        isEditing,
        gameboard,
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
