import React from 'react'
import logo from './logo.svg'
import { update as setTheme } from "core/themes";
import styles from './App.css'
import { HELLO, Takada } from 'trade/components/wow';
// import { HELLO, Takada } from '../../shared/components';

class App extends React.Component {
  componentDidMount() {
    setTheme(null, 'blue');
    // console.log(HELLO)
    console.log(HELLO);
  }

  render() {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <p className="text-global">
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
