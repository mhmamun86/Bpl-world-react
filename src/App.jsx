import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './component/Navbar/Navbar';
import Banner from './component/Banner/Banner';
import Players from './component/Players/Players';
import { Suspense, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { handleBalance, updatePlayer } from './utility/Function';
import SelectedPlayers from './component/SelectedPlayers/SelectedPlayers';
import Footer from './component/Footer/Footer';
import Newsletter from './component/Footer/Newslatter';

const playersPromise = fetch('players.json').then(res => res.json());

function App() {
  const [toggle, setToggle] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [availableBalance, setAvailableBalance] = useState(2000000);

  const removePlayer = p => {
    updatePlayer(
      p,
      selectedPlayers,
      setSelectedPlayers,
      availableBalance,
      setAvailableBalance
    );
  };
  const balanceHandle = player => {
    handleBalance(
      player,
      availableBalance,
      setAvailableBalance,
      selectedPlayers,
      setSelectedPlayers
    );
  };

  return (
    <div className="max-w-[1280px] container mx-auto">
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner
        toggle={toggle}
        setToggle={setToggle}
        selectedPlayers={selectedPlayers}
      ></Banner>
      {toggle ? (
        <Suspense fallback={<h2>Loading Players</h2>}>
          <Players
            playersPromise={playersPromise}
            balanceHandle={balanceHandle}
            selectedPlayers={selectedPlayers}
          ></Players>
        </Suspense>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          removePlayer={removePlayer}
        ></SelectedPlayers>
      )}
      {/* <Newsletter></Newsletter> */}
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
