import React, { Component} from 'react';
import "./Component.css";

const jeonhaUrl = 'http://localhost:4000';

class LoginContent extends Component {
    state = {
        customer_id:null,
        PW:null
    }

    componentWillUnmount() {
      console.log('componentWillUnmount');
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
      const bodySignIn = JSON.stringify({
        userWebId: this.state.customer_id,
        pw: this.state.PW,
      });
      return (
          <article className="Login">
            <text className="basicText">로그인</text>
            <input type="text" name="customer_id" placeholder="ID"
              size = "30"
              customer_id={this.state.customer_id}
              onChange={function(e){
                  this.setState({customer_id:e.target.value});
              }.bind(this)}></input>
            <input type="text" name="PW" placeholder="Password"
              size = "30"
              PW={this.state.PW}
              onChange={function(e){
                  this.setState({PW:e.target.value});
              }.bind(this)}></input>
            <input style={btnStyle} 
              type="button" value="LOGIN" onClick={function(){
              this.props.onClick(this.state.customer_id,this.state.PW);
              fetch(jeonhaUrl + '/signIn', {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: bodySignIn
              })
              .then(res => {
                if (res.status === 200) {
                    // 정상 작동
                    console.log('Success!');
                } else if (res.status === 400) {
                    // 실패시
                    console.log('Failed!');
                }
                return res.json();
              })
              .then(data => {
                // id, pw 성공여부 변수
                const idSuccess = data.id;
                const pwSuccess = data.pw;
            
                // 확인을 위한 console.log
                // console.log(idSuccess, pwSuccess);
              });
              alert('로그인이 완료됐습니다.');
            }.bind(this)}></input>
          </article>
      );
    }
  }

  export default LoginContent;