import { useGameboard } from '../context/GameboardContext';
import GameboardButton from './GameboardButton';

function Row({ row, rowIndex }) {
  const { updateBoard, checkWinner } = useGameboard();

  function handleClick(rowIndex, colIndex) {
    updateBoard(rowIndex, colIndex);
    checkWinner(rowIndex, colIndex);
  }
  return (
    <li>
      <ol>
        {row.map((_, index) => (
          <GameboardButton
            key={1 + index}
            rowIndex={rowIndex}
            colIndex={index}
            onClick={handleClick}
          />
        ))}
      </ol>
    </li>
  );
}

export default Row;
