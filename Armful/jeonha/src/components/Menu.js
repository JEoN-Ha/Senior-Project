import React, { Component } from 'react';
import MenuInfo from "./MenuInfo";

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuData : [        // menu 불러오기
                {
                    nameKorea : '아메리카노',
                    nameEnglish : 'Americano',
                    price : '4,400',
                    count : 0,
                    order : false
                },
                {
                    nameKorea : '돌체 블랙 밀크티',
                    nameEnglish : 'Dolce Black Milk Tea',
                    price : '5,800',
                    count : 0,
                    order : false
                }
            ]
        };
    }

    getCount = (_count) => {
        this.setState({
            count: _count
        })
        debugger
    }
    render() {
      const mapToComponent = data => {
          return data.map((menu, i) => {
              return (<MenuInfo menu={menu} key={i}
                onChange={function (_checked) {
                this.menu.order = _checked;                    
                }}
                getCount = {this.getCount}
                ></MenuInfo>);
          });
      };
      const menuStyle = {
        position: 'fixed',
        top: 200,
        left: 30
      }
      return (
        <div style={menuStyle}>
            {mapToComponent(this.state.menuData)}
        </div>  
      );
    }
  }

  export default Menu;