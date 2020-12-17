import React, { Component } from 'react';

class ReadCustomer extends Component {
    render() {
      return (
          <article>
              <h2>{this.props.title}</h2>
              안녕하세요. {this.props.ID}님!
          </article>
      );
    }
  }

  export default ReadCustomer;