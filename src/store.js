import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

const tradList = [
    {
        tradId: '',
        tradType: 0,
        tradTime: '2017-01-01',
        TKName: '台卡1',
        tradAmount: '100.00',
        tradStatus: -1
    },
    {
        tradId: '',
        tradType: 1,
        tradTime: '2017-02-01',
        TKName: '台卡2',
        tradAmount: '100.00',
        tradStatus: -1
    },
    {
        tradId: '',
        tradType: 2,
        tradTime: '2017-03-01',
        TKName: '台卡3',
        tradAmount: '100.00',
        tradStatus: 1
    },
    {
        tradId: '',
        tradType: 0,
        tradTime: '2017-02-01',
        TKName: '台卡1',
        tradAmount: '100.00',
        tradStatus: -1
    },
]


const state = {
    tradList: tradList
}

const mutations = {
    // 获取收入详情列表数据
    getTradList (state, payload){
        Vue.http.get('/static/data/filter.json',{payload}).then((res)=>{
            if(res.data.errcode == 0){
                state.tradList = res.data.tradList;
                payload.success ? payload.success():'';
            }
        })
    }
}

export default new Vuex.Store({
    state,
    mutations
})