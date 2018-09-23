import Api from '../../config/api.config'
import Axios from 'axios'


export default class MainService{
    constructor(){
        this.unhandler = Axios.create({
            baseURL: Api.host,
        })
        this.handler = Axios.create({
            baseURL: Api.host
        })
    }


    async get(url){
        return this.unhandler.get(url).then(req=>{
            return req.data
        }).catch(err=>{
            throw err.response.data
        })
    }


    async post(url, body){
        return this.unhandler.post(url, body).then(req=>{
            return req.data
        }).catch(err=>{
            throw err.response.data
        })
    }

    async authGet(url, token){
        return this.handler.get(url,{
            headers:{
                Authorization:  `bearer ${token}`
            }
        }).then(req=>req.data).catch(err=>{throw err.response.data})
    }

    async authPost(url, body, token){
        return this.handler.post(url, body ,{
            headers:{
                Authorization:  `bearer ${token}`
            }
        }).then(req=>req.data).catch(err=>{console.log(err); throw err.response.data})
    }
}
