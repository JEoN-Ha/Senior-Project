import React, { Component } from 'react';
import "./Component.css";

class Subject extends Component {   //Subject라는 태그를 생성
    render() {
      const titleStyle = {
        Position : 'fixed',
        Top : 0
      }
      return (
        <header style={titleStyle}>
          <h1 className="MainTitle">{this.props.title}</h1>
        </header>
      );
    }
  }

  export default Subject;