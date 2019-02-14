import React,{Component} from 'react';
import {Link} from 'react-router-dom';
// import pubsub from 'pubsub-js';
import {connect} from 'react-redux'
import asyncUser from '../../store/actions/asynUser';
import * as types from '../../store/types'
class UserSet extends Component{
    componentDidMount(){
        this.props.logout({auth:false})
    }
    render(){
        return (
            <div>
                <header>
                <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                <h1>设置</h1>
                </header>
                <div style={{"height":"1rem"}}></div>
                <ul className="inforList">
                <li><a href="change_pwd.html" className="isNext">修改密码</a></li>
                <li><a href="address.html" className="isNext">我的地址</a></li>
                <li><a href="article.html" className="isNext">关于我们</a></li>
                <li><Link to='/login' className="lastBtn">安全退出</Link></li>
                </ul>
            </div>
        )
    }
}
const initMapStateToProps=state=>({
    
})
const initMatDispathToProps=dispatch=>({
    logout:(bl)=>dispatch({type:types.CHECK_USER,payload:bl})
})
export default connect(
  initMapStateToProps,
  initMatDispathToProps
)(UserSet);