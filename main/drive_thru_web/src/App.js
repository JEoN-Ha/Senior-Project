import React, {Component} from 'react'; 
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

    const bodySignUP = {
      userWebId: 'fora23',
      userName: '팽대원',
      pw: '1234',
      phoneNum: '01011112222',
      carId: '11가 1111'
  };
  
  fetch(jeonhaUrl + '/signUp', {
      method: "post",
      headers:  {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
      body: bodySignUP
  })
  .then(res => {
      if (res.status === 200) {
          // 정상 작동
          console.log('Success!');
      } else if(res.status === 400) {
          // 실패시
          console.log('Failed!');
          res.text()
      }
  })
  .then(data => {
      // 아이디 중복, 패스워드 중복, 그 외 에러
      const overlapId = JSON.parse(data)[0];
      const overlapPw = JSON.parse(data)[1];
      const errorDB = JSON.parse(data)[2];
  })
  }

  render() {
    return (
      <div className = "Root">
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
