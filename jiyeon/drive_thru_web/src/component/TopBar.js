import React, { Component } from 'react';
import './Component.css'

class TopBar extends Component {
    state = {
        TopBar : [ 'MENU', '장바구니', 'MY PAGE', 'EVENT']
    }

    render() {
        {   
      return (
        <div className="TopBarRoot">
            <text
                className="TopBarItem"
                onClick={function (e) {
                    e.preventDefault();
                    this.props.onClickMenu(e.target.innerText);                   
                }.bind(this)}
            >{this.state.TopBar[0]}</text>
            <text
                className="TopBarItem"
                onClick={function (e) {
                    e.preventDefault();
                    this.props.onClickBasket(e.target.innerText);                    
                }.bind(this)}
            >{this.state.TopBar[1]}</text>
            <text
                className="TopBarItem"
                onClick={function (e) {
                    e.preventDefault();
                    this.props.onClickMyPage(e.target.innerText);                    
                }.bind(this)}
            >{this.state.TopBar[2]}</text>
            <text
                className="TopBarItem"
                onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangePage(e.target.innerText);                    
                }.bind(this)}
            >{this.state.TopBar[3]}</text>
        </div>
         );
    }
  }
}
export default TopBar;