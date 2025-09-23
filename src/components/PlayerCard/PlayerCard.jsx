import React from 'react';
import userImg from '../../assets/user-1.png';
import flagImg from '../../assets/report-1.png';
import { toast } from 'react-toastify';

const PlayerCard = ({ player, setAvailableBalance, availableBalance, setPurchasedPlayer, purchasedPlayer }) => {

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price.split(",").join(""));

    if (availableBalance < playerPrice) {
      toast("You have not enough coins..!!");
      return;
    }

    if (purchasedPlayer.length === 6) {
      toast("Six Players Already Selected..!!");
      return;
    }

    // add selected player
    setAvailableBalance(availableBalance - playerPrice);
    setPurchasedPlayer([...purchasedPlayer, playerData]);
  };

  // check already selected
  const alreadySelected = purchasedPlayer.some(p => p.player_name === player.player_name);

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img
          className="w-full h-[300px] object-cover"
          src={player.player_image}
          alt={player.player_name}
        />
      </figure>
      <div className="mt-3">
        <div className="flex">
          <img src={userImg} alt="" />
          <h2 className="card-title ml-2">{player.player_name}</h2>
        </div>

        <div className="mt-4 flex justify-between items-center border-b-1 border-gray-200 pb-2">
          <div className="flex gap-2 items-center">
            <img src={flagImg} alt="" />
            <span>{player.player_country}</span>
          </div>
          <div>
            <button className="btn">{player.playing_role}</button>
          </div>
        </div>

        <div className="flex justify-between font-bold mt-3">
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>

        <div className="flex justify-between mt-4">
          <span className="font-bold">{player.batting_style}</span>
          <span className="font-light">{player.bowling_style}</span>
        </div>

        <div className="card-actions flex items-center justify-between mt-4">
          <p className="font-bold">
            Price: $<span>{player.price}</span>
          </p>
          <button
            disabled={alreadySelected}
            onClick={() => handleSelected(player)}
            className="btn"
          >
            {alreadySelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
