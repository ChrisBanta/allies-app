import React from 'react'

export default function LocalOrgItem({id, name, address, phone, website, mission, deleteLocalOrg}) {

    const handleClick = (event) => deleteLocalOrg(id)
    return (
        <li className="local_org-item">
            <h3>{name}</h3>
            <p>{address}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <p>{mission}</p>
            <button onClick={handleClick} className="local-org-delete-button">Remove</button>
        </li>
    )
}