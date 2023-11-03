import { useGameboard } from '../context/GameboardContext';
import Player from '../features/Player';

function Players() {
  const { activePlayer } = useGameboard();

  return (
    <ol
      id='players'
      className={activePlayer === 'X' || activePlayer === 'O' ? 'highlight-player' : ''}>
      <Player index={0} key={0} />
      <Player index={1} key={1} />
    </ol>
  );
}

export default Players;
