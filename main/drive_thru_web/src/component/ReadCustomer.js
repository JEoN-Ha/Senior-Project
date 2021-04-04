import React, { Component } from 'react';
import store from '../store';

class ReadCustomer extends Component {
  state = {
    mode_content:store.getState().mode_content
  }
  constructor(props){
      super(props);
      store.subscribe(function () {
          this.setState({mode_content:store.getState().mode_content});           
      }.bind(this));
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  
    render() {

      return (
          <article>
              안녕하세요. {this.props.customer_id}님! &nbsp;
              <input type="button" value="LOGOUT" onClick={function () {
                this.props.onClick(this.state.mode_content)
              }.bind(this)}></input>
          </article>
      );
    }
  }

  export default ReadCustomer;