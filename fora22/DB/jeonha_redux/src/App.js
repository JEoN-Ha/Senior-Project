import React, {Component} from 'react'; 
import './App.css';
import Subject from './component/Subject';
import LoginRoot from './component/LoginRoot';
import Content from './component/Content.js';
import TopBar from './containers/TopBar';
import BasketRoot from './component/BasketRoot';
import { response } from 'express';

class App extends Component {
  state = {username: null};

  componentDidMount() {
    fetch('/api/getUsername')
    .then(response => response.json())
    .then(user => this.setState({
      username: user.username
    }));
  }

  render() {
    return (
      <div className="App">
        {/* JEoN-Ha 제목 */}
        <Subject></Subject>

        {/* 로그인 폼 */}
        <LoginRoot></LoginRoot>

        {/* 상단 메뉴 */}
        <TopBar></TopBar>
        
        {/* MENU */}
        <Content></Content>
        
        {/* 장바구니 */}
        <BasketRoot></BasketRoot>
      <p>
        <div>
          {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. Please wait!</h1>}
        </div>
      </p>
      </div>
    )
  }
}

export default App;
