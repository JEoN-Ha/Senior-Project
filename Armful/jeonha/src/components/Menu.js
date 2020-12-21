import React, { Component } from 'react';
import MenuInfo from "./MenuInfo";

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuData : [        // menu 불러오기
                {
                    id : 1,
                    nameKorea : '아메리카노',
                    nameEnglish : 'Americano',
                    price : '4,400',
                    count : 0,
                    order : false
                },
                {
                    id : 2,
                    nameKorea : '돌체 블랙 밀크티',
                    nameEnglish : 'Dolce Black Milk Tea',
                    price : '5,800',
                    count : 0,
                    order : false
                }
            ]
        };
    }

    // getCount(_count,_id){
    //     let i = 0;
    //     let data = Array.from(this.state.menuData);
    //     while(i < data.length){
    //         if(data[i].id === _id){
    //             data[i] = {count:_count};
    //             debugger
    //             break;
    //         }
    //         i = i + 1;
    //     }
    //     this.setState({
    //         menuData:data
    //     });
    //     // this.setState({
    //     //     count: _count
    //     // });
    //     // debugger
    // }
    render() {
      const mapToComponent = data => {
          return data.map((menu, i) => {
              return (<MenuInfo menu={menu} key={i}
                onChange={function (_checked) {
                this.menu.order = _checked;                    
                }}
                getCount = {function(_count,_id){
                    let i = 0;
                    let data = Array.from(this.state.menuData);
                    while(i < data.length){
                        if(data[i].id === _id){
                            data[i].count = _count;
                            break;
                        }
                        i = i + 1;
                    }
                    this.setState({
                        menuData:data
                    });
                    // this.setState({
                    //     count: _count
                    // });
                    // debugger
                }.bind(this)}
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