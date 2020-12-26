import React, { Component, createElement } from 'react';
// import logo from './logo.svg';
import JeonhaLogo from './components/JeonhaLogo';
import JeonhaNav from './components/JeonhaNav';
import JeonhaLoginControl from './components/JeonhaLoginControl';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navPosition: 22,
      nav: [ 'Menu', 'Store', "What's New", 'Story' ],
      isLogin: false
    }
  }
  render() {
    let loginWindow = null;
    if (this.state.isLogin === false) {
      loginWindow = <JeonhaLoginControl 
      loginCheck={this.state.isLogin} 
      appOnSubmit={function () {
        this.setState({isLogin: true});
      }.bind(this)}
      ></JeonhaLoginControl>
    } else {
      loginWindow = <JeonhaLoginControl 
        loginCheck={this.state.isLogin} 
        appOnSubmit={function () {
          this.setState({isLogin: false});
        }.bind(this)}
        ></JeonhaLoginControl>
    }
    return (
      <div className="App">
        <JeonhaLogo></JeonhaLogo>
        <JeonhaNav desc = {this.state.nav[0]} position={this.state.navPosition * 1}></JeonhaNav>
        <JeonhaNav desc = {this.state.nav[1]} position={this.state.navPosition * 2}></JeonhaNav>
        <JeonhaNav desc = {this.state.nav[2]} position={this.state.navPosition * 3}></JeonhaNav>
        <JeonhaNav desc = {this.state.nav[3]} position={this.state.navPosition * 4}></JeonhaNav>
        {loginWindow}
      </div>
    );
  }
}


export default App;