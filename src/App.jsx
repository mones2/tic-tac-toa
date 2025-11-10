import Player from "./components/Player"
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react"  
function App() {
  const [isEditing,setIsEditing] = useState(false);

  return (
    <menu>
      <div id = "game-container">
        <ol id="players">
          <Player initiaName="player 1" playerSymbol="X" />
          <Player initiaName="player 2" playerSymbol="O" />
        </ol>
      <GameBoard />
      </div>
    </menu>
  )
}

export default App
