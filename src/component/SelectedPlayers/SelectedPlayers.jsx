import React from 'react';
import SelectedPlayerCard from '../SelectedPlayerCard/SelectedPlayerCard';

const players = ({ selectedPlayers, removePlayer }) => {
  return (
    <div className="mb-11">
      {selectedPlayers.map(player => (
        <SelectedPlayerCard
          key={player.player_name}
          player={player}
          removePlayer={removePlayer}
        ></SelectedPlayerCard>
      ))}
    </div>
  );
};

export default players;
