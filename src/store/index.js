import Vue from 'vue'
import Vuex from 'vuex'

//State Modules
import User from './UserStore' 
import Settings from './SettingStore' 
import Notify from './Notify' 


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        language: localStorage.getItem("lang") || 'en',
    },
    modules: {
        namespaced: true,
        user: User,
        settings: Settings,
        noti: Notify
    },
    mutations:{
        notify(state, payload){
            console.log('message:', payload);
        }
    },
    actions:{
        notify: ({commit}, payload)=>{
            commit('notify', payload)
        }
    }
}) 