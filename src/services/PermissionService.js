import MainService from './MainService'

export default class PermissionService{
    constructor(){
        this.axios = new MainService()
    }

    async save(url, body, token){
        console.log(url, body, token)
        return this.axios.authPost(url, body, token).then((result) => {
            return result
        }).catch((err) => {
            throw err
        });
    }

    async update(url, body, token){
        return this.axios.authPost(url, body, token).then((result) => {
            return result
        }).catch((err) => {
            throw err
        });
    }
}
