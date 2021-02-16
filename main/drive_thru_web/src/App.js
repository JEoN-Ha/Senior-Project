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

    const bodySignIn = JSON.stringify({
      userWebId: 'fora22',
      pw: '1111',
  });
  
  fetch(jeonhaUrl + '/signIn', {
      method: "post",
      headers: {
          "Content-Type": "application/json"
      },
      body: bodySignIn
  })
  .then(res => {
    if (res.status === 200) {
      // 정상 작동
      console.log('Success!');
    } else if(res.status === 400) {
      // 실패시
      console.log('Failed!');
    }
    console.log(res.text());
  })
  .then(data => {
    // console.log(JSON.parse(JSON.stringify(data)));
    console.log(JSON.parse(data));
      // const idSuccess = JSON.parse(data)[0];
      // const pwSuccess = JSON.parse(data)[1];
      // id, pw 성공여부 변수
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
