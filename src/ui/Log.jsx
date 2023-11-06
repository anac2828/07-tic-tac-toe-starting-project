import { useGameboard } from '../context/GameboardContext';

function Log() {
  const { logs } = useGameboard();

  return (
    <ol id='log'>
      {logs.map((log) => (
        <li key={Math.random()}>
          {log.activePlayer} selected {log.rowIndex},{log.colIndex}
        </li>
      ))}
    </ol>
  );
}

export default Log;
