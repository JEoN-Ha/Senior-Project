import React, { Component } from 'react';
import store from '../store';

class Calculation extends Component {
    constructor(props){
        super(props);
        this.state = {
            calculation : 0
        }
    }
    render() {
      
      return (
        <div>
            <input type="button" value="총 금액" onClick={function () {
                store.dispatch({type:'Calculation', calculation:this.state.calculation});                
            }.bind(this)}></input>
        </div>
      );
    }
  }

  export default Calculation;