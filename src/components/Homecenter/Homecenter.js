import React,{Component} from 'react';
import HomeCenterHot from '../HomeCenterHot/HomeCenterHot';
import HomeCenterNew from '../HomeCenterNew/HomeCenterNew';
import HomeCenterReduce from '../HomeCenterReduce/HomeCenterReduce';
import {Route,Switch,NavLink,Redirect} from 'react-router-dom';
class Homecenter extends Component{
    render(){
        return (
            <div>
                <dl className="tab_proList">
                    <dt>
                        <NavLink to='/home/homecenterhot' activeClassName="currStyle">热销</NavLink>
                        <NavLink to='/home/homecenternew' activeClassName="currStyle">新品</NavLink>
                        <NavLink to='/home/homecentereduce' activeClassName="currStyle">打折</NavLink>
                        {/* <a className="currStyle">热销</a>
                        <a>新品</a>
                        <a>打折</a> */}
                    </dt>
                    {/* <HomeCenterHot/> */}
                    <Switch>
                        {/* <div className="router"> */}
                           <Route path='/home/homecenterhot' component={HomeCenterHot}/>
                           <Route path='/home/homecenternew' component={HomeCenterNew}/>
                           <Route path='/home/homecentereduce' component={HomeCenterReduce}/>
                           {/* <Route path="/home" component={HomeCenterHot}/> */}
                           <Redirect exact from="/home" to="/home/homecenterhot"/>
                           {/* </div> */}
                    </Switch>
                </dl>
            </div>
        )
    }
}
export default Homecenter;