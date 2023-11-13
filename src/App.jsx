import { useGameboard } from './context/GameboardContext';
import Gameboard from './ui/Gameboard';
import Log from './ui/Log';
import Players from './ui/Players';

function App() {
  const { winner } = useGameboard();

  return (
    <main>
      <div id='game-container'>
        <Players />
        {winner && <p>You won, {winner}!</p>}
        <Gameboard />
      </div>
      <Log />
    </main>
  );
}

export default App;
