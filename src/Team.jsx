import { useState } from "react"

export default function (){
    let [player, addPlayer] = useState(11);
    return(
        <div>
            <h3>team: {player}</h3>
            <button onClick={() => addPlayer(player+1)}>Add player</button>
            <button onClick={()=> addPlayer(player-1)}>Remove player</button>
        </div>
    )
}