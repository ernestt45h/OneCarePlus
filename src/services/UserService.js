import MainService from './MainService'

export default class UserService {

    constructor(){
        this.axios = new MainService()
    }

    async loginUser(url, username, password){
        return this.axios.post(url,{username, password})
        .then(data=>data).catch(err=>{throw err})
    }

    async signupUser(url, data){
        return this.axios.post(url, data).then(data=>data).catch(err=>{throw err})
    }

}
