import React from 'react';

const SelectedPlayerCard = ({ player, removePlayer }) => {
  return (
    <div className="border-2 mt-5 border-gray-300 p-3 flex justify-between items-center rounded-xl">
      <div className="flex items-center">
        <img
          src={player.player_image}
          className="h-[50px] w-[50px] rounded-xl"
          alt=""
        />
        <div className="ml-2">
          <h1>{player.player_name}</h1>
          <p className="text-xs">{player.playing_role}</p>
        </div>
      </div>
      <button onClick={() => removePlayer(player)}>
        <img src="https://i.ibb.co.com/Y4zgZF8Z/Frame.png" alt="" />
      </button>
    </div>
  );
};

export default SelectedPlayerCard;
