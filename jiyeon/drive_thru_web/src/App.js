import React, { Component } from 'react';
import './App.css';
import Subject from './component/Subject';
import LoginRoot from './component/LoginRoot';
import SignUpRoot from './component/SignUpRoot';
import Content from './component/Content.js';
import TopBar from './containers/TopBar';
import BasketRoot from './component/BasketRoot';
import './component/Component.css';
import SideBar from './component/SideBar';

class App extends Component {
  componentDidMount() {
    const jeonhaUrl = 'http://localhost:4000';
    // const jeonhaUrl = 'https://pinkwallet-apim.azure-api.net/api';



  fetch(jeonhaUrl + '/getMenuData')
    .then(res => {
      if (res.status === 200) {
        // 정상 작동
        console.log('Success!');
      } else if (res.status === 400) {
        // 실패시
        console.log('Failed!');
      }
      return res.json();
    })
    .then(data => {
      const allMenuData = data.menu; // 모든 음식 메뉴 정보: 리스트 안에 객체 형태 [{}, {}, {}, ...]
      const getMenuIsError = data.isError;
      const whatIsError = data.explainError;

      // 확인을 위한 console.log
      // console.log(allMenuData, getMenuIsError, whatIsError);
    });

  // ----------------------------------------------------------------------------------------------
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
      </div>
    )
  }
}

export default App;
