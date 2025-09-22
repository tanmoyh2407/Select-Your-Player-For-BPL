import React, { use } from 'react';
import userImg from '../../assets/user-1.png'
import flagImg from '../../assets/report-1.png'

const AvailablePlayers = ({ playerPromise }) => {

    const playerData = use(playerPromise);
    console.log(playerData);

    // "player_image": "https://i.ibb.co.com/Jhg3KCY/Tamim-Iqbal.png",
    // "player_name": "Tamim Iqbal",
    // "player_country": "Bangladesh",
    // "playing_role": "Batsman",
    // "rating": 8.5,
    // "batting_style": "Left-hand Bat",
    // "bowling_style": "N/A",
    // "price": "$150,000"

    return (
        <div className='max-w-[1200px] mx-auto'>

            {
                playerData.map(player => <div className="card bg-base-100 w-96 shadow-sm p-4">
                    <figure>
                        <img
                            src={player.player_image}
                            alt={player.player_name} />
                    </figure>
                    <div className="mt-3">
                        <div className='flex'>
                            <img src={userImg} alt="" />
                            <h2 className="card-title ml-2">{player.player_name}</h2>
                        </div>

                        <div className='mt-4 flex justify-between items-center border-b-1 border-gray-200 pb-2'>
                            <div className='flex gap-2 items-center'>
                                <img src={flagImg} alt="" />
                                <span>{player.player_country}</span>
                            </div>
                            <div>
                                <button className='btn'>{player.playing_role}</button>
                            </div>
                        </div>

                        <div className='flex justify-between font-bold mt-3'>
                            <span>Rating</span>
                            <span>{player.rating}</span>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <span className='font-bold'>{player.batting_style}</span>
                            <span className='font-light'>{player.bowling_style}</span>
                        </div>

                        <div className="card-actions flex items-center justify-between mt-4">
                            <p className='font-bold'>Price: $<span>{player.price}</span></p>
                            <button className="btn">Choose Player</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AvailablePlayers;