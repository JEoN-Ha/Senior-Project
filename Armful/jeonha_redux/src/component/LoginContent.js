import React, { Component } from 'react';
import "./Component.css";

class LoginContent extends Component {
    state = {
        ID:null,
        PW:null
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
        <div className="Login">
            <text className="basicText">로그인</text>
            <input type="text" name="ID" placeholder="ID"
              size = "30"
              ID={this.state.ID}
              onChange={function(e){
                  this.setState({ID:e.target.value});
              }.bind(this)}></input>
            <input type="text" name="PW" placeholder="Password"
              size = "30"
              PW={this.state.PW}
              onChange={function(e){
                  this.setState({PW:e.target.value});
              }.bind(this)}></input>
          <input style={btnStyle} 
            type="button" value="LOGIN" onClick={function(){
            this.props.onClick(this.state.ID,this.state.PW);
            alert('로그인이 완료됐습니다.');
        }.bind(this)}></input>
        </div>
      );
    }
  }

  export default LoginContent;