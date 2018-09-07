export default store => {
    store.subscribe((mutation, state)=>{
        if(mutation.type == 'user/update'){
            localStorage.setItem('user', JSON.stringify(mutation.payload))
        }
    })
}