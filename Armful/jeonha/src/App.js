import React, { Component } from 'react';
import './App.css';
import Subject from "./components/Subject";
import List from "./components/List";
import Content from "./components/Content";

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
      mode : 'welcome',  //현재 어떤 페이지에 있는지 구별하기위해
      selected_content_id:2,
      subject : {title:'JEoN-Ha', sub:'안녕하세요. JEoN-Ha입니다.', 
        desc:'Untact로 안전하게 이용이 가능한 무인 드라이브 스루입니다.'},
      welcome : {title:'Welcome', desc:'Hello, customer!'},
      Lists : [
        {id:1, title:'메뉴판', desc:'아메리카노 5000원'},
        {id:2, title:'주문내역', desc:'아메리카노 2잔'},
        {id:3, title:'장바구니', desc:'내역 없음'},
        {id:4, title:'쿠폰', desc:'아메리카노 10% 할인 쿠폰 1장'}
      ]
    }

  }   
  render() {    //어떤 Html을 그릴것인가?
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.Lists.length){
        var data = this.state.Lists[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
      <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}
        desc={this.state.subject.desc}
        onChangePage={function() {
          this.setState({mode:'welcome'});  //함수안에서 state 바꿀 때 무조건 setState 사용          
        }.bind(this)}   //this를 함수안에서 쓸 때 무조건 쓰기
        ></Subject>
      <List 
        onChangePage={function(id) {
          this.setState({
            mode:'read',
            selected_content_id:Number(id)  //Number():문자를 숫자로 바꿔줌
          });             
        }.bind(this)}
        data={this.state.Lists}
        ></List>
      <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
