import React, { Component } from 'react';
import "./Component.css";

class LoginContent extends Component {
    render() {
      return (
          <article>
              <h2>Login</h2>
              <form action="/login_process" method="post"
                onSubmit={function (e) {
                  e.preventDefault();
                  this.props.onSubmit(
                    e.target.ID.value,
                    e.target.PW.value
                  );
                  alert('로그인이 완료됐습니다.');
                }.bind(this)}>
                <view style={{flex: 1, flexDirection: 'low'}}>
                  <view style={{flex: 1, flexDirection: 'column'}}>
                    <p><input style={{flex: 1}} type="text" name="ID" placeholder="ID"></input></p>
                    <p><input style={{flex: 1}} type="text" name="PW" placeholder="Password"></input></p>
                  </view>
                  <button style={{flex: 1}} type="submit">Login</button>
                </view>
                
              </form>
          </article>
      );
    }
  }

  export default LoginContent;