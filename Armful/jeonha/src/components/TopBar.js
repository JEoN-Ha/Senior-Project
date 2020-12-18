import React, { Component } from 'react';

class TopBar extends Component {
    render() {
        {
            const standardPositionLeft = 30;
            
            const TopBarStyle = {
              position: 'fixed',
              top: 120,
              left: 30
            }

            const title2Style = {
                position: 'fixed',
                top: 120,
                left: standardPositionLeft + 200
            }

            const title3Style = {
                position: 'fixed',
                top: 120,
                left: standardPositionLeft + 400
            }

            const title4Style = {
                position: 'fixed',
                top: 120,
                left: standardPositionLeft + 600
            }

        
      return (
        <div style = {TopBarStyle}>
            <text>{this.props.title1}</text>
            <text style={title2Style}>{this.props.title2}</text>
            <text style={title3Style}>{this.props.title3}</text>
            <text style={title4Style}>{this.props.title4}</text>
        </div>
         );
    }
  }
}
export default TopBar;