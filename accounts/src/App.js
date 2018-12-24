import React from 'react'
import logo from './logo.svg'
import styles from './App.module.css'
import { HELLO, Takada } from 'trade/components/wow';
// import { HELLO, Takada } from '../../shared/components';

class App extends React.Component {
  componentDidMount() {
    // console.log(HELLO)
    console.log(HELLO);
  }

  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={styles.AppLink}
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
