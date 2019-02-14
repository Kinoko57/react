import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Hometop extends Component{
    render(){
        return (
            <div>
                <ul className="categoryLiIcon">
                    <li>
                         <Link to={{pathname:'/sort'}}>
                            <img src="/images/upload/menu_bg_01.png"/>
                            <em>蔬菜水果</em>
                       </Link>
                    </li>
                    <li>
                       <Link to={{pathname:'/sort'}}>
                            <img src="/images/upload/menu_bg_06.png"/>
                            <em>禽蛋肉类</em>
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/sort'}}>
                            <img src="/images/upload/menu_bg_10.png"/>
                            <em>水产火锅</em>
                        </Link>
                    </li>
                    <li>
                    <Link to={{pathname:'/sort'}}>
                            <img src="/images/upload/menu_bg_14.png"/>
                            <em>熟食豆制</em>
                        </Link>
                    </li>
                    <li>
                     <Link to={{pathname:'/sort'}}>
                            <img src="/images/upload/menu_bg_03.png"/>
                            <em>米面粮油</em>
                         </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/sort'}}>
                            <img src="/images/upload/menu_bg_07.png"/>
                            <em>调料干货</em>
                        </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/sort'}}>
                            <img src="/images/upload/menu_bg_11.png"/>
                            <em>餐厨用品</em>
                         </Link>
                    </li>
                    <li>
                        <Link to={{pathname:'/sort'}}>
                            <img src="/images/upload/menu_bg_15.png"/>
                            <em>常购品</em>
                        </Link>
                    </li>
                    </ul>
            </div>
        )
    }
}
export default Hometop;