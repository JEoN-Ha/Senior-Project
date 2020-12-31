import React, { Component } from 'react';
import store from '../store';

class MenuInfo extends Component {
    state = {orderName:store.getState().orderName}
  constructor(props){
    super(props);
    store.subscribe(function () {
        this.setState({orderName:store.getState().orderName}
        );           
    }.bind(this));
  };

    render() {
      return (
          <div>
            <span onClick={function(e) {
              this.props.onClickName(e.target.innerText, this.state.orderName)
            }.bind(this)}>{this.props.menu.nameKorea}</span><br/>
            <span>{this.props.menu.nameEnglish}</span><br/>
            <span>{this.props.menu.price}</span><br/>
            <hr/>
          </div>
      );
    }
  }

  export default MenuInfo;