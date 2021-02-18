import React, {Component} from 'react'; 
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
    
    const defaultURL = 'https://pinkapeach-apim.azure-api.net'

    let bodyData = {
      UserWebId: "baekgo_",
      UserName: "강백구",
      PW: '8888',
      PhoneNum: '0880808080'
    }
    
    async function signUp(url='',bodyData = {}){
      const res = await fetch(url, {
        method: "post",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin" : "*", 
          "Access-Control-Allow-Credentials" : true 
        },
        credentials: 'same-origin',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(bodyData)
      });

      return res.json();
    }

    signUp(defaultURL+'/signUp')
      .then(bodyData=>
        {
          console.log(bodyData);
        });
    // fetch(defaultURL+'/signUp', {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   credentials: "include",
    //   body: JSON.stringify(bodyData)
    // })
    // .then((res) => console.log(res.json()))
    

    // fetch(defaultURL+'/getMenuData',{
    //   method: "get",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   credentials: "include"
    // })
    // .then(response => 
    //   response.text()
    // )
    // .then(data => {
    //   console.log(JSON.parse(data));
    //   this.setState({allUser: data});
    // });
    
    
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
