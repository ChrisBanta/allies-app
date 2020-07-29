import React from 'react'

export default function BeAllyItem({id, advice, deleteBeAlly}) {

    const handleClick = (event) => deleteBeAlly(id)
    return (
        <li className="be-ally-item">
            <h3>{advice}</h3>
            
            <button onClick={handleClick} className="be-ally-delete-button">Remove</button>
        </li>
    )
}