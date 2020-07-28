import React from 'react'

export default function NatOrgItem({name, address, phone, website, mission}) {
    return (
        <li className="nat_org-item">
            <h3>{name}</h3>
            <p>{address}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <p>{mission}</p>
        </li>
    )
}
