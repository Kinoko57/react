import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import asyncUser from '../../store/actions/asynUser';
class Login extends Component{
  render(){
    return (
      <div>
          <section className="formLogo">
            <h2>&#35;</h2>
          </section>
          <ul className="formarea">
            <li>
              <label className="lit">账号：</label>
              <input type="text" placeholder="手机号码" name="username" value={this.state.username} onChange={this.changeipt.bind(this)} className="textbox"/>
            </li>
            <li>
              <label className="lit">密码：</label>
              <input type="password" placeholder="登陆密码" name="password" value={this.state.password} onChange={this.changeipt.bind(this)} className="textbox"/>
            </li>
            <li className="liLink lg_liLink">
              <span><label><input type="checkbox"/>记住密码</label></span>
              <span>
                <Link to={{pathname:'/reg'}}>新用户注册</Link>
              </span>
              <span><a href="find_pwd.html">忘记密码?</a></span>
            </li>
            <li>
              <input type="button" value="立即登陆" onClick={this.props.login.bind(this,this.state.username,this.state.password,this.props.history)}/>
            </li>
          </ul>
          <div style={{"height":"1.2rem"}}></div>
      </div>
    )
  }
  state={
    username:'',
    password:'',
    auth:""
  };
  changeipt(ev){
    this.setState({
      [ev.target.name]:ev.target.value
    })
  }
  // login(){
  //   fetch(
  //     // `/data/user.json?username=${this.state.username}&password=${this.state.password}`
  //     `/data/user.json`
  //   ).then(
  //     res=>res.json()
  //   ).then(
  //     data=>{
  //       // console.log(data.data.username==this.state.username)
  //       // console.log(data.data.password==this.state.password)
  //       if (data.auth){
  //           this.props.history.push({pathname:'/user'});
  //       } else {
  //         this.props.history.push({pathname:'/login'})
  //       }
  //     }
  //   )

 }
  const initMapStateToProps=state=>({
    
  })
  const initMatDispathToProps=dispatch=>({
    login:(username,password,history)=>dispatch(asyncUser({
      url:'/data/user.json',
      username:username,
      password:password
    })).then(
      (auth)=>auth ? history.push({pathname:'/user'}):
     history.push({pathname:'/login'})
    )
  })
  export default connect(
    initMapStateToProps,
    initMatDispathToProps
  )(Login);