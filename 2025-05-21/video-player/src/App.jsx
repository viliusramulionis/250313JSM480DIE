import Player from './components/player/Player'
import './App.css'

const App = () => {

  return (
    <>
      <h1>Video Player</h1>
      <Player videoID="pvuN_WvF1to" start={130} />
      <Player videoID="HCDVN7DCzYE" start={90} end={94} loop={true} />
      <Player videoID="2HoTK_Gqi2Q" thumbnail="https://picsum.photos/seed/picsum/500/300" />
      <Player videoID="TK4N5W22Gts" loop={true} />
      <Player loop={true} />
    </>
  )
}

export default App
