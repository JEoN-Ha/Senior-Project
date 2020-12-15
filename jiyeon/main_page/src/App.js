import React from 'react';
import {HashRouter,Route} from "react-router-dom";
import Main from "./routes/Menu";
import About from "./routes/About";
import Menu from "./routes/Main";
import Logout from "./routes/Logout";
import Navigation from "./components/Navigation";


function App(){

  return (
    <HashRouter>
      <Navigation/>
        <Route path ="/" exact = {true} component = {Main} />
        <Route path ="/login" component = {About}/>
        <Route path = "/logout" component = {Logout} />
        <Route path = "/menu" component = {Menu} />
    </HashRouter>
  );
}
export default App;