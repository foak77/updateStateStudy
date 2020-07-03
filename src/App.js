import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  state = {
     meaningOfLife:43
  }

onHandleClick = () =>{
  this.setState((prevState, prevProps) => {
    return { meaningOfLife: prevState.meaningOfLife + 1}
  },
    ()=>console.log(this.state.meaningOfLife)
    )
}

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.state.meaningOfLife}</p>
        <button onClick={this.onHandleClick}>Update State</button>
      </header>
    </div>
    )
  }
}

export default App