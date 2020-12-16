import React from 'react';
import {HashRouter,Route} from "react-router-dom";
import About from "./routes/About";
import Main from "./routes/Main";
import Logout from "./routes/Logout";
import Navigation from "./components/Navigation";


function App(){

  return (
    <HashRouter>
      <Navigation/>
        <Route path ="/" exact = {true} component = {Main} />
        <Route path ="/login" component = {About}/>
        <Route path = "/logout" component = {Logout} />
            </HashRouter>
  );
}
export default App;