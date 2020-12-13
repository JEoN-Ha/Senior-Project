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
