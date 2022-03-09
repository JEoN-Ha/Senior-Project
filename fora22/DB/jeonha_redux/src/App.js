import React, { Component } from 'react';
import './App.css';
import Subject from './component/Subject';
import LoginRoot from './component/LoginRoot';
import Content from './component/Content.js';
import TopBar from './containers/TopBar';
import BasketRoot from './component/BasketRoot';




class App extends Component {
  state = {
    allUser: null,
    userName: null

  };

  componentDidMount() {
    // // fetch('http://localhost:4000/fora22')
    // // .then(response => 
    // //   response.text()
    // // )
    // // .then(data => {
    // //   console.log(JSON.parse(data));
    // //   this.setState({userName: data});
    // // });
    // let bodyData = JSON.stringify({
    //   UserWebId: "baekgo_",
    //   UserName: "강백구",
    //   PW: '8888',
    //   PhoneNum: '0880808080'
    // })

    // // fetch('http://localhost:4000/insertData', {
    // //   method: "post",
    // //   headers: {
    // //     "Content-Type": "application/json"
    // //   },
    // //   body: bodyData
    // // })
    // // .then((res) => console.log(res.json()))


    // fetch('http://localhost:4000/getData')
    // .then(response => 
    //   response.text()
    // )
    // .then(data => {
    //   console.log(JSON.parse(data));
    //   this.setState({allUser: data});
    // });
    const jeonhaUrl = 'http://localhost:4000'

    // ----------------------------------------------------------------------------------------------
    // signUP
    const bodySignUP = {
      userWebId: 'fora22',
      userName: '팽대원',
      pw: '1234',
      phoneNum: '01011112222',
      carId: '11가 1111'
    }

    fetch(jeonhaUrl + '/signUP', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: bodySignUP
    })
      .then(res => {
        if (res.status === 200) {
          // 정상 작동
          console.log('Success!');
        } else if (res.status === 400) {
          // 실패시
          console.log('Failed!');
          res.text()
        }
      })
      .then(data => {
        console.log(JSON.parse(data));
      })

  }


  render() {
    const allUser = this.state.allUser;
    const userName = this.state.userName;
    const testStyle = {
      position: 'fixed',
      left: 20,
      top: 300,
    }

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

        <div style={testStyle}>
          <h1>{allUser}</h1>
          <h2>{userName}</h2>
        </div>

      </div>
    )
  }
}

export default App;
