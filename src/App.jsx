import { useGameboard } from './context/GameboardContext';
import GameOver from './features/GameOver';
import Gameboard from './ui/Gameboard';
import Log from './ui/Log';
import Players from './ui/Players';

function App() {
  const { winner } = useGameboard();

  return (
    <main>
      <div id='game-container'>
        <Players />
        {winner && <GameOver winner={winner} />}
        <Gameboard />
      </div>
      <Log />
    </main>
  );
}

export default App;
