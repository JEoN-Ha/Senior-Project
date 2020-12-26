import React, {Component} from 'react'; 
import './App.css';
import Subject from './component/Subject';

class App extends Component {
  render() {
    return (
      <div>
        {/* JEoN-Ha 제목 */}
        <Subject></Subject>

        {/* 로그인 폼 */}
        {this.getLogin()}
      </div>
    )
  }
}

export default App;
