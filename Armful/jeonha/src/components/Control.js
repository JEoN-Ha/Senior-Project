import React, { Component } from 'react';

class Control extends Component {
    render() {
      return (
        <div>
            {/* <li><a href="/login" onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode('login');                
            }.bind(this)}>login</a></li>
            <li><a href="/update" onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode('update');                
            }.bind(this)}>update</a></li> */}
            <input type="button" value="Logout" onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode('logout');                
            }.bind(this)}></input>
      </div>
      );
    }
  }

export default Control;