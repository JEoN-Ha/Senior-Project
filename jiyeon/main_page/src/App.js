import React from 'react';
import {HashRouter,Route} from "react-router-dom";
import Main from "./routes/Main";
import Navigation from "./components/Navigation";


function App(){

  return (
    <HashRouter>
      <Navigation/>
        <Route path ="/" exact = {true} component = {Main} />
            </HashRouter>
  );
}
export default App;