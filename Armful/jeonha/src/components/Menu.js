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
                    count : '0'
                },
                {
                    nameKorea : '돌체 블랙 밀크티',
                    nameEnglish : 'Dolce Black Milk Tea',
                    price : '5,800',
                    count : '0'
                }
            ]
        };
    }
    render() {
      const mapToComponent = data => {
          return data.map((menu, i) => {
              return (<MenuInfo menu={menu} key={i}/>);
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