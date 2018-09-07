<template>
    <div>
        <button @click="clicked" type="button"><img src="../../assets/sign-out-option.svg"/></button>
    </div>
</template>
<script>
export default {
    methods:{
        clicked(){
            this.$emit('click')
        }
    }
}
</script>

<style scoped>

    img{
        width: 20px;
    }

    button{
        background: linear-gradient(left ,rgb(0, 204, 255), rgb(81, 252, 81)) ;
        color: white;
        border-radius: 50%;
        box-shadow: 0 0px 30px rgba(0, 0, 0, 0.25);
        padding: 12px 15px;
        border: none;
        font-family:'Courier New', Courier, monospace;
        font-weight: bold;
        transition: all .3s;
        text-decoration: underline;
        cursor: pointer;
        position: absolute;
        right: 15px;
        bottom: 10px;
    }

    button:hover{
        box-shadow: 0 5px 40px rgba(0, 0, 0, 0.25);
    }

    button:active{
        box-shadow: 0 0px 20px rgba(0, 0, 0, 0.75);
    }
</style>

