export default{
    namespaced: true,
    state:{},
    getters:{
        all:(state, getters, rootState, rootGetters)=>{
            return Object.values(rootGetters['user/permissions']) 
        },
        navigation:(state, getters)=>{
            return getters.all.filter(nav=>nav.type == "navigation")
        }
    },
    actions:{}
}
