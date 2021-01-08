import React, { Component } from 'react';
import "./Component.css";

class SignUpContent extends Component {
    state = {
        ID:null,PW:null,
        name:null,phoneNum:null,carNum1:null,carNum2:null
    }
    render() {
      return (
        <div className="SignUp">
            <h2>JEoN-Ha 회원가입</h2>
            이름<br></br>
            <input type="text" name="name" placeholder="이름을 입력해주세요."
                size="30"
                name={this.state.name}
                onChange={function (e) {
                    this.setState({name:e.target.value});                    
                }.bind(this)}></input><br></br>
            ID<br></br>
            <input type="text" name="ID" placeholder="아이디를 입력해주세요."
                size="30"
                ID={this.state.ID}
                onChange={function (e) {
                    this.setState({ID:e.target.value});                    
                }.bind(this)}></input><br></br>
            Password<br></br>
            <input type="text" name="PW" placeholder="비밀번호를 입력해주세요."
                size="30"
                PW={this.state.PW}
                onChange={function (e) {
                    this.setState({PW:e.target.value});                    
                }.bind(this)}></input><br></br>
            <input type="text" name="PW" placeholder="비밀번호를 한번 더 입력해주세요."
                size="30"
                PW={this.state.PW}
                onChange={function (e) {
                    this.setState({PW:e.target.value});                    
                }.bind(this)}></input><br></br>
            차량번호 1<br></br>
            <input type="text" name="carNum1" placeholder="대표 차량번호를 입력해주세요."
                size="30"
                carNum1={this.state.carNum1}
                onChange={function (e) {
                    this.setState({carNum1:e.target.value});                    
                }.bind(this)}></input><br></br>
            차량번호 2<br></br>
            <input type="text" name="carNum2" placeholder="두번째 차량번호를 입력해주세요."
                size="30"
                carNum2={this.state.carNum2}
                onChange={function (e) {
                    this.setState({carNum2:e.target.value});                    
                }.bind(this)}></input><br></br>
            <input type="button" value="Sign up" onClick={function(){
            alert('회원가입이 완료됐습니다.');
            }}></input>
        </div>
      );
    }
  }

  export default SignUpContent;