import React from 'react';
import dltImg from '../../assets/delete.png'

const SelectedCard = ({ player, removeCard }) => {

    const handleRemove = ()=>{
        removeCard(player);
    }

    return (
        <div className='flex justify-between items-center border-1 border-gray-200 rounded-2xl p-5 mb-3'>
            <div className='flex items-center'>
                <div>
                    <img className='h-[80px] w-[80px] rounded-xl' src={player.player_image} alt="" />
                </div>
                <div className='ml-4'>
                    <h2 className='font-bold text-2xl'>{player.player_name}</h2>
                    <p className='text-gray-600'>{player.playing_role}</p>
                </div>
            </div>
            <div onClick={handleRemove}>
                <img src={dltImg} alt="Delete" />
            </div>
        </div>
    );
};

export default SelectedCard;