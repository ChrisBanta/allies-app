import React, { useState } from 'react'

export default function SignUpForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        let user = {
            username,
            password
        }

        props.signUp(user)

        
    }

    const handleChange = ({target}) => {
        return target.name === "username"
         ? setUsername(target.value)
         :setPassword(target.value)
    }

    const showAlerts = () => props.alerts.map(alert => <p>{alert}</p>)
    

    return (
        
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <label>Username</label>
                <input name="username" value={username} onChange={handleChange}/> 
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={handleChange}/> 
                <input type="submit" />
                {props.alerts ? showAlerts() : null }
            </form>
            
        
    )
}
   
