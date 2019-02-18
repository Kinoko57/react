import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import asynList from '../../store/actions/asynList';
import * as types from '../../store/types'
// import pubsub from 'pubsub-js';
class Car extends Component{
    // state={
    //     list:[]
    // };
    // componentDidMount(){
    //     // pubsub.publish('view_loading',true)
    //     fetch(
    //         `/data/car.data`
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
    // componentDidMount(){
    //     this.props.get();
    // }
    render(){
        let {buycar}=this.props;
        return (
            <div>
                    <header>
                        <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                        <h1>购物车</h1>
                    </header>
                    <div style={{"height":"1rem"}}></div>
                    <dl className="cart">
                        <dt>
                            <label><input type="checkbox"/>全选</label>
                            <a className="edit" onClick={this.bianji.bind(this)}>编辑</a>
                        </dt>
                        {
                            buycar.map((item,index)=>(
                            <dd key={index}>
                                {/* <Link to={{pathname:'/productinfo/'+item.id,search:'?dataName=car'}}> */}
                                <input type="checkbox"/>
                                <b className="goodsPic"><img src={item.url}/></b>
                                <div className="goodsInfor">
                                    <h2>
                                        <b href="product.html">{item.content}</b>
                                        <span>{item.number}</span>
                                    </h2>
                                    <div className="priceArea">
                                        <strong>{item.nowPrice}</strong>
                                        <del>{item.oldPrice}</del>
                                    </div>
                                    <div className="numberWidget">
                                        <input type="button" value="-" className="minus" onClick={this.props.redValue.bind(null,item)}/>
                                        <input type="text" value={item.number} disabled  className="number"/>
                                        <input type="button" value="+"  className="plus" onClick={this.props.addValue.bind(null,item)}/>
                                    </div>
                                </div>
                                <b className="delBtn" onClick={this.props.del.bind(null,item)}>删除</b>
                                {/* </Link> */}
                            </dd>
                            ))
                        }  
                    </dl>
                    <div style={{"height":"1rem"}}></div>
                    <aside className="btmNav">
                        <a>合计：￥0.00</a>
                        <Link to={{pathname:'/confirm'}} style={{"background":"#64ab5b","color":"white","textShadow":"none"}}>立即下单</Link>
                    </aside>
            </div>
        )
    }
    bianji(){
        // document.getElementsByClassName(".edit")[0].onclick=function(){
            console.log(document.getElementsByClassName("edit")[0])
            if(document.getElementsByClassName("edit")[0].innerHTML=="编辑"){
                document.getElementsByClassName("edit")[0].innerHTML="完成";
                let list=document.getElementsByClassName("numberWidget");
                let clear=document.getElementsByClassName("delBtn");
                let price=document.getElementsByClassName("priceArea")
                console.log(list)
               for(var i=0;i<list.length;i++){
                list[i].style.display="block";
               }
               for(var i=0;i<clear.length;i++){
                clear[i].style.display="block";
               }
               for(var i=0;i<price.length;i++){
                price[i].style.display="none";
               }
            }else{
                document.getElementsByClassName("edit")[0].innerHTML="编辑";
                let list=document.getElementsByClassName("numberWidget");
                let clear=document.getElementsByClassName("delBtn");
                let price=document.getElementsByClassName("priceArea")
                console.log(list)
               for(var i=0;i<list.length;i++){
                list[i].style.display="none";
               }
               for(var i=0;i<clear.length;i++){
                clear[i].style.display="none";
               }
               for(var i=0;i<price.length;i++){
                price[i].style.display="block";
               }
            }

    }
}
// const initMapStateToProps=state=>({
//     car:state.car
// })
// const initMatDispathToProps=dispatch=>({
//     get:()=>dispatch(asynList({
//         type:types.VIEW_CAR,
//         url:'/data/car.data'
//     }))
// })
// export default connect(
//     initMapStateToProps,
//     initMatDispathToProps
// )(Car);

const initMapStateToProps = state =>({
	buycar:state.buycar
})

const initMapDispatchToProps = dispatch => ({
	del:(del)=>{
		dispatch({
			type:types.REMOVE_ITEM,
			payload:del
		})	
	},
	addValue:(item)=>{
		dispatch({
			type:types.ADD_NUMBER,
			payload:item
		})	
	},
	redValue:(item)=>{
		dispatch({
			type:types.RED_NUMBER,
			payload:item
		})	
	},


})


export default connect(
	initMapStateToProps,
   initMapDispatchToProps
)(Car)