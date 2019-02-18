import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import asynList from '../../store/actions/asynList';
import * as types from '../../store/types';
let sTop=0;
// import pubsub from 'pubsub-js';
class HomeCenterNew extends Component{
    // state={
    //     list:[]
    // };
    // componentDidMount(){
    //     // // pubsub.publish('view_loading',true)
    //     // fetch(
    //     //     `/data/new.data`
    //     // ).then(
    //     //     res=>res.json()
    //     // ).then(
    //     //     data=>{
    //     //         setTimeout(()=>{
    //     //             // pubsub.publish('view_loading',false)
    //     //             this.setState({list:data})
    //     //         },1000)
    //     //     }
    //     // )
    // }
    componentDidMount(){
        window.scrollTo(0,sTop)
          this.props.get();
      }
       componentWillUnmount(){
           sTop=document.documentElement.scrollTop;
           console.log(sTop)
       }
    render(){
        let {news}=this.props;
        return (
           
                <dd>
                 <ul>
                     {
                         news.map((item,index)=>(
                            <li key={item.id}>
                                <Link to={{pathname:'/productinfo/'+item.id,search:'?dataName=new'}}>
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
    news:state.new
})
const initMatDispathToProps=dispatch=>({
    get:()=>dispatch(asynList({
        type:types.VIEW_NEW,
        url:'/data/new.data'
    }))
})
export default connect(
    initMapStateToProps,
    initMatDispathToProps
)(HomeCenterNew);