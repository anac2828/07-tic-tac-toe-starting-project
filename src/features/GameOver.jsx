import useGameboard from '../context/GameboardContext';

function GameOver() {
  const { winner } = useGameboard();
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      <p>{winner} won!</p>
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}

export default GameOver;
