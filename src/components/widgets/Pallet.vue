<template>
    <div class="pallet col-12 col-sm-6 col-md-6 col-lg-3">
        <div class="icon-holder" :style="{color}">
            <i class="material-icons">{{icon}}</i>
        </div>
        <div class="details" :style="{background: color}">
            <h4>{{title}}</h4>
            <p>{{text}}</p>
            <span>{{info}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:['icon', 'title', 'text', 'info', 'color']
}
</script>

<style scoped>
    .pallet{
        box-shadow: 2px 2px 10px rgba(0, 0, 0, .25);
        display: grid;
        width: calc(100vw - 70px);
        margin: 10px 10px;
        grid-gap: 5px;
        grid-template-columns: 1fr 1fr;
    }

    .icon-holder{
        margin: auto;
        color: #333;
    }

    i{
        font-size: 50px;

    }

    .details{
        height: 120%;
        margin-top: -5px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        display: grid;
        background: #333;
        grid-template-rows: repeat(2, 2fr) 1fr;
        color: white;
        grid-gap: 5px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .25);
        padding: 10px;
    }

    h4{
        text-align: center;
        padding-top: 10px; 
        margin: auto;
        text-transform: uppercase;

    }

    p{
        text-align: center;
    }

    span{
        text-align: right;
        font-size: 12px;
        margin-right: 5px;
    }

</style>
