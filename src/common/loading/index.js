
import loading from './components/loading.vue'
export default{
    install:function(Vue){
        Vue.component( "loading",loading)//注册到全局
    }
}