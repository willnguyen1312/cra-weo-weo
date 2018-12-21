import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HELLO, Takada } from 'trade/components/wow';
// import { HELLO, Takada } from '../../shared/components';

class App extends Component {
  componentDidMount() {
    // console.log(HELLO)
    console.log(HELLO);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello Accounts ----- ^_^
          </a>
          <Takada />
        </header>
      </div>
    );
  }
}

export default App;
