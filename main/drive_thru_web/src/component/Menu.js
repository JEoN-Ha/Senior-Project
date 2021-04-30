import React, { Component } from 'react';
import MenuInfo from '../containers/MenuInfo';
import store from '../store';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuData: [],
      isLoading: false,
      jeonhaUrl:store.getState().jeonhaUrl
    };
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  componentDidMount() {
    this.getMenuData();
  };



  getMenuData = () => {
    fetch(this.state.jeonhaUrl + '/getMenuData',{
      credentials: 'include'
    })
      .then(res => {
        if (res.status === 200) {
          console.log('Success!');
        } else if (res.status === 400) {
          console.log('Failed!');
        }
        return res.json();
      })
      .then(data => {
        const allMenuData = data.menu;
        const getMenuIsError = data.isError;
        const whatIsError = data.explainError;
        let menuAllData = []
        for (let i = 0; i < allMenuData.length; i++) {
          menuAllData.push({
            id: allMenuData[i].MenuNo,
            nameKorea: allMenuData[i].FoodNameKor,
            nameEnglish: allMenuData[i].FoodNameEng,
            price: allMenuData[i].Price,
          })
        }
        this.setState({
          menuData: menuAllData,
          isLoading: true
        })
        
      });
  }
  render() {

    const mapToComponent = data => {
      return data.map((menu, i) => {
        return (<MenuInfo menu={menu} key={i}
          getCount={function (_count, _id) {
            let i = 0;
            let data = Array.from(this.state.menuData);
            while (i < data.length) {
              if (data[i].id === _id) {
                data[i].count = _count;
                break;
              }
              i = i + 1;
            }
            this.setState({
              menuData: data
            });
          }.bind(this)}
        ></MenuInfo>);
      });
    };

    return (
      <div>
        {mapToComponent(this.state.menuData)}
      </div>
    )


  }
}
export default Menu;