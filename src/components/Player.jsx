import { useState } from "react"


export default function Player({ initiaName, playerSymbol }) {
    const [playerName,setPlayerName] = useState(initiaName);
    const [isEditing, setIsEditing] = useState(false);
    
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) { editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}></input> ;}

    function handleEditClick() {
        setIsEditing(editing => !editing);
    }
    function handleChange(event){
        setPlayerName(event.target.value);//input 
    }
    
    

    return (
    <li>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{playerSymbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
    );
}