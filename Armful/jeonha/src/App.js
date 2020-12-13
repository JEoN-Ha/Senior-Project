import React, { Component } from 'react';
import './App.css';
import Subject from "./components/Subject";
import List from "./components/List";

/* Component를 만드는 틀
class Subject extends Component {
  render() {
    return ();
  }
}
*/

class App extends Component {
  constructor(props){   //Component를 실행할 때 constructor가 가장 먼저 실행되어 초기화를 담당
    super(props);
    this.state = {
      subject : {title:'JEoN-Ha', sub:'안녕하세요. JEoN-Ha입니다.', 
        desc:'Untact로 안전하게 이용이 가능한 무인 드라이브 스루입니다.'},
      contents : [
        {id:1, title:'메뉴판'},
        {id:2, title:'주문내역'},
        {id:3, title:'장바구니'},
        {id:4, title:'쿠폰'}
      ]
    }

  }   
  render() {
    return (
      <div className="App">
      <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}
        desc={this.state.subject.desc}></Subject>
      <List data={this.state.contents}></List>
      </div>
    );
  }
}

export default App;
