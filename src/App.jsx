import Player from "./components/Player"
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
      </div>
      <p>coming soon</p>
    </menu>
  )
}

export default App
