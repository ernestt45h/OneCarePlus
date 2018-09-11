<template>
    <div id="palette" class="col-12 col-sm-6 col-md-6 col-lg-3">
        <div class="card" id="storageCard">
          <div class="card-title">Used space</div>
          <div class="card-icon"><i class="material-icons">face</i></div>
          <div class="card-data">99/100 GB</div>
          <hr/>
          <div class="card-hint"> <i class="material-icons">warning</i><a href="#">Get more space</a></div>
        </div>
      </div>
</template>
<style scoped>
#palette{
  font-family: "Roboto", sans-serif;
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
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
}
 .card .card-title {
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  font-weight: 300;
}
  .card .card-data {
  display: flex;
  justify-content: flex-end;
  padding: 16px 16px 0 0;
  font-size: 1.5rem;
  font-weight: 300;
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
  #storageCard .card-icon {
  background: linear-gradient(60deg, #5E35B1, #039BE5);
}
  #storageCard .card-hint i {
  color: red;
}
  #loveCard .card-icon {
  background: linear-gradient(60deg, #F50057, #FF8A80);
}
  #loveCard .card-hint i {
  color: blue;
}
  #pizzaCard .card-icon {
  background: linear-gradient(60deg, #fb8c00, #FFCA29);
}
  #pizzaCard .card-hint i {
  color: red;
}
  #gameCard .card-icon {
  background: linear-gradient(60deg, #43A047, #FFEB3B);
}
  #gameCard .card-hint i {
  color: green;
}

</style>

