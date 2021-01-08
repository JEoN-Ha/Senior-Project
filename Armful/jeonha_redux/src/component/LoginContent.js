import React, { Component } from 'react';
import "./Component.css";

class LoginContent extends Component {
    state = {
        ID:null,
        PW:null
    }
    render() {
      return (
        <article className="Login">
          <input type="text" name="ID" placeholder="ID" 
            ID={this.state.ID}
            onChange={function(e){
                this.setState({ID:e.target.value});
            }.bind(this)}></input>
          <input type="text" name="PW" placeholder="Password" 
            PW={this.state.PW}
            onChange={function(e){
                this.setState({PW:e.target.value});
            }.bind(this)}></input>
          <input type="button" value="LOGIN" onClick={function(){
            this.props.onClick(this.state.ID,this.state.PW);
            alert('로그인이 완료됐습니다.');
        }.bind(this)}></input>
        </article>
      );
    }
  }

  export default LoginContent;