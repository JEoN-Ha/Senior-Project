import React, {Component} from 'react';
import AddNumberRoot from "./Component/AddNumberRoot";
import DisplayNumberRoot from "./Component/DisplayNumberRoot";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot></DisplayNumberRoot>
    </div>
  );
}

export default App;
