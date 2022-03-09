import React, { Component} from 'react';
import "./Component.css";
import store from '../store';

class LoginContent extends Component {
    state = {
        customer_id:null,
        PW:null,
        jeonhaUrl:store.getState().jeonhaUrl,
        ID_Success:store.getState().ID_Success,
        PW_Success:store.getState().PW_Success
    }

    constructor(props){
      super(props);
      store.subscribe(function () {
          this.setState({ID_Success:store.getState().ID_Success,
            PW_Success:store.getState().PW_Success});           
      }.bind(this));
  }

    componentWillUnmount() {
      console.log('componentWillUnmount');
    }

    getFetch(_body){
      fetch(this.state.jeonhaUrl + '/signIn', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: _body
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
        
        this.setState({
          ID_Success : idSuccess,
          PW_Success : pwSuccess
        })

        this.props.onClick(this.state.customer_id,this.state.PW,this.state.ID_Success,this.state.PW_Success);
        // 확인을 위한 console.log
        console.log(idSuccess, pwSuccess);
        console.log(this.state.ID_Success, this.state.PW_Success);
      });
    }
    
    render() {
      console.log(this.state.ID_Success);
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
              this.getFetch(bodySignIn);
            }.bind(this)}></input>
          </article>
      );
    }
  }

  export default LoginContent;