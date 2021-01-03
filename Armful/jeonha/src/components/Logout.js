import React, { Component } from 'react';

class Logout extends Component {
    render() {
      const LoginStyle = {
        position: 'fixed',
        top: 90,
        right: 10
      }

      return (
      <div style={LoginStyle}>
        <input type="button" value="Logout" onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode('logout');                
          }.bind(this)}></input>
      </div>
      );
    }
  }

export default Logout;