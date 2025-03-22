import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <TimerChallenge title={"Easy"} targetTime={1}/>
      <TimerChallenge title={"Hard"} targetTime={15}/>

    </>
  );
}

export default App;
