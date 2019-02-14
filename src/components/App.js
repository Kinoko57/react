import React,{Component} from 'react';
import Header from "../common/Header/Header";
import Home from "./Home/Home";
import Car from "./Car/Car";
import Sort from './Sort/Sort';
import User from './User/User';
import Login from './Login/Login';
import Reg from './Reg/Reg';
import Product from './Product/Product';
import ProductInfo from './ProductInfo/ProductInfo';
import Search from './Search/Search';
import Order from './Order/Order';
import Confirm from './Confirm/Confirm';
import Favorite from './Favorite/Favorite';
import UserInfo from './UserInfo/UserInfo';
import Footer from "../common/Footer/Footer";
import UserSet from '../components/UserSet/UserSet';
import ReturnState from '../components/ReturnState/ReturnState'
import Error from '../common/Error/Error';
import Loading from '../common/loading/components/loading';
import {Route,Redirect,Switch} from 'react-router-dom';
import Auth from "../guard/Auth";
import {connect} from 'react-redux';
import * as types from '../store/types'
// import pubsub from 'pubsub-js';
class App extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         bHeader:true,
    //         bFooter:true,
    //         bLoading:false
    //     };
    //     //订阅loading请求
    //     // pubsub.subscribe('view_loading',(mess,b1)=>{
    //     //     this.setState({bLoading:b1})
    //     // })
    // }
    componentWillReceiveProps(nextProps){
        let path=nextProps.location.pathname;
        this.watchRouter(path)
    }
    componentDidMount(){
        let path=this.props.location.pathname;
        this.watchRouter(path)
    }
    watchRouter(path){
        //监听路由
        let {viewHeader,viewFooter}=this.props;
        if(/home/.test(path)){
        //    this.setState({
        //        bHeader:true,
        //        bFooter:true,
        //    })
            viewHeader(true);
            viewFooter(true)

        }
        if(/sort|user|login|reg|order/.test(path)){
            // this.setState({
            //     bHeader:false,
            //     bFooter:true,
            // })
            viewHeader(false);
            viewFooter(true)
         }
         if(/confirm|favorite|product|productinfo|search|userinfo|car|returnstate|userset/.test(path)){
            // this.setState({
            //     bHeader:false,
            //     bFooter:false,
            // })
            viewHeader(false);
            viewFooter(false)
         }
    }
    render(){
        let {bHeader,bFooter,bLoading}=this.props;
        return(
            <>
                {/* {this.state.bHeader && <Header/>} */}
                {bHeader && <Header/>}
                    <Switch>
                    <Route path="/home" component={Home}/>>
                    <Route path="/car" component={Car}/>
                    <Route path="/returnstate" component={ReturnState}/>
                    <Route path="/sort" component={Sort}/>
                    {/* <Route path="/user" component={User}/> */}
                    <Auth path="/user" component={User}/>
                    <Route path="/userset" component={UserSet}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/productinfo/:id" component={ProductInfo}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/order" component={Order}/>
                    <Route path="/confirm" component={Confirm}/>
                    <Route path="/favorite" component={Favorite}/>
                    <Route path="/userinfo" component={UserInfo}/>
                    <Route path="/userinfo" component={UserInfo}/>
                    <Redirect exact from="/" to="/home"/>
                    <Route component={Error}/>
                    </Switch>
                {/* {this.state.bLoading &&  <Loading/>}
                {this.state.bFooter &&  <Footer/>} */}
                {bLoading &&  <Loading/>}
                {bFooter &&  <Footer/>}
                <Footer></Footer>
            </>
        )
    }
}
const initMapStateToProps=state=>({
    bHeader:state.bHeader,
    bFooter:state.bFooter,
    bLoading:state.bLoading
})
const initMatDispathToProps=dispatch=>({
   viewHeader:(b1)=>dispatch({type:types.VIEW_BHEADER,payload:b1}),
   viewFooter:(b1)=>dispatch({type:types.VIEW_BFOOTER,payload:b1})
})
export default connect(
    initMapStateToProps,
    initMatDispathToProps
)(App);

