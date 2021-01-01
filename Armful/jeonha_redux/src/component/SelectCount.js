import React, { Component } from 'react';
import "./Component.css";
import store from '../store';

class Basket extends Component {
  state = {orderCount:store.getState().orderCount}
  constructor(props){
  super(props);
  store.subscribe(function () {
      this.setState({orderCount:store.getState().orderCount});           
  }.bind(this));
  };

    render() {
      return (
        <div>
            <text>{this.state.orderCount}개</text>&nbsp;
            <button onClick={function(){this.props.onClickPlus()
                }.bind(this)}>+1</button>&nbsp;
            <button onClick={function(){this.props.onClickMinus()
                }.bind(this)}>-1</button>
        </div>
      );      
    }
  }

  export default Basket;