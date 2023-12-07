import logo from './logo.svg';
import './App.css';
import Shreya from './components/Shreya';

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
      <Shreya />
    </div>
  );
};

export default App;
