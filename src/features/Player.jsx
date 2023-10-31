import { useState } from 'react';
import { useGameboard } from '../context/GameboardContext';

function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const { isEditing } = useGameboard();

  // function handleChange(e) {
  //   setPlayerName(e.target.value);
  // }

  // function handleClick() {
  //   setIsEditing((editing) => !editing);
  // }

  return (
    <li>
      <span className='player'>
        {isEditing && <input type='text' value={playerName} onChange={handleChange} />}
        {!isEditing && <span className='player-name'>{playerName}</span>}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;
