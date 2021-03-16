import React, { Component } from 'react';
import './App.css';
import Subject from './component/Subject';
import LoginRoot from './component/LoginRoot';
import SignUpRoot from './component/SignUpRoot';
import Content from './component/Content.js';
import TopBar from './containers/TopBar';
import BasketRoot from './component/BasketRoot';
import MyPageRoot from './component/MyPageRoot';
import './component/Component.css';
import SideBar from './component/SideBar';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('wss://spacegrayapplewatch.azurewebsites.net/sockjs-node');

class App extends Component {

  componentWillMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      console.log(message);
    };
  }

  render() {
    return (
      <div className="Root">
        {/* JEoN-Ha 제목 */}
        <Subject></Subject>

        {/* 로그인 & 회원가입 버튼 */}
        <SideBar></SideBar>

        {/* 상단 메뉴 */}
        <TopBar></TopBar>

        {/* MENU */}
        <Content></Content>

        {/* LOGIN */}
        <LoginRoot></LoginRoot>

        {/* 회원가입 */}
        <SignUpRoot></SignUpRoot>

        {/* 장바구니 */}
        <BasketRoot></BasketRoot>

        {/* MY PAGE */}
        <MyPageRoot></MyPageRoot>
      </div>
    )
  }
}

export default App;
