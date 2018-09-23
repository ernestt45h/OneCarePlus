<template>
    <form id="popup" method="post" @submit.prevent="submit" class="form-group">
        <input v-model="temp._id" hidden/>
        <div class="row">
            <div class="from-input col-12 col-md-4">
                <input name="name" placeholder="Permission Name*" v-model="temp.name" class="form-control"/>
            </div>
            <div class="from-input col-12 col-md-4">
                <input name="name" placeholder="Access Point*" v-model="temp.access_point" class="form-control"/>
                <span>the API url</span>

            </div>    
            <div class="from-input col-12 col-md-4">
                <textarea name="name" placeholder="A short description" v-model="temp.description" class="form-control"/>
            </div>
            <vs-divider></vs-divider>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4">
                      <h5>Permission Type</h5>
                        <vs-select
                            vs-autocomplete
                            class="selectExample"
                            label="Figuras"
                            v-model="temp.type"
                            >
                            <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in typeOptions" />
                        </vs-select>  
                    </div>
                    <div class="col-12 col-md-4">
                      <h5>Targeted Users</h5>
                        <vs-select
                            vs-autocomplete
                            class="selectExample"
                            label="Figuras"
                            v-model="temp.target"
                            >
                            <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in userList" />
                        </vs-select>  
                    </div>
                    <div class="col-12 col-md-4">
                        <h5>User Role</h5>
                        <vs-select
                            vs-autocomplete
                            class="selectExample"
                            label="Figuras"
                            v-model="temp.role"
                            >
                            <vs-select-item :key="index" :vs-value="item.value" :vs-text="item.text" v-for="(item,index) in userList" />
                        </vs-select>
                    </div>
                </div>
            </div>
            <div class="actions col-12 col-lg-4">
                <vs-divider>
                    Actions
                </vs-divider>
                
                <ul class="row">
                    <li class="action-list col-6 col-lg-3 ">
                        <vs-checkbox v-model="temp.actions" vs-value="create">Create</vs-checkbox>
                    </li>
                    <li class="action-list col-6 col-lg-3">
                        <vs-checkbox v-model="temp.actions" vs-value="read">Read</vs-checkbox>
                    </li>
                    <li class="action-list col-6 col-lg-3">
                        <vs-checkbox v-model="temp.actions" vs-value="update">Update</vs-checkbox>
                    </li>
                    <li class="action-list col-6 col-lg-3">
                        <vs-checkbox v-model="temp.actions" vs-value="delete">Delete</vs-checkbox>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-lg-8">
                <vs-divider>
                    Icons*
                </vs-divider>
                <div v-if="temp.icon" class="row">
                    <div class="col-4">
                        <input v-model="temp.icon.mi" class="form-control" placeholder="Material icon"/>
                    </div>
                    
                    <div class="col-4">
                        <input v-model="temp.icon.fa" class="form-control" placeholder="Font-Awesome"/>
                    </div>
                    
                    <div class="col-4">
                        <input v-model="temp.icon.svg" class="form-control" placeholder="SVG url"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="offset-8 offset-sm-9 offset-md-10 offset-lg-11 mt-3">
            <vs-button v-if="!temp._id" vs-color="primary" vs-type="gradient" vs-icon="save">Save</vs-button>
            <vs-button v-else vs-color="primary" vs-type="gradient" vs-icon="save">Update</vs-button>
        </div>
    </form>
</template>
<script>
import PermissionService from '../../services/PermissionService'
import { setTimeout } from 'timers';
const request = new PermissionService()
export default {
    watch:{
        perms(value){
            if(value && value._id){
                this.temp = value
            }else{
                this.temp = {actions:[], icon:{mi: '', fa: '', svg: ''}}
            }
        }
    },
    props:['perms'],
    data(){
        return{
            temp: '',
            userList: require('../../../api/config/settings').users.map(item=>{
                return {text: item.toUpperCase(), value: item}
            }),
            typeOptions:[
                {text: 'Navigation', value: 'navigation'},
                {text: 'Analytics', value: 'analytics'}
            ],
        }
    },
    methods:{
        submit(){

            this.$vs.loading({
                scale: 0.45
            })
            if(this.temp._id){
                this.updatePerm(this.temp)
            }else this.savePerm(this.temp)
        },
        updatePerm(permission){
            request.update('/permission/update', permission, this.$store.getters['user/token'])
            .then((result) => {
                this.$vs.loading.close()
                this.$vs.notify({
                    text: result.message,
                    color: 'success'
                })
                this.$emit('close', true)
                console.log('client update',result)

            }).catch((err) => {
                this.$vs.loading.close()
                console.log(err)
            });
        },

        savePerm(permission){
            request.save('/permission', permission, this.$store.getters['user/token']).then(result => {
                console.log(result)
                this.$vs.loading.close('#popup')
            }).catch(err => {
                this.$vs.loading.close('#popup')
                this.$vs.notify({
                    text: err.message,
                    icon: 'warning',
                    color: 'warning',
                    time: 4000
                })
            })
        }
    },
    created() {
        if(this.perms){
            this.temp = this.perms
        }
    },
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

    .action-list{
        display: inline-flex;
    }

</style>


