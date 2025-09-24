import React, { use } from 'react';
import Player from '../Player/Player';

const Players = ({ playersPromise, balanceHandle, selectedPlayers }) => {
  const players = use(playersPromise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      {players.map(player => (
        <Player
          key={player.player_name}
          player={player}
          balanceHandle={balanceHandle}
          isSelected={selectedPlayers.some(
            p => p.player_name === player.player_name
          )}
        ></Player>
      ))}
    </div>
  );
};

export default Players;
