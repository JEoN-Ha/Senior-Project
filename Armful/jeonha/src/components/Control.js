import React, { Component } from 'react';

class Control extends Component {
    render() {
      return (
        <ul>
            {/* <li><a href="/login" onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode('login');                
            }.bind(this)}>login</a></li>
            <li><a href="/update" onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode('update');                
            }.bind(this)}>update</a></li> */}
            <li><input type="button" value="logout" onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode('logout');                
            }.bind(this)}></input></li>
      </ul>
      );
    }
  }

export default Control;