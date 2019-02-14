import React,{Component} from 'react';
class Order extends Component{
    render(){
        return (
            <div>
               <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>订单列表</h1>
                    </header>
                    <div style={{"height":"1rem"}}></div> 
                    <aside className="orderSift">
                    <a className="currStyle">待付款</a>
                    <a>待发货</a>
                    <a>已完成</a>
                    </aside>
                    <ul className="orderList">
                    <li>
                    <dl>
                    <dt>
                        <span>订单：201512130108</span>
                        <span>待付款</span>
                    </dt>
                    <dd>
                        <h2>优质牛肉5kg散装</h2>
                        <strong>
                        <em>0.00</em>
                        <span>1</span>
                        </strong>
                    </dd>
                    <dd>
                        <h2>新疆葡萄干散装</h2>
                        <strong>
                        <em>0.00</em>
                        <span>1</span>
                        </strong>
                    </dd>
                    <dd>
                        <span>商品数量：<b>2</b></span>
                        <span>实付：<b>0.00</b></span>
                    </dd>
                    <dd>
                        <a className="order_delBtn">删除订单</a>
                        <a className="order_payBtn">付款</a>
                    </dd>
                    </dl>
                    </li>
                    <li>
                    <dl>
                    <dt>
                        <span>订单：201512130108</span>
                        <span>待发货</span>
                    </dt>
                    <dd>
                        <h2>优质牛肉5kg散装</h2>
                        <strong>
                        <em>0.00</em>
                        <span>1</span>
                        </strong>
                    </dd>
                    <dd>
                        <span>商品数量：<b>1</b></span>
                        <span>实付：<b>0.00</b></span>
                    </dd>
                    <dd>
                        <a className="order_payBtn">待发货</a>
                    </dd>
                    </dl>
                    </li>
                    <li>
                    <dl>
                    <dt>
                        <span>订单：201512130108</span>
                        <span>已完成</span>
                    </dt>
                    <dd>
                        <h2>优质牛肉5kg散装</h2>
                        <strong>
                        <em>0.00</em>
                        <span>1</span>
                        </strong>
                    </dd>
                    <dd>
                        <span>商品数量：<b>1</b></span>
                        <span>实付：<b>0.00</b></span>
                    </dd>
                    <dd>
                        <a className="order_delBtn">已完成</a>
                    </dd>
                    </dl>
                    </li>
                    </ul>
                    <div style={{"height":"1.2rem"}}></div>
            </div>
        )
    }
}
export default Order;