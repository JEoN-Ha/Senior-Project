import React from 'react';
import logoImage from './_img/logo.PNG';
import './App.css';

function App() {
  const logo = require('./_img/logo.png');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoImage} alt="m" />
      </header>
    </div>
  );
}

export default App;
