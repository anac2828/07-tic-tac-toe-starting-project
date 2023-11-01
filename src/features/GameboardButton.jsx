function GameboardButton({ rowIndex, colIndex, onClick }) {
  return (
    <li>
      <button onClick={() => onClick(rowIndex, colIndex)}></button>
    </li>
  );
}

export default GameboardButton;
