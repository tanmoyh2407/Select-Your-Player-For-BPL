import React from 'react';
import navImg from '../../assets/logo.png'
import dollarImg from '../../assets/dollar-1.png'

const Navbar = ({availableBalance}) => {
    return (
        <div className="navbar max-w-[1200px] mx-auto">
            <div className="flex-1">
                <a className="text-xl">
                    <img className='h-[60px] w-[60px]' src={navImg} alt="" />
                </a>
            </div>
            <div className="flex gap-1 items-center">
                <span>{availableBalance}</span>
                <span>Coin</span>
                <img src={dollarImg} alt="" />
            </div>
        </div>
    );
};

export default Navbar;