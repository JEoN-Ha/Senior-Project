import React, { Component } from 'react';

class ReadCustomer extends Component {
    render() {

      return (
          <article>
              안녕하세요. {this.props.ID}님!
          </article>
      );
    }
  }

  export default ReadCustomer;