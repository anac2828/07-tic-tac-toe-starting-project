function GameboardButton({ rowIndex, colIndex }) {
  return (
    <li>
      <button onClick={() => console.log(rowIndex, colIndex)}></button>
    </li>
  );
}

export default GameboardButton;
