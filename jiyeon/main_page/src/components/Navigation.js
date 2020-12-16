import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return( <div className ="nav">

        <Link to = "/">MuinBurger</Link>
        <Link to ="/login">Login</Link>
        <Link to = "/logout">Logout</Link>
        </div>
    );

}

export default Navigation;