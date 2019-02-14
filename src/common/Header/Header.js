import React from 'react';
import {NavLink} from 'react-router-dom'
import { from } from 'rxjs';
const Header=(props)=>(
    <div>
     <header>
        <a href="location.html" className="location">西安市</a>
        <h1 className="logoIcon" style={{"fontSize":".85rem"}}>&#35;</h1>
        <NavLink to={{pathname:'/search'}} className="rt_searchIcon">&#37;</NavLink>
    </header>
    <div style={{"height":"1rem"}}></div>
    </div>
);
export default Header;