import { toast } from 'react-toastify';

const handleBalance = (
  player,
  availableBalance,
  setAvailableBalance,
  selectedPlayers,
  setSelectedPlayers
) => {
  const price = player.price;
  const playerPrice = parseInt(price.split('USD').join('').split(',').join(''));
  if (selectedPlayers.length < 6) {
    if (availableBalance > playerPrice) {
      const newBalance = availableBalance - playerPrice;
      setAvailableBalance(newBalance);
    } else {
      toast('Not Enough coin');
      return;
    }
  } else {
    toast('Already Selected 6 Players');
    return;
  }
  const newPlayers = [...selectedPlayers, player];
  setSelectedPlayers(newPlayers);
};

const updatePlayer = (
  p,
  selectedPlayers,
  setSelectedPlayers,
  availableBalance,
  setAvailableBalance
) => {
  console.log(p);
  const filteredData = selectedPlayers.filter(
    player => player.player_name !== p.player_name
  );
  setSelectedPlayers(filteredData);
  const playerPrice = parseInt(
    p.price.split('USD').join('').split(',').join('')
  );
  const updateBalance = availableBalance + playerPrice;
  setAvailableBalance(updateBalance);
};

export { handleBalance, updatePlayer };
