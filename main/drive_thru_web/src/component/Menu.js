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
          // 정상 작동
          console.log('Success!');
        } else if (res.status === 400) {
          // 실패시
          console.log('Failed!');
        }
        return res.json();
      })
      .then(data => {
        const allMenuData = data.menu; // 모든 음식 메뉴 정보: 리스트 안에 객체 형태 [{}, {}, {}, ...]
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
        // this.state.menuData = allMenuData;  // 모든 음식 메뉴 데이터를 state에 저장 CHECK
        // console.log(allMenuData);  CHECK
        // 확인을 위한 console.log
        // console.log(allMenuData, getMenuIsError, whatIsError);
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
        {/* DB로부터 메뉴 가져오기 */}
        {/* {this.getMenuData()} */}
        {/* menu 여러개 그리기 */}
        {mapToComponent(this.state.menuData)}
      </div>
    )


  }
}
export default Menu;