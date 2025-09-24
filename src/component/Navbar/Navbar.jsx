import React from 'react';
import logo from '../../assets/logo.png';
import dollar from '../../assets/dollar_1.png';

const Navbar = ({ availableBalance }) => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className=" text-xl">
            <img src={logo} />
          </a>
        </div>
        <div className="flex gap-5 items-center">
          <ul className="flex gap-12">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Fixture</a>
            </li>
            <li>
              <a href="">Teams</a>
            </li>
            <li>
              <a href="">Schedules</a>
            </li>
          </ul>
          <div className="flex gap-2.5 btn">
            <span>{availableBalance}</span>
            <span>Coin</span>
            <img src={dollar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
