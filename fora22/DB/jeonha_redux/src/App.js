import React, {Component} from 'react'; 
import './App.css';
import Subject from './component/Subject';
import LoginRoot from './component/LoginRoot';
import Content from './component/Content.js';
import TopBar from './containers/TopBar';
import BasketRoot from './component/BasketRoot';


class App extends Component {
  state = {username: null};

  componentDidMount() {
    fetch('/api/getData')
    .then(response => response.json())
    .then(data => this.setState({
      username: data.rows
    }));
  }

  render() {
    const username = this.state.username;
    const testStyle = {
      position: 'fixed',
      top: 500,
      left: 20
    }
    const test = () => {
      console.log('hello');
      console.log({username});
      
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
          {test()}
      <p>
        <div style={testStyle}>
          {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. Please wait!</h1>}
        </div>
      </p>
      </div>
    )
  }
}

export default App;
