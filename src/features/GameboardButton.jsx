import { useGameboard } from '../context/GameboardContext';

function GameboardButton({ rowIndex, colIndex, onClick }) {
  const { gameboard } = useGameboard();

  console.log(gameboard);
  console.log(gameboard[rowIndex][colIndex]);

  return (
    <li>
      <button
        onClick={() => onClick(rowIndex, colIndex)}
        disabled={gameboard[rowIndex][colIndex] !== null}>
        {gameboard[rowIndex][colIndex]}
      </button>
    </li>
  );
}

export default GameboardButton;
