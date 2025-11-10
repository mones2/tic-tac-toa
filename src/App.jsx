import Player from "./components/Player"
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react"  
import Log from "./components/log.jsx";

function App() {
  const [gameTurns,setGameTurns] = useState([]);
  const [activePlayer,setActivePlayer] = useState('X');
  // const [gameBoard,setGameBoard] = useState(initialGameBoard);
  function handleSelectSquare(rowIndex,colIndex){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O':'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player ==='X'){
        currentPlayer = 'O';
      }
      const updatedTuns = [
        {square: {row: rowIndex, col: colIndex},player:activePlayer},
        ...prevTurns, 
      ];
      return updatedTuns;
    });
  }

  return (
    <menu>
      <div id = "game-container">
        <ol id="players" className="highlight-player">
          <Player initiaName="player 1" playerSymbol="X" isActive={activePlayer==='X'}/>
          <Player initiaName="player 2" playerSymbol="O" isActive={activePlayer==='O'}/>
        </ol>
      <GameBoard onSelectSquare = {handleSelectSquare}
       turns = {gameTurns}/>
      </div>
      <Log turns = {gameTurns} />
    </menu>
  )
}

export default App
