import Vue from 'vue'
import Vuex from 'vuex'

//Plugins
import UserStateManagment from './plugins/userState.plugin'


//Modules
import user from './UserStore'
import permission from './permssion'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        
    },
    modules: {
        user,
        permission
    },
    mutations:{
        
    },
    actions:{
        
    },

    plugins: [UserStateManagment]

}) 