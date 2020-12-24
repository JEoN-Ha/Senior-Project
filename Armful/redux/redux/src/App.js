import React, {Component} from 'react';
import AddNumberRoot from "./Component/AddNumberRoot";
import DisplayNumberRoot from "./Component/DisplayNumberRoot";
import './App.css';

class App extends Component {
  state = {number:0}
  render(){
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot onClick={function(size){
          this.setState({number:this.state.number + size});
        }.bind(this)}></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
      </div>
    );
  }
}

export default App;
