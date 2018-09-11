<template>
    <div>
        <div class="notes">
            <vs-button vs-size="large" vs-color="dark" vs-type="line" vs-icon="mail"></vs-button>
            <vs-button vs-size="large" vs-color="dark" vs-type="line" vs-icon="notifications"></vs-button>
            <vs-button vs-size="large" vs-color="dark" vs-type="line" vs-icon="inbox"></vs-button>    
        </div>
        <vs-dropdown vs-custom-content vs-trigger-click >
            <vs-button id="dropdown" style="border-radius: 50%"  vs-size="large" vs-color="primary" vs-type="filled" vs-icon="person"></vs-button>
            <vs-dropdown-menu>
                <h1 class="menu-pop">Hello user stuff</h1>
            </vs-dropdown-menu>
        </vs-dropdown>
     
    </div>
</template>
<style scoped>

    .menu-pop{
        min-width: 200px;
    }

    #dropdown{
        margin: 0px 15px;
    }
    .notes{
        display: inline;
    }


    p{
        display: inline-block;
        margin: 15px 0;
    }

    @media screen and (max-width: 430px) {
        .notes{
            display: block;
        }

        #dropdown{
            float: right;
        }

        p{
            display: none;
        }

    }
</style>
