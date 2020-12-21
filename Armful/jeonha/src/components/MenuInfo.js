import React, { Component } from 'react';

class MenuInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:this.props.menu.id,
      count:this.props.menu.count,
      order:this.props.menu.order
    }
    this.onIncrease = this.onIncrease.bind(this);
  };

  onIncrease = () => {
    const countResult = this.state.count + 1;
    this.setState({
      count: countResult
    });
    this.props.getCount(countResult,this.state.id);
  };
  onDecrease = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  // handleChange =(event) => {
  //   this.setState({order: event.target.checked});
  // };

    render() {
      return (
          <div>
            <span>{this.props.menu.nameKorea}</span><br/>
            <span>{this.props.menu.nameEnglish}</span><br/>
            <span>{this.props.menu.price}</span><br/>
            <input type="checkbox"
              onChange={function (e) {
                e.preventDefault();
                this.props.onChange(
                  e.target.checked
                );                
              }.bind(this)}
              ></input>    {/*체크 여부 확인은 event.target.ch*/}
            <span>{this.state.count} </span>
            <button onClick={this.onDecrease}>-1</button>&nbsp;
            <button onClick={this.onIncrease}>+1</button>
            <hr/>
          </div>
      );
    }
  }

  export default MenuInfo;