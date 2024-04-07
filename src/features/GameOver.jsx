import { useGameboard } from '../context/GameboardContext';

function GameOver() {
  const { rematch, winner } = useGameboard();
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner !== 'Tie Game' && <p>{winner} won!</p>}
      {winner === 'Tie Game' && <p>It&apos;s a draw!</p>}
      <p>
        <button onClick={rematch}>Rematch!</button>
      </p>
    </div>
  );
}

export default GameOver;
