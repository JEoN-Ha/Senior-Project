import React, { Component } from 'react';

class ReadCustomer extends Component {
    render() {

      return (
          <article>
              안녕하세요. {this.props.customer_id}님! &nbsp;
              <input type="button" value="LOGOUT" onClick={function () {
                this.props.onClick()
              }.bind(this)}></input>
          </article>
      );
    }
  }

  export default ReadCustomer;