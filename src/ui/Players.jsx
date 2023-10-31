import { useGameboard } from '../context/GameboardContext';
import Player from '../features/Player';

function Players() {
  const { playerOne, playerTwo, playerOneSymbol, playerTwoSymbol } = useGameboard();
  return (
    <ol id='players'>
      <Player initialName={playerOne} symbol={playerOneSymbol} />
      <Player initialName={playerTwo} symbol={playerTwoSymbol} />
    </ol>
  );
}

export default Players;
