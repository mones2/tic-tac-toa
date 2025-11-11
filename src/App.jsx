import Player from "./components/Player"
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react"
import Log from "./components/log.jsx";
import { WINNING_COMBINATIONS } from './winning-combinations.js'

const initialGameBoard = [
    [null, null,null],
    [null, null,null],
    [null, null,null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState (false);// we can derive this from gameTurns 
  // const [activePlayer,setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);


  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]; 

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(rowIndex, colIndex)//when button clicked 
  {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O':'X');//player
    setGameTurns(prevTurns => {//game board
      const activePlayer = deriveActivePlayer(prevTurns);

      const updatedTuns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];
      return updatedTuns;
    });
  }

  return (
    <menu>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initiaName="player 1" playerSymbol="X" isActive={activePlayer === 'X'} />
          <Player initiaName="player 2" playerSymbol="O" isActive={activePlayer === 'O'} />
        </ol>
        {winner && <p>you won, {winner}</p>}
        <GameBoard onSelectSquare={handleSelectSquare}
          board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </menu>
  )
}

export default App
