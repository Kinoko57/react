import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import './assets/css/font/fresh-webfont.svg';
import './assets/css/font/fresh-webfont.ttf';
import './assets/css/font/fresh-webfont.woff';
import App from "./components/App";
import {BrowserRouter,Route} from 'react-router-dom';
// let root={
//     bHeader:true,
//     bFooter:true,
//     bLoading:false
// };
// window.rc_root=root
import store from './store';
import {Provider} from 'react-redux'
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);