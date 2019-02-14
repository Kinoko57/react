import React,{Component} from 'react';
class Favorite extends Component{
    render(){
        return (
            <div>
               <header>
                    <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                    <h1>常购清单</h1>
                    </header>
                    <div style={{"height":"1rem"}}></div>
                    <section className="productList">
                    <ul>
                    <li>
                        <a href="product.html" className="goodsPic">
                        <img src="images/upload/goods001.jpg"/>
                        </a>
                        <div className="goodsInfor">
                        <h2>
                        <a href="product.html">新鲜生菜两斤装特惠</a>
                        </h2>
                        <p>
                        <del>5.90</del>
                        </p>
                        <p>
                        <strong className="price">3.90</strong>
                        </p>
                        <a className="addToCart">&#126;</a>
                        </div>
                    </li>
                    <li>
                        <a href="product.html" className="goodsPic">
                        <img src="images/upload/goods002.jpg"/>
                        </a>
                        <div className="goodsInfor">
                        <h2>
                        <a href="product.html">红萝卜3斤装</a>
                        </h2>
                        <p>
                        <del>12.90</del>
                        </p>
                        <p>
                        <strong className="price">8.90</strong>
                        </p>
                        <a className="addToCart">&#126;</a>
                        </div>
                    </li>
                    <li>
                        <a href="product.html" className="goodsPic">
                        <img src="images/upload/goods003.jpg"/>
                        </a>
                        <div className="goodsInfor">
                        <h2>
                        <a href="product.html">西红柿5斤装</a>
                        </h2>
                        <p>
                        <del>9.90</del>
                        </p>
                        <p>
                        <strong className="price">6.90</strong>
                        </p>
                        <a className="addToCart">&#126;</a>
                        </div>
                    </li>
                    <li>
                        <a href="product.html" className="goodsPic">
                        <img src="images/upload/goods009.jpg"/>
                        </a>
                        <div className="goodsInfor">
                        <h2>
                        <a href="product.html">西红柿5斤装</a>
                        </h2>
                        <p>
                        <del>9.90</del>
                        </p>
                        <p>
                        <strong className="price">6.90</strong>
                        </p>
                        <a className="addToCart">&#126;</a>
                        </div>
                    </li>
                    <li>
                        <a href="product.html" className="goodsPic">
                        <img src="images/upload/goods008.jpg"/>
                        </a>
                        <div className="goodsInfor">
                        <h2>
                        <a href="product.html">西红柿5斤装</a>
                        </h2>
                        <p>
                        <del>9.90</del>
                        </p>
                        <p>
                        <strong className="price">6.90</strong>
                        </p>
                        <a className="addToCart">&#126;</a>
                        </div>
                    </li>
                    </ul>
                    <a className="more_btn">加载更多</a>
                    </section>
                    <div className="hoverCart">
                    <a href="cart.html">0</a>
                    </div>
            </div>
        )
    }
}
export default Favorite;