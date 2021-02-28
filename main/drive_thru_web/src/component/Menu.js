import React, { Component } from 'react';
import MenuInfo from '../containers/MenuInfo';

const jeonhaUrl = 'http://localhost:4000';

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
                count : 0
            },
            {
                id : 2,
                nameKorea : '돌체 블랙 밀크티',
                nameEnglish : 'Dolce Black Milk Tea',
                price : '5,800',
                count : 0
            }
        ]
    };
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  getMenuData(){
    fetch(jeonhaUrl + '/getMenuData')
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
        this.state.menuData = allMenuData;  // 모든 음식 메뉴 데이터를 state에 저장
        // 확인을 위한 console.log
        // console.log(allMenuData, getMenuIsError, whatIsError);
      });
  }
  
  render() {
    const mapToComponent = data => {
      return data.map((menu, i) => {
          return (<MenuInfo menu={menu} key={i}
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
            }.bind(this)}
            ></MenuInfo>);
      });
    };  
    return (
      <div>
          {/* DB로부터 메뉴 가져오기 */}
          {this.getMenuData()}
          {/* menu 여러개 그리기 */}
          {mapToComponent(this.state.menuData)} 
      </div>
    )
  }
}
export default Menu;