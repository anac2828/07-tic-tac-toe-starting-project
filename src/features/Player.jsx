import { useState } from 'react';
import { useGameboard } from '../context/GameboardContext';

function Player({ index }) {
  // gameboard context
  const { players, activePlayer, editPlayerName } = useGameboard();
  //updates state on gameboard
  const [playerName, setPlayerName] = useState(players[index].name);
  // from initial state
  const { playerSymbol, isEditing } = players[index];

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  function handleClick() {
    editPlayerName(index, playerName);
  }

  return (
    <li className={activePlayer !== playerSymbol ? 'active' : ''}>
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
