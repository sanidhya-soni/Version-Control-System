import logo from './logo.svg';
import './App.css';
import shreya from './components/shreya'

// File: src/App.js
import React from 'react';
import SimpleForm from './components/SimpleForm'; // Update the path if necessary

const App = () => {
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
          Learn React
        </a>
      </header>
      <SimpleForm />
      <shreya />
    </div>
  );
};

export default App;
