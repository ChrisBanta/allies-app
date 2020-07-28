import React, { Component } from 'react';
import './App.css';
import NatOrgContainer from './components/NatOrgContainer'
const natorgsUrl = "http://localhost:3000/nat_orgs"

class App extends Component {

  state = {
    nat_orgs: []
  }

  componentDidMount(){
    this.getNatOrgs()
  }

  getNatOrgs = () => {
    fetch(natorgsUrl)
    .then(response => response.json())
    .then(nat_orgs => this.setState({nat_orgs}))
  }

  render(){
  return (
    <div className="App">
      <h1>Allies App</h1>
      <NatOrgContainer nat_orgs={this.state.nat_orgs}/>
    </div>
  );
  }
}

export default App;
