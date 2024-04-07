import { useGameboard } from '../context/GameboardContext';
import Row from '../features/Row';

function Gameboard() {
  // array to make the rows and columns
  const { gameboard } = useGameboard();

  return (
    <ol id='game-board'>
      {gameboard.map((row, rowIndex) => (
        <Row key={rowIndex} row={row} rowIndex={rowIndex} />
      ))}
    </ol>
  );
}

export default Gameboard;
