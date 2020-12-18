import React, { Component } from 'react';
import "./Component.css";

class Subject extends Component {   //Subject라는 태그를 생성
    render() {
      return (
        <header>
          <h1 className="MainTitle">{this.props.title}</h1>
          {/* <hr></hr> */}
        </header>
      );
    }
  }

  export default Subject;