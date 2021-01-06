import React, { Component } from 'react';
import styled from 'styled-components';
import "./Component.css";

class LoginContent extends Component {
    state = {
        ID:null,
        PW:null
    }
    render() {
        // const LoginStyle = {
        //   position: 'fixed',
        //   top: 90,
        //   right: 30,
        //   minWidth: 50
        // }
      return (
        <article>
            <form>
                Login &nbsp;
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
            </form>
        </article>
      );
    }
  }

  export default LoginContent;