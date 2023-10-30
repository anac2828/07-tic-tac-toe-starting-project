import GameboardButton from '../features/GameboardButton';

function Row({ row, rowIndex }) {
  return (
    <li>
      <ol>
        {row.map((playerSymbol, colIndex) => (
          <GameboardButton key={colIndex} rowIndex={rowIndex} colIndex={colIndex} />
        ))}
      </ol>
    </li>
  );
}

export default Row;
