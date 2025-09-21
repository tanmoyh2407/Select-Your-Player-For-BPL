import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import Navbar from './components/Navbar/Navbar';
import { Suspense } from 'react';

const fetchPlayers = async () => {
  const res = await fetch('/players.json');
  return res.json();
}

function App() {

  const playerPromise = fetchPlayers();

  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
      </Suspense>
      
      {/* <SelectedPlayers></SelectedPlayers> */}

    </>
  )
}

export default App
