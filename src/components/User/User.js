import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
class User extends Component{
    render(){
        return (
            <div className="car">
                <header>
                <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                <h1>个人中心</h1>
                <Link to='/userset' className="iconfont setIcon">&#42;</Link>
                </header>
                <div style={{"height":"1rem"}}></div>
                <div className="userInfor">
                <a className="userIcon"><img src="images/icon/DefaultAvatar.jpg"/></a>
                <h2>{this.props.userdata.username}</h2>
                </div>
                <ul className="userList">
                <li>
                    <Link to={{pathname:'/order'}} className="orderListIcon">我的订单</Link>
                </li>
                <li>
                    <Link to={{pathname:'/favorite'}} className="collectionIcon">常购清单</Link>
                </li>
                <li>
                    <Link to={{pathname:'/userinfo'}} className="profileIcon">个人资料</Link>
                </li>
                </ul>
            </div>
        )
    }
}
const initMapStateToProps=state=>({
    userdata:state.user.data
  })
  const initMatDispathToProps=dispatch=>({
   
  })
  export default connect(
    initMapStateToProps,
    initMatDispathToProps
  )(User);