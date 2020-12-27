import React, { Component } from 'react';

class Menu extends Component {
    
    render() {
        const menuStyle = {
            position: 'fixed',
            top: 200,
            left: 30
          }
      return (
        <div style={menuStyle}>
            메뉴 없어! 돌아가!
        </div>
      )
  }
}
export default Menu;