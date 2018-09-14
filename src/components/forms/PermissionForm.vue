<template>
    <form method="post" @submit.prevent="submit" class="form-group">
        <div class="row">
            <div class="from-input col-6">
                <input name="name" placeholder="Permission Name" v-model="name" class="form-control"/>
                <span>the name of the permission</span>
            </div>
            <div class="from-input col-6">
                <input name="name" placeholder="Access Point" v-model="access_point" class="form-control"/>
                <span>the API access point at which request would be made</span>

            </div>
            
        </div>
        <div class="from-input">
            <textarea name="name" placeholder="A short description" v-model="description" class="form-control"/>
        </div>
        <div class="actions">
            <div class="row">
                <div class="col-2">
                    <input type="checkbox" class="form-control">
                </div>
                <span>create</span>
            </div>
            
        </div>

        <vs-button @click="popup=true" vs-color="primary" vs-type="filled">Open Inner Popup</vs-button>
    </form>
</template>
<script>
export default {
    data(){
        return{
            name: '',
            access_point: '',
            description: ''
        }
    },
    methods:{
        submit(){
            console.log('hello form')
        }
    }
}
</script>
<style scoped>
    .from-input{
        margin-bottom: 20px;
    }

    form{
        overflow: hidden;
    }

    span{
        color: #777;
        font-size: 12px;
        text-transform: capitalize;
    }
</style>


