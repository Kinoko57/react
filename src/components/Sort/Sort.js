import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Sort extends Component{
    render(){
        return (
            <div>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>动态分类名称</h1>
                    <Link to={{pathname:'/search'}} className="rt_searchIcon">&#37;</Link>
                    </header>
                    <div style={{"height":"1rem"}}></div>
                    <aside className="class_tree">
                    <ul>
                    <li className="current_style">
                    <a>
                        <img src="images/upload/menu_bg_01.png"/>
                        <strong>蔬菜水果</strong>
                    </a>
                    </li>
                    <li>
                    <a>
                        <img src="images/upload/menu_bg_06.png"/>
                        <strong>禽蛋肉类</strong>
                    </a>
                    </li>
                    <li>
                    <a>
                        <img src="images/upload/menu_bg_10.png"/>
                        <strong>水产火锅</strong>
                    </a>
                    </li>
                    <li>
                    <a>
                        <img src="images/upload/menu_bg_14.png"/>
                        <strong>熟食豆品</strong>
                    </a>
                    </li>
                    <li>
                    <a>
                        <img src="images/upload/menu_bg_03.png"/>
                        <strong>米面粮油</strong>
                    </a>
                    </li>
                    <li>
                    <a>
                        <img src="images/upload/menu_bg_07.png"/>
                        <strong>调料干货</strong>
                    </a>
                    </li>
                    <li>
                    <a>
                        <img src="images/upload/menu_bg_11.png"/>
                        <strong>餐厨用品</strong>
                    </a>
                    </li>
                    <li>
                    <a>
                        <img src="images/upload/menu_bg_15.png"/>
                        <strong>常购品</strong>
                    </a>
                    </li>
                    </ul>
                    </aside>
                    <ul className="category_cont">
                    <li>
                        <Link to={{pathname:'/product'}}>全部</Link>
                    </li>
                    <li>
                    <Link to={{pathname:'/product'}}>肉质根类菜</Link>
                    </li>
                    <li>
                    <Link to={{pathname:'/product'}}>块根类菜</Link>
                    </li>
                    <li>
                    <Link to={{pathname:'/product'}}>地下茎类</Link>
                    </li>
                    <li>
                    <Link to={{pathname:'/product'}}>普通叶菜类</Link>
                    </li>
                    <li>
                    <Link to={{pathname:'/product'}}>结球叶莱类</Link>
                    </li>
                    <li>
                    <Link to={{pathname:'/product'}}>辛番叶菜类</Link>
                    </li>
                    <li>
                    <Link to={{pathname:'/product'}}>鳞茎菜类</Link>
                    </li>
                    <li>
                    <Link to={{pathname:'/product'}}>茄果类</Link>
                    </li>
                    </ul>
                    <div style={{"height":"1.2rem"}}></div>
            </div>
        )
    }
}
export default Sort;