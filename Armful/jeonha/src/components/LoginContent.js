import React, { Component } from 'react';

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

                <p><input type="text" name="ID" placeholder="ID"></input></p>
                <p><input type="text" name="PW" placeholder="Password"></input><input type="submit"></input></p>
              </form>
          </article>
      );
    }
  }

  export default LoginContent;