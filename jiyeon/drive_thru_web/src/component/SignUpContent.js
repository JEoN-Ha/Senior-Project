import React, { Component } from 'react';
import store from '../store';
import "./Component.css";

const jeonhaUrl = 'https://reusablecup-apim.azure-api.net'

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

    componentWillUnmount() {
        console.log('componentWillUnmount');
      }
      
    render() {
    
    const bodySignUp = JSON.stringify({
        userWebId: this.state.ID,
        userName: this.state.name,
        pw: this.state.PW,
        phoneNum: this.state.phoneNum,
        carId: this.state.carNum1
    });
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
            <input 
                type="button" value="Sign up" onClick={function(){
                this.props.onClickSignUp(this.state.name,this.state.ID,
                this.state.PW_state,this.state.carNum1)
                fetch(jeonhaUrl + '/signUp', {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: bodySignUp
                })
                    .then(res => {
                        if (res.status == 200) {
                            // 정상 작동
                            console.log('Success!');
                        } else if (res.status == 400) {
                            // 실패시
                            console.log('Failed!');
                        }
                        return res.json();
                    })
                    .then(data => {
                        // 아이디 중복, 패스워드 중복, 그 외 에러
                        const overlapId = data.id;
                        const overlapPw = data.pw;
                        const errorDB = data.db;
                
                        // 확인을 위한 console.log
                        // console.log(overlapId, overlapPw, errorDB);
                    })
                }.bind(this)}></input>
        </div>
      );
    }
  }

  export default SignUpContent;