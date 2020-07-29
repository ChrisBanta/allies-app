import React, {Component} from 'react'

const initialState = {
    advice: ""  
    }

export default class BeAllyForm extends Component {

    state = initialState

    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBeAlly(this.state)
    }

    render(){
        const {advice} = this.state
        return (
            <form className="add-nat-org" onSubmit={this.handleSubmit}>
                <h3>Add Advice</h3>
                <label>Advice</label>
                <input type="text" name="advice" value={advice} onChange={this.handleChange} />
                <input type="submit" />
            </form>
        )

    }
    
}
