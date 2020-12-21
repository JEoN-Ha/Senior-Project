import React, { Component } from 'react';

class MenuInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      count:this.props.menu.count
    }
    this.onIncrease = this.onIncrease.bind(this);
  };

  onIncrease = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  onDecrease = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

    render() {
      return (
          <div>
            <span>{this.props.menu.nameKorea}</span><br/>
            <span>{this.props.menu.nameEnglish}</span><br/>
            <span>{this.props.menu.price}</span><br/>
            <input type="checkbox"></input>    {/*체크 여부 확인은 event.target.ch*/}
            <span>{this.state.count} </span>
            <button onClick={this.onDecrease}>-1</button>&nbsp;
            <button onClick={this.onIncrease}>+1</button>
            <hr/>
          </div>
      );
    }
  }

  export default MenuInfo;