import React, { Component } from 'react';
import './App.css';
import Subject from "./components/Subject";
import List from "./components/List";
import ReadContent from "./components/ReadContent";
import ReadCustomer from "./components/ReadCustomer";
import LoginContent from "./components/LoginContent";
import UpdateContent from "./components/UpdateContent";
import Control from "./components/Control";
import CustomerList from "./components/CustomerList";

/* Component를 만드는 틀
class Subject extends Component {
  render() {
    return (
    );
  }
}
*/

class App extends Component {
  constructor(props){   //Component를 실행할 때 constructor가 가장 먼저 실행되어 초기화를 담당
    super(props);
    //this.max_list_id = 4;
    this.max_customerList_id = 1;
    this.state = {
      mode1 : 'login',  //현재 어떤 페이지에 있는지 구별하기위해
      mode2 : 'welcome',
      selected_list_id:2,
      selected_customerlist_id:1,
      subject : {title:'JEoN-Ha', sub:'안녕하세요. JEoN-Ha입니다.', 
        desc:'Untact로 안전하게 이용이 가능한 무인 드라이브 스루입니다.'},
      welcome : {title:'Welcome', desc:'customer'},
      Lists : [
        {id:1, title:'메뉴판', desc:'아메리카노 5000원'},
        {id:2, title:'주문내역', desc:'아메리카노 2잔'},
        {id:3, title:'장바구니', desc:'내역 없음'},
        {id:4, title:'쿠폰', desc:'아메리카노 10% 할인 쿠폰 1장'}
      ],
      customerLists : [
        {id:1, ID:'임아름', PW:'1234'}
      ]
    }

  }

  getLogout(){
    var _article = null;
    if(this.state.mode1 === 'readCustomer')
    {
      _article = <Control onChangeMode={function (_mode) {
        if(_mode === 'logout'){
          if(window.confirm('로그아웃하시겠습니까?')){
            var _lists = Array.from(this.state.customerLists);
            var i = 0;
            while(i < _lists.length){
              if(_lists[i].id === this.state.selected_customerlist_id){
                _lists.splice(i,1);   //어디서부터 어디까지 지울것인가 (i부터 1개)
                break;
              }
              i = i + 1;
            }
            this.setState({
              mode1:'login',
              customerLists:_lists
            });
            alert('로그아웃되었습니다.')
          }
        }
        this.setState({
          mode2:_mode
        })        
      }.bind(this)}></Control>
      return _article;
    }
  }

  getReadCustomer(){
    var i = 0;
      while(i < this.state.customerLists.length){
        var data = this.state.customerLists[i];
        if(data.id === this.state.selected_customerlist_id){
          return data;
        }
        i = i + 1;
      }
  }

  getLogin(){
    var _article, _content = null;
    if(this.state.mode1 === 'login'){
      _article = <LoginContent onSubmit={function(_ID, _PW) {
        this.max_customerList_id = this.max_customerList_id + 1;
        var _lists = this.state.customerLists.concat(
          {id:this.max_customerList_id, ID:_ID, PW:_PW}
        )
        this.setState({
          customerLists:_lists,
          mode1:'readCustomer',
          selected_customerlist_id : this.max_customerList_id
        });
      }.bind(this)}></LoginContent>
    } else if(this.state.mode1 === 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id,_ID, _PW) {
          var _lists = Array.from(this.state.Lists); // Lists를 복사한 새로운 배열 생성
          var i = 0;
          while(i < _lists.length){
            if(_lists[i].id === _id){
              _lists[i] = {id:_id, title:_ID, desc:_PW};
              break;
            }
            i = i + 1;
          }
          this.setState({
            Lists:_lists,
            mode1:'read'
        });
      }.bind(this)}></UpdateContent>
    } else if(this.state.mode1 === 'readCustomer'){
      var _data = this.getReadCustomer();
      _article = <ReadCustomer title={this.state.welcome.title}ID={_data.ID}></ReadCustomer>
    }
    return _article;
  }

  getReadContent(){
    var i = 0;
      while(i < this.state.Lists.length){
        var data = this.state.Lists[i];
        if(data.id === this.state.selected_list_id){
          return data;
          break;
        }
        i = i + 1;
      }
  }
  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode2 === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode2 === 'read'){
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } 
    return _article;
  }   
  render() {    //어떤 Html을 그릴것인가?
    
    return (
      <div className="App">
      <Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}
        desc={this.state.subject.desc}
        onChangePage={function() {
          this.setState({mode2:'welcome'});  //함수안에서 state 바꿀 때 무조건 setState 사용          
        }.bind(this)}   //this를 함수안에서 쓸 때 무조건 쓰기
        ></Subject>

      {/* 로그인 폼 */}
      {this.getLogin()}

      {/* 로그아웃 버튼*/}
      {this.getLogout()} 

      <List 
        onChangePage={function(id) {
          this.setState({
            mode2:'read',
            selected_list_id:Number(id)  //Number():문자를 숫자로 바꿔줌
          });             
        }.bind(this)}
        data={this.state.Lists}
        ></List>
    
      {this.getContent()}
      </div>
    );
  }
}

export default App;
