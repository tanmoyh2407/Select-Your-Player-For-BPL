import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ purchasedPlayer, removeCard }) => {
    console.log(purchasedPlayer);
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                purchasedPlayer.map(player => <SelectedCard removeCard={removeCard} player={player}></SelectedCard>)
            }
        </div>
    );
};

export default SelectedPlayers;