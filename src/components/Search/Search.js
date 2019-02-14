import React,{Component} from 'react';
class Search extends Component{
    render(){
        return (
            <div>
                <header>
                <a href="javascript:history.go(-1);" className="iconfont backIcon">&#60;</a>
                <h1>搜索</h1>
                </header>
                <div style={{"height":"1rem"}}></div>
                <aside className="searchArea">
                <input type="text" placeholder="寻找调料、食材..."/>
                <input type="button" value="&#63;" className="searchBtn"/>
                </aside>
                <dl className="searchHistory">
                <dt>历史搜索</dt>
                <dd>
                <ul>
                <li><a href="category.html">白菜</a></li>
                <li><a href="category.html">菠菜</a></li>
                <li><a href="category.html">醋</a></li>
                <li><a href="category.html">东北大米</a></li>
                </ul>
                </dd>
                <dd>
                <a>清空历史记录</a>
                </dd>
                </dl>
            </div>
        )
    }
}
export default Search;