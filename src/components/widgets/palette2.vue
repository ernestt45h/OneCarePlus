<template>
    <div id="palette" class="col-12 col-sm-6 col-md-6 col-lg-3">
        <router-link class="routerlink" :to="to || '#'">
          <div class="card" :id="color || 'blue'">
            <div class="card-title">&nbsp</div>
            <div v-if="icon" class="card-icon">
              <i v-if="icon.mi" class="material-icons">{{icon.mi}}</i>
              <i v-else-if="icon.fa" class="fa" :class="'fa-'+icon.fa"></i>
              <img v-else-if="icon.svg" :src="icon.svg"/>
            </div>
            <div class="card-data">{{title}}</div>
            <template v-if="hint">
                <hr/>
                <div class="card-hint"> 
                  <i class="material-icons">{{hintIcon}}</i>
                  <a href="#">{{hint}}</a></div>
            </template>
          </div>
        </router-link>
      </div>
</template>
<script>
export default {
  props:['title','icon','text','hint', 'hintIcon', 'to', 'color']
}
</script>

<style scoped>
#palette{
  font-family: "Roboto", sans-serif;
}

.routerlink{
  text-decoration: none;
}

h1 {
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0px 12px 16px rgba(0, 0, 0, 0.2);
  margin: 100px auto;
}



:root{
    --red: #F50057;
    --blue: #039BE5;
    --green:#43A047;
}


  .card {
  margin: 0 -8px 32px -8px;
  color: rgba(0, 0, 0, 0.87); 
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
}
 .card .card-title {
  text-transform: capitalize;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  font-weight: 300;
}
  .card .card-data {
  padding: 16px 16px 0 16px;
  font-size: 1.5rem;
  font-weight: 300;
  text-transform: capitalize;
  text-align: center;
}
  .card hr {
  width: 90%;
}
  .card .card-hint {
  display: flex;
  padding: 0 0 8px 8px;
  font-size: 0.9rem;
  font-weight: 300;
}
  .card .card-hint i {
  font-size: 1.3rem;
  color: red;
  margin-right: 8px;
}
  .card .card-icon {
  display: flex;
  position: absolute;
  top: -20px;
  left: 12px;
  background: linear-gradient(60deg, #ffa726, #EF6C00);
  color: white;
  width: 90px;
  height: 90px;
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.15);
  align-items: center;
  justify-content: center;
  border-radius: 25%;
}
  .card .card-icon i {
  font-size: 4rem;
}
  #blue .card-icon {
  background: linear-gradient(60deg, #5E35B1, #039BE5);
}
  #blue .card-hint i {
  color: red;
}
  #red .card-icon {
  background: linear-gradient(60deg, #F50057, #FF8A80);
}
  #red .card-hint i {
  color: blue;
}
  #yellow .card-icon {
  background: linear-gradient(60deg, #fb8c00, #FFCA29);
}
  #yellow .card-hint i {
  color: red;
}
  #green .card-icon {
  background: linear-gradient(60deg, #43A047, #FFEB3B);
}
  #green .card-hint i {
  color: green;
}

</style>

