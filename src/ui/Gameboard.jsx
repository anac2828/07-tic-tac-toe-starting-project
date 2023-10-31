import { useGameboard } from '../context/GameboardContext';
import Row from './Row';

function Gameboard() {
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
