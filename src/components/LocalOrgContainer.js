import React from 'react'
import LocalOrgItem from './LocalOrgItem'

export default function LocalOrgContainer({localorgs, deleteLocalOrg}) {

    const showLocalOrgs = () => {
        return localorgs.map(localorg => <LocalOrgItem key={localorg.id} 
            {...localorg} deleteLocalOrg={deleteLocalOrg} />)

    }
    return (
        <ul className="local-org-list">
            {showLocalOrgs()}
        </ul>
    )
}