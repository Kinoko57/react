import React,{Component} from 'react';
import {Link} from 'react-router-dom';
// import pubsub from 'pubsub-js';
import {connect} from 'react-redux';
import asynList from '../../store/actions/asynList';
import * as types from '../../store/types'
class HomeCenterReduce extends Component{
    // state={
    //     list:[]
    // };
    // componentDidMount(){
    //     // pubsub.publish('view_loading',true)
    //     fetch(
    //         `/data/reduce.data`
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
    componentDidMount(){
        this.props.get();
    }
    render(){
        let {reduce}=this.props;
        return (
           
                <dd>
                 <ul>
                     {
                         reduce.map((item,index)=>(
                            <li key={item.id}>
                                <Link to={{pathname:'/productinfo/'+item.id,search:'?dataName=reduce'}}>
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
    reduce:state.reduce
})
const initMatDispathToProps=dispatch=>({
    get:()=>dispatch(asynList({
        type:types.VIEW_REDUCE,
        url:'/data/reduce.data'
    }))
})
export default connect(
    initMapStateToProps,
    initMatDispathToProps
)(HomeCenterReduce);