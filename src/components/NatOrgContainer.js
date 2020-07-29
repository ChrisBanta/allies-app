import React from 'react'
import NatOrgItem from './NatOrgItem'

export default function NatOrgContainer({nat_orgs, deleteNatOrg}) {

    const showNatOrgs = () => {
        return nat_orgs.map(nat_org => <NatOrgItem key={nat_org.id} 
            {...nat_org} deleteNatOrg={deleteNatOrg} />)

    }
    return (
        <ul className="nat_org-list">
            {showNatOrgs()}
        </ul>
    )
}
