import React, { Component } from 'react';
// import logo from './logo.svg';
import JeonhaLogo from './components/JeonhaLogo';
import JeonhaNav from './components/JeonhaNav';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navPosition:18,
      nav: {menu: "Menu", store: "Store", new:"What's New", story: "story" }
    }
  }
  render() {

    return (
      <div className="App">
        <JeonhaLogo></JeonhaLogo>
        <JeonhaNav text={this.state.nav.menu} position={this.state.navPosition}></JeonhaNav>
        <JeonhaNav text={this.state.nav.store} position={this.state.navPosition * 2}></JeonhaNav>
        <JeonhaNav text={this.state.nav.new} position={this.state.navPosition * 3}></JeonhaNav>
        <JeonhaNav text={this.state.nav.story} position={this.state.navPosition * 4}></JeonhaNav>
        {/* store={this.state.nav.store}
          new = {this.state.nav.new}
          story = {this.state.nav.story} */}
      </div>
    );
  }
}


export default App;