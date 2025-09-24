import React, { useState } from 'react';
import flag from '../../assets/group.png';
import user from '../../assets/user.png';

const Player = ({ player, balanceHandle, isSelected }) => {
  // const [isSelected, setIsSelected] = useState(false);
  // const setSelect = () => {
  //   setIsSelected(true);
  // };
  const {
    player_image,
    player_name,
    player_country,
    playing_role,
    rating,
    bating_style,
    price,
  } = player;
  return (
    <div className="">
      <div className="card bg-base-100  shadow-sm p-4">
        <figure>
          <img
            src={player_image}
            alt="Shoes"
            className="w-full h-[300px] object-cover"
          />
        </figure>
        <div className="mt-4">
          <div className="flex">
            <img src={user} alt="" />
            <h2 className="card-title ml-2">{player_name}</h2>
          </div>
          <div className="flex justify-between mt-4 border-b-1 border-gray-400 pb-2">
            <div className="flex items-center ">
              <img className="w-[20px] h-[20px]" src={flag} alt="" />
              <span className="ml-2">{player_country}</span>
            </div>
            <button className="btn">{playing_role}</button>
          </div>
          <div className="flex justify-between font-bold">
            <span>Rating</span>
            <span>{rating}</span>
          </div>
          <div className="flex justify-between mt-4">
            <span className="font-bold">{bating_style}</span>
            <span>{bating_style}</span>
          </div>
          <div className="card-actions mt-4 flex justify-between items-center">
            <p className="font-bold">Price: ${price}</p>
            <button
              disabled={isSelected}
              onClick={() => {
                balanceHandle(player);
                setSelect();
              }}
              className="btn"
            >
              {isSelected === true ? 'Selected' : 'Choose player'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
