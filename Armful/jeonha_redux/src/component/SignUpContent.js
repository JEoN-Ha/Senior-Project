import React, { Component } from 'react';
import store from '../store';
import "./Component.css";

class SignUpContent extends Component {
    state = {
        ID:null,PW:null,PW_check:null,
        name:null,phoneNum:null,carNum1:null,carNum2:null,
        PW_state:store.getState().PW_state
    }
    constructor(props){
        super(props);
        store.subscribe(function () {
            this.setState({PW_state:store.getState().PW_state});           
        }.bind(this));
    }
    render() {
    const btnStyle = {
        color: "white",
        background: "#815854",
        margin: "10px",
        border: "1px solid #815854",
        borderRadius: ".25rem",
        fontSize: "1rem",
        lineHeight: 1.5,
        width: "230px"
        }
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
            <input type="text" name="PW_check" placeholder="비밀번호를 한번 더 입력해주세요."
                size="30"
                PW_check={this.state.PW_check}
                onChange={function (e) {
                    this.setState({PW_check:e.target.value});                    
                }.bind(this)}></input><br></br>
            <input style={btnStyle}
                type="button" value="확인" onClick={function () {
                this.props.onClickCheck(this.state.PW,this.state.PW_check)                     
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
            <input style={btnStyle}
                type="button" value="Sign up" onClick={function(){
                this.props.onClickSignUp(this.state.name,this.state.ID,
                    this.state.PW_state,this.state.carNum1)
                }.bind(this)}></input>
        </div>
      );
    }
  }

  export default SignUpContent;