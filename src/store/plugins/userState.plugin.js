export default store => {
    store.subscribe((mutation, state)=>{
        if(mutation.type == 'user/update')
            localStorage.setItem('user', JSON.stringify(mutation.payload))

        else if (mutation.type == 'user/delete'){
            localStorage.removeItem('user') 
            console.log('user removed')
        }
    })

}