export default {
    namespaced: true,
    state: {
        details: JSON.parse(localStorage.getItem('user')) || ''
    },
    getters:{
        fullName: state => {
            let name = state.details.name
            if( name && (name.lastName || name.lastName))
             return `${name.lastName} ${name.lastName} ${name.otherName}`
            else return ''
        },
        isUser: state=>{
            return state.details.username ? true : false
        },

        isAuthenticated: state=> { return state.details.token ? true : false },
        permissions: state=> {return state.details.permissions},
        token: state=>state.details.token
    },
    mutations:{
        update: (state, payload)=>{
            state.details = payload
        },

        update_token:(state, payload)=>{
            state.details.token = payload
        },

        delete: (state, payload)=>{
            if(payload) state.details = ''
        }
    },
    actions:{
        logout: ({commit}, payload)=>{
            if(payload) commit('delete', true )
        }
    }
}