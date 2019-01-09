import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
// import { HELLO, Takada } from '../../shared/components';
// release/liquid-v5.6.0
class App extends Component {
  componentDidMount() {
    // console.log(HELLO)
  }
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={styles.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello TRADE ========= ++++++
          </a>
          {/* <Takada /> */}
        </header>
      </div>
    );
  }
}

export default App;
