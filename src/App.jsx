import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import Navbar from './components/Navbar/Navbar';
import { Suspense, useState } from 'react';
import { ToastContainer } from 'react-toastify';

const fetchPlayers = async () => {
  const res = await fetch('/players.json');
  return res.json();
}

const playerPromise = fetchPlayers();

function App() {

  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(10000000);
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);

  const [isSelected, setIsSelected] = useState(null)

  const removeCard = (p)=>{
    const filterPlayer = purchasedPlayer.filter(player => player.player_name!==p.player_name);
    setPurchasedPlayer(filterPlayer);
    setAvailableBalance(availableBalance + parseInt(p.price.split(",").join("")));
  }

  

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className='max-w-[1200px] mx-auto flex justify-between items-center mb-4'>
        <h1 className='font-bold text-2xl'>{
            toggle===true?"Available Players":`Selected Players (${purchasedPlayer.length}/6)`
          }</h1>

        <div className='font-bold'>
          <button onClick={() => setToggle(true)} className={`py-3 px-5 border-1 border-gray-300 rounded-l-2xl border-r-0 ${toggle === true ? "bg-[#E7FE29]" : "font-[400]"}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-5 border-1 border-gray-300 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE29]" : "font-[400]"}`}>Selected {`(${purchasedPlayer.length})`}</button>
        </div>
      </div>

      {
        toggle === true ?
          <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
            <AvailablePlayers isSelected={isSelected} setIsSelected={setIsSelected} setPurchasedPlayer={setPurchasedPlayer} purchasedPlayer={purchasedPlayer} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>
          </Suspense>
          :
          <SelectedPlayers removeCard={removeCard} purchasedPlayer={purchasedPlayer}></SelectedPlayers>
      }

      {/* ToastContainer */}
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
