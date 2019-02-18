import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Home from '../Home/Home';
import {connect} from 'react-redux';
import asynList from '../../store/actions/asynList';
import * as types from '../../store/types';
let sTop=0;
// import pubsub from 'pubsub-js';
class HomeCenterHot extends Component{
    //非状态管理
    // state={
    //     list:[]
    // };
    // componentDidMount(){
    //     // pubsub.publish('view_loading',true)
    //     fetch(
    //         `/data/home.data`
    //     ).then(
    //         res=>res.json()
    //     ).then(
    //         data=>{
    //             setTimeout(()=>{
    //                 // pubsub.publish('view_loading',false)
    //                 this.setState({list:data})
    //             },1000)
    //         }
    //     )
    // }
    //也可以在构造器中读数据
   componentDidMount(){
     window.scrollTo(0,sTop)
       this.props.get();
   }
    componentWillUnmount(){
        sTop=document.documentElement.scrollTop;
        console.log(sTop)
    }
    render(){
        let {home}=this.props;
        console.log(home)
        return (
           
                <dd>
                 <ul>
                     {
                         home.map((item,index)=>(
                            <li key={item.id}>
                                <Link to={{pathname:'/productinfo/'+item.id,search:'?dataName=home'}}>
                                <b className="goodsPic">
                                    <img src={item.url}/>
                                </b>
                                <div className="goodsInfor">
                                    <h2>
                                        <b>{item.content}</b>
                                    </h2>
                                    <p>
                                        <del>{item.oldPrice}</del>
                                    </p>
                                    <p>
                                        <strong className="price">{item.nowPrice}</strong>
                                    </p>
                                    <i className="addToCart">&#126;</i>
                                </div>
                                </Link>
                            </li>
                         ))
                     }
                </ul>
                </dd>
           
        )
    }
}
const initMapStateToProps=state=>({
    home:state.home
})
const initMatDispathToProps=dispatch=>({
    get:()=>dispatch(asynList({
        type:types.VIEW_HOME,
        url:'/data/home.data'
    })),
    add:(obj)=>{
        dispatch({
            type:types.ADD_ITEM,
            payload:obj
        })
    }

})
export default connect(
    initMapStateToProps,
    initMatDispathToProps
)(HomeCenterHot);