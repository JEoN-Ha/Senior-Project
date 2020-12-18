import React, { Component } from 'react';
import "./Component.css";

class LoginContent extends Component {
    render() {
        const LoginStyle = {
          position: 'fixed',
          top: 90,
          right: 30
        }
      return (
          <article style={LoginStyle}>
              <form action="/login_process" method="post"
                onSubmit={function (e) {
                  e.preventDefault();
                  this.props.onSubmit(
                    e.target.ID.value,
                    e.target.PW.value
                  );
                  alert('로그인이 완료됐습니다.');
                }.bind(this)}>
                  Login
                  <input type="text" name="ID" placeholder="ID"></input>
                  <input type="text" name="PW" placeholder="Password"></input>
                  <button type="submit">Login</button>
              </form>
          </article>
      );
    }
  }

  export default LoginContent;