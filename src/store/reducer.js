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
        //清空购物车  
      case types.REMOVE_ALL:
      return Object.assign({},state,{
         buyCar:[]
      });
  
       //去除一个商品
       case types.REMOVE_ITEM:
       let rearr=[...state.buycar];
       rearr.forEach((item,index)=>{
         if(item.id===payload.id){
             rearr.splice(index,1);
         }
       });
       return {
           ...state,
           buycar:rearr
       }

       //添加购物车
       case types.ADD_ITEM:
       let find=false;
       let arr=[...state.buycar];
       console.log(payload)

         arr.forEach((item,index)=>{
             if(item.id===payload.id){
             find=true;
             item.number++;
             }
         });
         if(!find){
             payload.number=1;
             arr.push(payload);
         }
         return {
             ...state,
             buycar:arr
         }
         case types.ADD_NUMBER:
           let addarr=[...state.buycar]
           addarr.forEach((item,index)=>{
               if(item.id===payload.id){
                   item.number++
                 //   arr.splice(index,1,item)
               }
           })
           return {
               ...state,
               buycar:addarr
           }
           case types.RED_NUMBER:
           let redarr = [...state.buycar]
           redarr.forEach((item,index)=>{
             if(item.id===payload.id){
                  let a = item.number--
                 if(a==1){
                     item.number=0
                 }
               //   arr.splice(index,1,item)
             }
           })
           return {
             ...state,
             buycar:redarr
         }
        default:
            return state   
    }
}
export default reducer;