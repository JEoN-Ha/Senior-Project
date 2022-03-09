import React, { Component } from 'react';
import store from '../store';

class Logout extends Component {
    state = {
        ID:store.getState().ID,
        PW:store.getState().PW
    }
    
    render() {
      const LoginStyle = {
        position: 'fixed',
        top: 90,
        right: 10
      }

      return (
      <div style={LoginStyle}>
        <input type="button" value="LOGOUT" onClick={function () {
            this.props.onClick()
          }.bind(this)}></input>
      </div>
      );
    }
  }

export default Logout;