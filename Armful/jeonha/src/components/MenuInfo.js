import React, { Component } from 'react';

class MenuInfo extends Component {
    render() {
      
      return (
          <div>
            <span>{this.props.menu.nameKorea}</span><br/>
            <span>{this.props.menu.nameEnglish}</span><br/>
            <span>{this.props.menu.price}</span><br/>
            <input type="checkbox"></input>    {/*체크 여부 확인은 event.target.ch*/}
            <span>{this.props.menu.count} </span>
            <button>-</button>
            <button>+</button>
            <hr/>
          </div>
      );
    }
  }

  export default MenuInfo;