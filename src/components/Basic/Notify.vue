<template>
    <div v-if="show"  class="notify">
        <button class="close" @click="closeNotify">
            <icon name="window-close" scale="2" class="alert"/>
        </button>
        <icon v-if="type == 'danger'" class="icon" name="exclamation-triangle" :style="`color: var(--${type})`"/>
        <icon v-else-if="type == 'success'" class="icon" name="check-circle" :style="`color: var(--${type})`"/>
        <icon v-else-if="type == 'info'" class="icon" name="exclamation-circle" :style="`color: var(--${type})`"/>
        <icon v-else class="icon" name="sda"/>        
        <div class="content">
            <p class="title">{{title}}</p>
            <p class="body">{{content}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show: false,
            type: '',
            title: '',
            content: ''
        }
    },
    watch:{
        data(val, oldVal){
            if(val != oldVal){
                this.type = val.type
                this.title = val.title
                this.content = val.content
                this.show = true
                setTimeout(()=>{
                    this.show = false
                },7000)
            }
        }
    },
    props:['data'],
    methods:{
        closeNotify(){
            this.title = ''
            this.content = ''
            this.show = false
        }
    }
}
</script>

<style scoped>

    .notify{
        display: grid;
        grid-template-columns: 50px auto;
        grid-template-areas: 
        "icon content";
        position: absolute;
        z-index: 999999999999999999999999999;
        right: 10px;
        bottom: 10px;
        background: white;
        min-width: 250px;
        min-height: 20px;
        max-width: 500px;
        padding: 5px 20px;
        box-shadow: 0px 0px 2em rgba(0, 0, 0, .25);
    }

    .alert{
        color: #333;
    }

    .close{
        position: absolute;
        right: 10px;
        top: 5px;
        border: none;
        background: none;
        padding: 0;
    }

    .icon{
        grid-area: 'icon';
        font-size: 50px;
        align-self: center;
    }

    .title{
        font-weight: bolder;
    }

    .content{
        grid-area: 'content'
    }

    @media screen and (max-width: 400px) {
        .notify{
            min-width: 80vw;
            right: 10px;
            left: 10px;
        }
    }
</style>
