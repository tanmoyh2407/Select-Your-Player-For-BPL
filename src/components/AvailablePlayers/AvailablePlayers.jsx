import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';


const AvailablePlayers = ({ playerPromise, setAvailableBalance, availableBalance, purchasedPlayer, setPurchasedPlayer,setIsSelected, isSelected }) => {

    const playerData = use(playerPromise);

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {
                playerData.map(player => <PlayerCard isSelected={isSelected} setIsSelected={setIsSelected} setPurchasedPlayer={setPurchasedPlayer} purchasedPlayer={purchasedPlayer} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
            }
        </div>
    );
};

export default AvailablePlayers;