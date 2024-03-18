import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerList from './PlayerList.js';



function App() {
  const myStyle={
    display:"flex",
    justifyContent:"center",
    gap:"5px",
  }
  return (
    <>
    <PlayerList style={myStyle}/>
    </>
      
  );
}

export default App;
