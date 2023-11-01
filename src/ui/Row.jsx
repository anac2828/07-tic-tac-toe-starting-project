import { useGameboard } from '../context/GameboardContext';
import GameboardButton from '../features/GameboardButton';

function Row({ row, rowIndex }) {
  const { updateBoard } = useGameboard();

  function handleClick(rowIndex, colIndex) {
    updateBoard(rowIndex, colIndex);
  }
  return (
    <li>
      <ol>
        {row.map((playerSymbol, index) => (
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
