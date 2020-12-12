import React, { Component } from 'react';
import './App.css';

/* Component를 만드는 틀
class Subject extends Component {
  render() {
    return ();
  }
}
*/

class Subject extends Component {   //Subject라는 태그를 생성
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <h3>{this.props.sub}</h3>
        <h3>{this.props.desc}</h3>
      </header>
    );
  }
}

class List extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">메뉴판</a></li>
          <li><a href="2.html">주문내역</a></li>
          <li><a href="3.html">장바구니</a></li>
          <li><a href="4.html">쿠폰</a></li>
        </ul>
      </nav>
    );
  }
}

class App extends Component {   
  render() {
    return (
      <div className="App">
      <Subject title="JEoN-Ha" sub="안녕하세요. JEoN-Ha입니다."
      desc="Untact로 안전하게 이용이 가능한 무인 드라이브 스루입니다."></Subject>
      <List></List>
      </div>
    );
  }
}

export default App;
