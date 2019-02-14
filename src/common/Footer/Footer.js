import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';
import { from } from 'rxjs';
const Footer=(props)=>(
    <nav className="nav">
        <NavLink to={{pathname:'/home'}} className="homeIcon" activeClassName="active">首页</NavLink>
        <NavLink to={{pathname:'/sort'}} className="categoryIcon" activeClassName="active">分类</NavLink>
        <NavLink to={'/car'} className="cartIcon" activeClassName="active">购物车</NavLink>
        <NavLink to='/user' className="userIcon" activeClassName="active">我的</NavLink>
    </nav>
);
export default Footer;