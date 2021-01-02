import React, { Component } from 'react';

class TopBar extends Component {
    state = {
        TopBar : [ 'MENU', '장바구니', 'Coupon', 'Event']
    }
    render() {
        {
            const standardPositionLeft = 30;
            
            const TopBarStyle = {
              position: 'fixed',
              top: 120,
              left: 30,
              minWidth:10
            }

            const title2Style = {
                position: 'fixed',
                top: 120,
                left: standardPositionLeft + 250
            }

            const title3Style = {
                position: 'fixed',
                top: 120,
                left: standardPositionLeft + 450
            }

            const title4Style = {
                position: 'fixed',
                top: 120,
                left: standardPositionLeft + 650
            }

        
      return (
        <div style = {TopBarStyle}>
            <text
                onClick={function (e) {
                    e.preventDefault();
                    this.props.onClick(e.target.innerText);                   
                }.bind(this)}
            >{this.state.TopBar[0]}</text>
            <text 
                style={title2Style}
                onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangePage(e.target.innerText);                    
                }.bind(this)}
            >{this.state.TopBar[1]}</text>
            <text 
                style={title3Style}
                onClick={function (e) {
                    e.preventDefault();
                    this.props.onChangePage(e.target.innerText);                    
                }.bind(this)}
            >{this.state.TopBar[2]}</text>
            <text 
                style={title4Style}
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