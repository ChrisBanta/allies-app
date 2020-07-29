import React, { Component } from 'react';
import './App.css';

import NatOrgContainer from './components/NatOrgContainer'
import NatOrgForm from './components/NatOrgForm'

import LocalOrgContainer from './components/LocalOrgContainer'
import LocalOrgForm from './components/LocalOrgForm'

import BeAllyContainer from './components/BeAllyContainer'
import BeAllyForm from './components/BeAllyForm'

import SignUpForm from './components/SignUpForm';

const natorgsUrl = "http://localhost:3000/nat_orgs"
const localorgsUrl = "http://localhost:3000/localorgs"
const bealliesUrl = "http://localhost:3000/beallies"

class App extends Component {

  state = {
    nat_orgs: [],
    localorgs: [],
    beallies: [],
    user: {},
    alerts: []
  }

  componentDidMount(){
    this.getNatOrgs()
    this.getLocalOrgs()
    this.getBeAllies()
  }

  getNatOrgs = () => {
    fetch(natorgsUrl)
    .then(response => response.json())
    .then(nat_orgs => this.setState({nat_orgs}))
  }

  getLocalOrgs = () => {
    fetch(localorgsUrl)
    .then(response => response.json())
    .then(localorgs => this.setState({localorgs}))
  }

  getBeAllies = () => {
    fetch(bealliesUrl)
    .then(response => response.json())
    .then(beallies => this.setState({beallies}))
  }


  addNatOrg = (newNatOrg) => {
    this.setState({
      nat_orgs: [...this.state.nat_orgs, newNatOrg]
    })

    fetch(natorgsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNatOrg)
    })
  }

  addLocalOrg = (newLocalOrg) => {
    this.setState({
      localorgs: [...this.state.localorgs, newLocalOrg]
    })
    

    fetch(localorgsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newLocalOrg)
    })
  }

  addBeAlly = (newBeAlly) => {
    this.setState({
      beallies: [...this.state.beallies, newBeAlly]
    })
    

    fetch(bealliesUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBeAlly)
    })
  }

  deleteNatOrg = (id) => {
    let filtered = this.state.nat_orgs.filter(nat_org => nat_org.id !== id )
    this.setState({
      nat_orgs: filtered
    })

    fetch(natorgsUrl + "/" + id, { method: "DELETE"} )

  }

  deleteLocalOrg = (id) => {
    let filtered = this.state.localorgs.filter(localorg => localorg.id !== id )
    this.setState({
      localorgs: filtered
    })

    fetch(localorgsUrl + "/" + id, { method: "DELETE"} )

  }

  deleteBeAlly = (id) => {
    let filtered = this.state.beallies.filter(beally => beally.id !== id )
    this.setState({
      beallies: filtered
    })

    fetch(bealliesUrl + "/" + id, { method: "DELETE"} )

  }

  signUp = (user) => {
    fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user})
        })
        .then(response => response.json())
        .then(response => {
          if(response.errors){
            this.setState({alerts: response.errors})
          }
          else {
            localStorage.setItem('token', response.token)
            this.setState({
              user: response.user,
              alerts: ["User successfully created"]
            })
          }
        })
  }

  render(){
  return (
    <div className="App">
      <h1>Allies App</h1>
      <SignUpForm signUp={this.signUp} alerts={this.state.alerts} />
      <NatOrgForm addNatOrg={this.addNatOrg}/>
      <NatOrgContainer deleteNatOrg={this.deleteNatOrg} nat_orgs={this.state.nat_orgs}/>

      <LocalOrgForm addLocalOrg={this.addLocalOrg}/>
      <LocalOrgContainer deleteLocalOrg={this.deleteLocalOrg} localorgs={this.state.localorgs}  />
      
      <BeAllyForm addBeAlly={this.addBeAlly} />
      <BeAllyContainer deleteBeAlly={this.deleteBeAlly} beallies={this.state.beallies}/>
    </div>
  );
  }
}

export default App;
