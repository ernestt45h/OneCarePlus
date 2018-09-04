import UserService from '../services/UserService'
import {bus} from '../main'

export default {
    namespaced: true,
    state: {
        details: {
            name: {
                firstName: '',
                lastName: '',
                otherName: ''
            },
            username:'',
            email: '',
            phone: '',
            gender: '',
            age: ''
        },
        token: ''
    },
    getters:{
        fullName: state => {
            let name = state.details.name
            if(name.lastName || name.lastName)
             return `${name.lastName} ${name.lastName} ${name.otherName}`
            else return ''
        },
        isUser: state=>{
            return state.token ? true : false
        }
    },
    mutations:{
        update_token:(state, payload)=>{
            state.token = payload
        }
    },
    actions:{
        loginUser: ({commit, rootState}, payload)=>{
            let service = new UserService()
            service.loginUser('user/auth', payload.username, payload.password).then(data=>{
                if(data.token){
                    commit('update_token', data.token)
                    bus.$emit('login_success')
                } 
                else
                    bus.$emit('login_error', {
                        type: 'danger',
                        title: 'Wrong authentication',
                        content: 'You have entered a wrong username, email, phone or password '
                    }, {root: true})
            }).catch((err)=>{
                commit('notify', {
                    type: 'danger',
                    title: 'Connection Error',
                    content: 'Try connecting to the internet and try again'
                })
            })
        }
    }

}