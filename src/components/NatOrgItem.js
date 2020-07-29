import React from 'react'

export default function NatOrgItem({id, name, address, phone, website, mission, deleteNatOrg}) {

    const handleClick = (event) => deleteNatOrg(id)
    return (
        <li className="nat_org-item">
            <h3>{name}</h3>
            <p>{address}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <p>{mission}</p>
            <button onClick={handleClick} className="nat-org-delete-button">Remove</button>
        </li>
    )
}
