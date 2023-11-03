import { useState } from 'react';
import { useGameboard } from '../context/GameboardContext';

function Player({ index }) {
  const { players, activePlayer, editPlayerName } = useGameboard();
  const [playerName, setPlayerName] = useState(players[index].name);

  const { playerSymbol, isEditing } = players[index];

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  function handleClick() {
    editPlayerName(index, playerName);
  }

  return (
    <li className={activePlayer === 'X' || activePlayer === 'O' ? 'active' : ''}>
      <span className='player'>
        {/* DISPLAY INPUT */}
        {isEditing && <input type='text' value={playerName} onChange={handleChange} />}
        {/* DISPLAY NAME */}
        {!isEditing && <span className='player-name'>{playerName}</span>}
        {/* SYMBOL */}
        <span className='player-symbol'>{playerSymbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;
