import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import asynList from '../../store/actions/asynList';
import * as types from '../../store/types'
// import pubsub from 'pubsub-js';
class Product extends Component{
    // state={
    //     list:[]
    // };
    // componentDidMount(){
    //     // pubsub.publish('view_loading',true)
    //     fetch(
    //         `/data/product.data`
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
        let {product}=this.props;
        return(
            <div style={{"background":"#fff"}}>
                <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>某类产品列表</h1>
                    <Link to='/search' className="rt_searchIcon">&#63;</Link>
                </header>
                    <div style={{"height":"1rem"}}></div>
                    <ul className="sift_nav">
                    <li><a className="des_icon">价格</a></li>
                    <li><a className="des_icon">销量优先</a></li>
                    <li>
                    <a className="nav_li drop_icon">品牌筛选</a>
                    <ul className="drop_list">
                        <li><a>品牌名</a></li>
                        <li><a>品牌名</a></li>
                        <li><a>品牌名</a></li>
                        <li><a>品牌名</a></li>
                    </ul>
                    </li>
                    </ul>
                    <section className="productList">
                    <ul>
                    {
                         product.map((item,index)=>(
                            <li key={item.id}>
                                <Link to={{pathname:'/productinfo/'+item.id,search:'?dataName=product'}}>
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
                    <a className="more_btn">加载更多</a>
                    </section>
                    <div className="hoverCart">
                    <Link to="/car">0</Link>
                    </div>
            </div>
        )
    }
}
const initMapStateToProps=state=>({
    product:state.product
})
const initMatDispathToProps=dispatch=>({
    get:()=>dispatch(asynList({
        type:types.VIEW_PRODUCT,
        url:'/data/product.data'
    }))
})
export default connect(
    initMapStateToProps,
    initMatDispathToProps
)(Product);