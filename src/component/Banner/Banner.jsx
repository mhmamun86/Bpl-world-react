import React from 'react';
import bannerBg from '../../assets/bg-shadow.png';
import bannerMain from '../../assets/banner-main.png';

const Banner = ({ toggle, setToggle, selectedPlayers }) => {
  const handleToggle = state => {
    if (state === 1) {
      setToggle(true);
    } else {
      setToggle(false);
    }
    console.log(toggle);
  };
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-black p-16 flex flex-col items-center justify-center rounded-3xl mt-4 space-y-3 mb-8"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <img src={bannerMain} alt="" />
        <h1 className="text-[2.5rem] font-bold text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <h3 className="font-medium text-[#ffffffb3]">
          Beyond Boundaries Beyond Limits
        </h3>
        <div className="border-2 border-[#E7FE29] rounded-2xl p-1.5">
          <button className="bg-[#E7FE29] rounded-xl py-4 px-5 shadow-inner shadow-gray-500/80">
            Claim Free Credit
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            {toggle === true
              ? 'Available Players'
              : `Selected Player (${selectedPlayers.length}/6)`}
          </h1>
        </div>
        <div className="flex">
          <button
            onClick={() => handleToggle(1)}
            className={`rounded-l-xl py-3.5 px-8 ${
              toggle === true ? 'bg-[#E7FE29]' : ''
            }`}
          >
            Available
          </button>
          <button
            onClick={() => handleToggle(2)}
            className={`rounded-r-xl py-3.5 px-8 ${
              toggle === false ? 'bg-[#E7FE29]' : ''
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
