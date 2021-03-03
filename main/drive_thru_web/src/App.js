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

class App extends Component {
  componentDidMount() {
    const jeonhaUrl = 'http://localhost:4000';

    const bodyOrder = JSON.stringify({
      userWebId: 'fora22',
      carId: '55가 5555',
      payment: 1
  });
  
  fetch(jeonhaUrl + '/order', {
      method: "post",
      headers: {
          "Content-Type": "application/json"
      },
      body: bodyOrder
  })
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
    const getMenuIsError = data.isError;
    const whatIsError = data.explainError;

    // 확인을 위한 console.log
    if (getMenuIsError) {
        console.log(whatIsError);
    }
})

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
