import React,{Component} from 'react';
class UserInfo extends Component{
    render(){
        return (
            <div>
               <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>个人资料</h1>
                    </header>
                    <div style={{"height":"1rem"}}></div>
                    <ul className="inforList">
                    <li>
                    <a href="change_name.html" className="isNext">
                    <span>用户昵称</span>
                    <span>未设置</span>
                    </a>
                    </li>
                    <li>
                    <a href="change_tel.html" className="isNext">
                    <span>手机号码</span>
                    <span>18309275673</span>
                    </a>
                    </li>
                    </ul>
            </div>
        )
    }
}
export default UserInfo;