import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Reg extends Component{
  render(){
    return (
      <div>
       <header>
          <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
          <h1>注册</h1>
          </header>
          <div style={{"height":"1rem"}}></div>
          <mark className="formMark">这里放电话做什么，请联系400-8200-5385</mark>
          <ul className="formarea">
          <li>
            <label className="lit">账号：</label>
            <input type="tel" placeholder="手机号码" className="textbox"/>
          </li>
          <li>
            <label className="lit">密码：</label>
            <input type="password" placeholder="设置密码" className="textbox"/>
          </li>
          <li>
            <label className="lit">确认密码：</label>
            <input type="password" placeholder="确认密码" className="textbox"/>
          </li>
          <li>
            <label className="lit">所在城市：</label>
            <select>
            <optgroup label="山东省">
              <option>德州市</option>
            </optgroup>
            </select>
          </li>
          <li>
            <label className="lit">餐馆名称：</label>
            <input type="text" placeholder="餐馆名称" className="textbox"/>
          </li>
          <li>
            <label className="lit">收货人：</label>
            <input type="text" placeholder="收件人真实姓名" className="textbox"/>
          </li>
          <li>
            <label className="lit">联系电话：</label>
            <input type="tel" placeholder="联系电话" className="textbox"/>
          </li>
          <li>
            <label className="lit">收货地址：</label>
            <input type="text" placeholder="区-街道-小区-门牌号" className="textbox"/>
          </li>
          <li className="liLink">
            <a href="article.html" className="fl">《用户协议》</a>
            <Link to={{pathname:'/login'}} className="fr">已有账号，登陆</Link>
           
          </li>
          <li>
            <input type="button" value="立即注册"/>
          </li>
          </ul>
          <div style={{"height":"1.2rem"}}></div>
      </div>
    )
  }
}
export default Reg;