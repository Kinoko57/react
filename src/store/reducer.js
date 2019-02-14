import * as types from './types';
const reducer=(state,{type,payload})=>{
    switch (type){
        case types.VIEW_BHEADER: 
            return {
                ...state,bHeader:payload
            };
        case types.VIEW_BFOOTER: 
            return {
                ...state,bFooter:payload
            };
        case types.VIEW_BLOADING:   
            return {
                ...state,bLoading:payload
            };
        case types.CHECK_USER: 
          let obj;
          if(payload.data){
            if(payload.data.data.username==payload.username && payload.data.data.password==payload.password){
                    obj=payload.data;
                    alert("恭喜登陆成功")
            }else{
                obj={auth:false}
                alert("登录失败，请重新登录")
            }
          }else{
             obj=payload
          }
        return {
            ...state,user:obj
        };
        case types.VIEW_PRODUCT: 
            return {
                ...state,product:payload
            };
        case types.VIEW_HOME: 
            return {
                ...state,home:payload
            };
        case types.VIEW_NEW: 
            return {
                ...state,new:payload
            };
        case types.VIEW_PRODUCTINFO: 
             console.log('reducer',payload)
            return {
                ...state,productinfo:payload.data[payload.id-1]
            };
        case types.VIEW_REDUCE: 
            return {
                ...state,reduce:payload
            };
        case types.VIEW_CAR: 
            return {
                ...state,car:payload
            };
        default:
            return state   
    }
}
export default reducer;