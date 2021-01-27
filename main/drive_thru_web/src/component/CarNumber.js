import React, { Component} from 'react';
import "./Component.css";

class CarNumber extends Component {
    state = {
        customer_id:null,
        PW:null
    }

    componentWillUnmount() {
      console.log('componentWillUnmount');
    }
    
    render() {
      const btnStyle = {
        color: "white",
        background: "#815854",
        margin: "10px",
        border: "1px solid #815854",
        borderRadius: ".25rem",
        fontSize: "1rem",
        lineHeight: 1.5,
        width: "230px"
      }
      return (
          <div>
              차량번호<input type="text" name="carNumber" placeholder="차량번호를 입력하세요."
                        onChange={function (e) {
                            this.setState({carNumber:e.target.value});
                            // this.props.onChangeCarNumber(this.state.carNumber)                          
                        }.bind(this)}></input>
          </div>
      );
    }
  }

  export default CarNumber;