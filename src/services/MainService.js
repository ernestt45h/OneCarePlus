import Api from '../../config/api.config'
import Axios from 'axios'


export default class MainService{
    constructor(){
        this.unhandler = Axios.create({
            baseURL: Api.host,
        })
        this.handler = Axios.create({
            baseURL: Api.host,
            auth:{
                token: ''
            }
        })
    }


    async get(url){
        return this.unhandler.get(url).then(req=>{
            return req.data
        }).catch(err=>{
            throw err
        })
    }


    async post(url, body){
        return this.unhandler.post(url, body).then(req=>{
            return req.data
        }).catch(err=>{
            throw err
        })
    }

    async authGet(url, token){
        return this.handler.get(url,{
            auth: {
                token
            }
        }).then(req=>req.data).catch(err=>err)
    }

    async authPost(url, body, token){
        return this.handler.post(url, body ,{
            auth: {
                token
            }
        }).then(req=>req.data).catch(err=>err)
    }
}
