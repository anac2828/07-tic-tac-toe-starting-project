// import GameboardButton from '../features/GameboardButton';
import Row from './Row';
import { useContext } from 'react';
import { useGameContext } from '../App';

function Gameboard() {
  const context = useContext(useGameContext);
  console.log(context);
  return (
    <ol id='game-board'>
      {initialGameboard.map((row, rowIndex) => (
        <Row key={rowIndex} row={row} rowIndex={rowIndex} />
      ))}
    </ol>
  );
}

export default Gameboard;
