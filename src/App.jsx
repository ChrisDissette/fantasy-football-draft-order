import './App.css';
import EightPlayerForm from './components/EightPlayerForm';
import TeamSelect from './components/TeamSelect'
import DraftOrder from './components/DraftOrder'
import Box from '@mui/material/Box';
import { useState } from 'react'
import TenPlayerForm from './components/TenPlayerForm'
import TwelvePlayerForm from './components/TwelvePlayerForm'

function App() {

  const [initialList, setInitialList] = useState([])
  const [playerForm, setPlayerForm] = useState({
    playerOne:"",
    playerTwo:"",
    playerThree:"",
    playerFour: "",
    playerFive: "",
    playerSix: "",
    playerSeven:"",
    playerEight:"",
    playerNine:"",
    playerTen:"",
    playerEleven:"",
    playerTwelve:""
  })
  const [playerList, setPlayerList] = useState([])
  const [teamTotal, setTeamTotal] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [selectDisplay, setSelectDisplay] = useState(true)
  const [formError, setFormError] = useState(false)


  return (
    <div className="container">
      <Box py={3}>
      {
        selectDisplay ? 
        <TeamSelect setSelectDisplay={setSelectDisplay} teamTotal={teamTotal} setTeamTotal={setTeamTotal} />
        : teamTotal === 8 && loaded === false ?
        <EightPlayerForm formError={formError} setFormError={setFormError} loaded={loaded} setLoaded={setLoaded} initialList={initialList} setInitialList={setInitialList} playerForm={playerForm} setPlayerForm={setPlayerForm} playerList={playerList} setPlayerList={setPlayerList} teamTotal={teamTotal} setTeamTotal={setTeamTotal} setSelectDisplay={setSelectDisplay} />
        : teamTotal=== 10 && loaded === false ?
        <TenPlayerForm formError={formError} setFormError={setFormError} loaded={loaded} setLoaded={setLoaded} initialList={initialList} setInitialList={setInitialList} playerForm={playerForm} setPlayerForm={setPlayerForm} playerList={playerList} setPlayerList={setPlayerList} teamTotal={teamTotal} setTeamTotal={setTeamTotal} setSelectDisplay={setSelectDisplay} />
        : teamTotal === 12 && loaded === false ?
        <TwelvePlayerForm formError={formError} setFormError={setFormError} loaded={loaded} setLoaded={setLoaded} initialList={initialList} setInitialList={setInitialList} playerForm={playerForm} setPlayerForm={setPlayerForm} playerList={playerList} setPlayerList={setPlayerList} teamTotal={teamTotal} setTeamTotal={setTeamTotal} setSelectDisplay={setSelectDisplay} />
        : loaded === true ?
        <DraftOrder selectDisplay={selectDisplay} setSelectDisplay={setSelectDisplay} loaded={loaded} setLoaded={setLoaded} playerList={playerList} setPlayerList={setPlayerList} />
        :''
      }
      </Box>
    </div>
  );
}

export default App;
