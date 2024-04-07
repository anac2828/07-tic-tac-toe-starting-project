import { createContext, useContext, useReducer } from 'react';

const GameboardContext = createContext();

const arrayLength = 3;

const initialState = {
  gameboard: Array.from({ length: arrayLength }, (v, i) =>
    Array.from({ length: arrayLength }, (v, i) => null)
  ),
  status: 'ready',
  players: [
    { name: 'Player 1', playerSymbol: 'X', isEditing: false },
    { name: 'Player 2', playerSymbol: 'O', isEditing: false },
  ],
  activePlayer: 'O',
  rowIndex: '',
  colIndex: '',
  logs: [],
  winner: '',
};

// action comes from the dispatch function
function reducer(state, action) {
  switch (action.type) {
    case 'editName': {
      // player index, name, isEditing = true
      const { index, name, isEditing } = action.payload;
      return {
        ...state,
        players: state.players.toSpliced(index, 1, {
          ...state.players[index],
          name,
          isEditing,
        }),
      };
    }
    case 'updateSquare': {
      const { rowIndex, colIndex, activePlayer } = action.payload;

      // row with updated square
      const squareToUpdate = state.gameboard[rowIndex].toSpliced(
        colIndex,
        1,
        activePlayer
      );
      //gameboard with updated row
      const rowToUpdate = state.gameboard.toSpliced(rowIndex, 1, squareToUpdate);

      return {
        ...state,
        gameboard: rowToUpdate,
        activePlayer,
        logs: state.logs.toSpliced(0, 0, { activePlayer, rowIndex, colIndex }),
      };
    }
    case 'checkWinner': {
      const { rowIndex, colIndex } = action.payload;

      const checkForWinner = (value) => value === state.activePlayer;

      // check for winner in a row
      const isRowWinner = state.gameboard[rowIndex].every(checkForWinner);

      // check for winner in a column
      const isColWinner = state.gameboard
        .map((row) => row[colIndex])
        .every(checkForWinner);

      // check for winner diagonal
      const crossTopRightBottom = state.gameboard
        .map((row, index) => row[index])
        .every(checkForWinner);

      const crossTopLeftBottom = state.gameboard
        .map((row, index) => row.toReversed()[index])
        .every(checkForWinner);

      const isDiagonalWinner = crossTopRightBottom || crossTopLeftBottom;

      if (isRowWinner || isColWinner || isDiagonalWinner) {
        return {
          ...state,
          winner: state.players.find(
            (player) => player.playerSymbol === state.activePlayer
          ).name,
          status: 'Gameover',
        };
      } else if (state.logs.length === 9) {
        return {
          ...state,
          winner: 'Tie Game',
          status: 'Gameover',
        };
      } else {
        return { ...state };
      }
    }
    case 'rematch': {
      return {
        ...state,
        gameboard: Array.from({ length: arrayLength }, (v, i) =>
          Array.from({ length: arrayLength }, (v, i) => null)
        ),
        logs: [],
        activePlayer: 'O',
        status: 'ready',
      };
    }
  }
}

function GameboardProvider({ children }) {
  // useReducer takes the reducer function and the initial state. Returns the state and dispatch function to dispatch the action and payload to the reducer funcion
  const [{ status, players, activePlayer, gameboard, logs, winner }, dispatch] =
    useReducer(reducer, initialState);

  function editPlayerName(index, name) {
    dispatch({
      type: 'editName',
      payload: {
        index,
        name,
        isEditing: !players[index].isEditing,
      },
    });
  }

  function updateBoard(rowIndex, colIndex) {
    dispatch({
      type: 'updateSquare',
      payload: { rowIndex, colIndex, activePlayer: activePlayer === 'X' ? 'O' : 'X' },
    });
  }

  function checkWinner(rowIndex, colIndex) {
    dispatch({ type: 'checkWinner', payload: { rowIndex, colIndex } });
  }

  function rematch() {
    dispatch({ type: 'rematch' });
  }

  return (
    <GameboardContext.Provider
      value={{
        status,
        players,
        gameboard,
        logs,
        winner,
        editPlayerName,
        updateBoard,
        checkWinner,
        activePlayer,
        rematch,
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
