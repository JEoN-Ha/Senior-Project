import React, {Component} from 'react';
import PaymentInfo from '../containers/PaymentInfo';
import "./Component.css";
import store from '../store';

export default class PaymentHistory extends Component {
    state = {
        customer_id:store.getState().customer_id,
        jeonhaUrl:store.getState().jeonhaUrl,
        orderHistory : [{orderNo:null, menuNo:null, nameKorea:null, price:null, count:null}],
        menuData: [{id:null, nameKorea:null, nameEnglish:null, pirce:null}]
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidMount() {
        const bodyGetOrder = JSON.stringify({
            userWebId: this.state.customer_id
        });
        this.getMenuData();
        this.getOrderHistory(bodyGetOrder);
    };

    handleRadio(event) {
        let obj = {} // erase other radios
        obj[event.target.value] = event.target.checked // true —- target.checked 속성을 이용해서 라디오 버튼이 선택되었는지 여부를 확인한다.
        this.setState({radioGroup: obj})
    }

    getMenuData = () => {
        fetch(this.state.jeonhaUrl + '/getMenuData')
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
            // 확인을 위한 console.log
            // console.log(allMenuData, getMenuIsError, whatIsError);
        });
    }

    getOrderHistory = (_body) => {
        fetch(this.state.jeonhaUrl + '/getOrder', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: _body
        }).then(res => {
            if (res.status === 200) {
                // 정상 작동
                console.log('Success!');
            } else if (res.status === 400) {
                // 실패시
                console.log('Failed!');
            }
            return res.json();
        }).then(data => {
            const isError = data.isError;
            const orderHistory = data.orderAllData;
            //this.state.paymentData = orderHistory;
            let _orderHistory = []
            console.log(orderHistory)
            for (let i = 0; i < orderHistory.length; i++) {
                for(let j=0; j < orderHistory[i].length; j++){
                    for(let k=0; k<this.state.menuData.length; k++){
                        if(orderHistory[i][j].OrderToMenu_MenuNo == this.state.menuData[k].id)
                        {
                            _orderHistory.push({
                                orderNo: orderHistory[i][j].OrderToMenu_OrderNo,
                                menuNo: orderHistory[i][j].OrderToMenu_MenuNo,
                                nameKorea: this.state.menuData[k].nameKorea,
                                price: this.state.menuData[k].price,
                                count: orderHistory[i][j].MenuCount
                            })
                        }
                    }
                }
            }
            this.setState({
            orderHistory: _orderHistory,
            isLoading: true
            })
            console.log(this.state.orderHistory)
            // 확인을 위한 console.log
            // console.log(isError);
            // console.log(orderHistory);
        }) 
    }

    render() {
        const mapToComponent = data => {
            return data.map((payment, i) => {
                return (<PaymentInfo payment={payment} key={i}
                  getCount = {function(_count,_id){
                    let i = 0;
                    let data = Array.from(this.state.orderHistory);
                    while(i < data.length){
                        if(data[i].id === _id){
                            data[i].count = _count;
                            break;
                        }
                        i = i + 1;
                    }
                    this.setState({
                        orderHistory:data
                    });
                  }.bind(this)}
                  ></PaymentInfo>);
            });
        };
        return (
            <div>
               <h2>결제 내역</h2>
                {mapToComponent(this.state.orderHistory)}
            </div>
        )
    }
}