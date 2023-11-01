import { useGameboard } from '../context/GameboardContext';
import Player from '../features/Player';

function Players() {
  return (
    <ol id='players'>
      <Player index={0} key={0} />
      <Player index={1} key={1} />
    </ol>
  );
}

export default Players;
