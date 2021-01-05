import React, { Component } from 'react';

class Welcome extends Component {
    render() {
      const welcomeStyle = {
        position: 'fixed',
        top: 150,
        left: 30
      }
      return (
          <article style={welcomeStyle}>
              <h2>{this.props.title}</h2>
              {this.props.desc}
          </article>
      );
    }
  }

  export default Welcome;