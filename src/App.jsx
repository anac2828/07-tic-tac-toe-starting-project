import { useGameboard } from './context/GameboardContext';
import Gameboard from './ui/Gameboard';
import Log from './ui/Log';
import Players from './ui/Players';

function App() {
  return (
    <main>
      <div id='game-container'>
        <Players />
        <Gameboard />
      </div>
      <Log />
    </main>
  );
}

export default App;
