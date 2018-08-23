import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    //const myName = "Klaus";
    //const newName = <h2>Klaus</h2>
    const comment = "ignore Ricky";
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Klaus</h1>
        
          
        </header>
        <h2> {comment}</h2>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
