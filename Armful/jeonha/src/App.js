import React, { Component } from 'react';
import './App.css';
import Subject from "./components/Subject";
import ReadCustomer from "./components/ReadCustomer";
import LoginContent from "./components/LoginContent";
import Logout from "./components/Logout";
import TopBar from "./components/TopBar";

class App extends Component {
  constructor(props){   //Component를 실행할 때 constructor가 가장 먼저 실행되어 초기화를 담당
    super(props);
    //this.max_list_id = 4;
    this.max_customerList_id = 1;
    this.state = {
      mode1 : 'login',  //현재 어떤 페이지에 있는지 구별하기위해
      selected_customerlist_id:1,
      subject : {title:'JEoN-Ha'},  
      customerLists : [
        {id:null, ID:null, PW:null}
      ],
      TopBar : {title1:'MENU', title2:'매장검색', title3:'Coupon', title4:'Event'}
    }

  }

  getLogout(){
    let _article = null;
    if(this.state.mode1 === 'readCustomer')
    {
      _article = <Logout onChangeMode={function (_mode) {
        if(_mode === 'logout'){
          if(window.confirm('로그아웃하시겠습니까?')){
            let _lists = Array.from(this.state.customerLists);
            let i = 0;
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
      }.bind(this)}></Logout>
      return _article;
    }
  }

  getReadCustomer(){
    let i = 0;
      while(i < this.state.customerLists.length){
        let data = this.state.customerLists[i];
        if(data.id === this.state.selected_customerlist_id){
          return data;
        }
        i = i + 1;
      }
  }

  getLogin(){
    let _article, _content = null;
    if(this.state.mode1 === 'login'){
      _article = <LoginContent onSubmit={function(_ID, _PW) {
        this.max_customerList_id = this.max_customerList_id + 1;
        let _lists = this.state.customerLists.concat(
          {id:this.max_customerList_id, ID:_ID, PW:_PW}
        )
        this.setState({
          customerLists:_lists,
          mode1:'readCustomer',
          selected_customerlist_id : this.max_customerList_id
        });
      }.bind(this)}></LoginContent>
    } else if(this.state.mode1 === 'readCustomer'){
      let _data = this.getReadCustomer();
      _article = <ReadCustomer ID={_data.ID}></ReadCustomer>
    }
    return _article;
  }

  render() {    //어떤 Html을 그릴것인가?
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
        ></Subject>

        {/* 로그인 폼 */}
        {this.getLogin()}

        {/* 로그아웃 버튼*/}
        {this.getLogout()} 

        <TopBar
          title1={this.state.TopBar.title1}
          title2={this.state.TopBar.title2}
          title3={this.state.TopBar.title3}
          title4={this.state.TopBar.title4}
        ></TopBar>
      </div>
    );
  }
}

export default App;
