import React, { Component } from 'react';

class ReadCustomer extends Component {
    render() {
      const LoginStyle = {
        position: 'fixed',
        top: 90,
        right: 90
      }
      return (
          <article style={LoginStyle}>
              안녕하세요. {this.props.ID}님!
          </article>
      );
    }
  }

  export default ReadCustomer;