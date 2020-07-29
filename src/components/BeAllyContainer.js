import React from 'react'
import BeAllyItem from './BeAllyItem'

export default function BeAllyContainer({beallies, deleteBeAlly}) {

    const showBeAllies = () => {
        return beallies.map(beally => <BeAllyItem key={beally.id} 
            {...beally} deleteBeAlly={deleteBeAlly} />)

    }
    return (
        <ul className="be-ally-list">
            {showBeAllies()}
        </ul>
    )
}