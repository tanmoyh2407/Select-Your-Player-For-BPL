import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import Navbar from './components/Navbar/Navbar';
import { Suspense, useState } from 'react';

const fetchPlayers = async () => {
  const res = await fetch('/players.json');
  return res.json();
}

const playerPromise = fetchPlayers();

function App() {

  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(1000000);
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);

  

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>Available Players</h1>

        <div className='font-bold'>
          <button onClick={() => setToggle(true)} className={`py-3 px-5 border-1 border-gray-300 rounded-l-2xl border-r-0 ${toggle === true ? "bg-[#E7FE29]" : "font-[400]"}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-5 border-1 border-gray-300 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE29]" : "font-[400]"}`}>Selected <span>(0)</span></button>
        </div>
      </div>

      {
        toggle === true ?
          <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
            <AvailablePlayers setPurchasedPlayer={setPurchasedPlayer} purchasedPlayer={purchasedPlayer} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>
          </Suspense>
          :
          <SelectedPlayers purchasedPlayer={purchasedPlayer}></SelectedPlayers>
      }
    </>
  )
}

export default App
