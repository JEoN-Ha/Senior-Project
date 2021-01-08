import React, {Component} from 'react'; 
import './App.css';
import Subject from './component/Subject';
import LoginRoot from './component/LoginRoot';
import Content from './component/Content.js';
import TopBar from './containers/TopBar';
import BasketRoot from './component/BasketRoot';



class App extends Component {
  
  
  componentDidMount() {
    const all = fetch('http://localhost:3000/')
    .then(response => {
      console.log(response.text());
    });
    
    // .then(data => {console.log(data);});    

    // all.catch(function(err) {
    //   console.log(err);
    // });
  //   fetch('https://koreanjson.com/posts/1')
  // .then(response => response.json())
  // .then(json => console.log(json))
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
      </div>
    )
  }
}

export default App;
