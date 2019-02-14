//异步action //返回函数
import * as types from '../types';

const asyncUser=({url,username,password})=>(dispatch,getState)=>{
  console.log('asyncUser',username, password);
  dispatch({type:types.VIEW_BLOADING,payload:true});
  return fetch(
    url,
  ).then(
    res=>res.json()
  ).then(
    data=>{
      dispatch({type:types.VIEW_BLOADING,payload:false});
      dispatch({type:types.CHECK_USER,payload:{data,username,password}});
      return data.auth
    }
  )
};


export default asyncUser;