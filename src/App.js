import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Now I'm trying to fix the bug with this.
        </p>
        <a
            className="App-link"
            href=""
            target="_blank"
            rel="noopener noreferrer"
        >
        Show charts
        </a>

      </header>
      <div>
        <Chart />
      </div>
    </div>
  );
}

export default App;
