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
    case 'updateSquare': {
      const { rowIndex, colIndex, symbol } = action.payload;
      // row with updated square
      const squareToUpdate = state.gameboard[rowIndex].toSpliced(colIndex, 1, symbol);
      //gameboard with updated row
      const rowToUpdate = state.gameboard.toSpliced(rowIndex, 1, squareToUpdate);

      return {
        ...state,
        gameboard: rowToUpdate,
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

  function updateBoard(rowIndex, colIndex) {
    dispatch({
      type: 'updateSquare',
      payload: { rowIndex, colIndex, symbol: 'X' },
    });
  }

  return (
    <GameboardContext.Provider
      value={{
        status,
        players,
        gameboard,
        editPlayerName,
        updateBoard,
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
