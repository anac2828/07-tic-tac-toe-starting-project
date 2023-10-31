import { useGameboard } from './context/GameboardContext';
import Gameboard from './ui/Gameboard';
import Players from './ui/Players';

function App() {
  return (
    <main>
      <div id='game-container'>
        <Players />
        <Gameboard />
      </div>
    </main>
  );
}

export default App;
