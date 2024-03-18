import react from 'react';
import players from './players';
import Player from './Player';

function PlayerList(){
return (
<div>{
players.map((player)=>(
    <Player
    name={player.name}
    age={player.age}
    team={player.team}
    country={player.country}
    numeroMaillot={player.numeroMaillot}
    imageUrl={player.imageUrl}
    /> 
))
}
</div>

)

}
export default PlayerList;