import React, {Component} from 'react'; 
import './App.css';
import Subject from './component/Subject';
import LoginRoot from './component/LoginRoot';
import Content from './component/Content.js';
import TopBar from './containers/TopBar';

class App extends Component {
  render() {
    return (
      <div>
        {/* JEoN-Ha 제목 */}
        <Subject></Subject>

        {/* 로그인 폼 */}
        <LoginRoot></LoginRoot>

        {/* MENU */}
        <TopBar></TopBar>
        <Content></Content>
      </div>
    )
  }
}

export default App;
