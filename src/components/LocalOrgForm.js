import React, {Component} from 'react'

const initialState = {
    name: "",
    address: "",
    phone: "",
    website: "",
    mission: ""
}

export default class LocalOrgForm extends Component {

    state = initialState

    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addLocalOrg(this.state)
    }

    render(){
        const {name, address, phone, website, mission} = this.state
        return (
            <form className="add-nat-org" onSubmit={this.handleSubmit}>
                <h3>Add a Local Organization</h3>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={this.handleChange} />
                <label>Address</label>
                <input type="text" name="address" value={address} onChange={this.handleChange} />
                <label>Phone</label>
                <input type="text" name="phone" value={phone} onChange={this.handleChange} />
                <label>Website</label>
                <input type="text" name="website" value={website} onChange={this.handleChange} />
                <label>Mission</label>
                <input type="text" name="mission" value={mission} onChange={this.handleChange} />
                <input type="submit" />
            </form>
        )

    }
    
}
