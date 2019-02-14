//异步action //返回函数
import * as types from '../types';

const asyncList=({type,url,id})=>(dispatch,getState)=>{

  dispatch({type:types.VIEW_BLOADING,payload:true});

  fetch(
    url,
  ).then(
    res=>res.json()
  ).then(
    data=>{
      console.log(data)
      dispatch({type:types.VIEW_BLOADING,payload:false});
      if (id){
        dispatch({
          type:type,
          payload:{data,id}
        })
      } else {
        dispatch({type:type,payload:data})
      }

    }
  )
};


export default asyncList;