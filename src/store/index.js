import Vue from 'vue'
import Vuex from 'vuex'

//Plugins
import UserStateManagment from './plugins/userState.plugin'


//Modules
import user from './UserStore'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        
    },
    modules: {
        user
    },
    mutations:{
        
    },
    actions:{
        
    },

    plugins: [UserStateManagment]

}) 