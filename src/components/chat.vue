<template>
    <div class="container row justify-content-center">
hi {{this.name}}<br>

<div class="card text-left" style="width: 40rem;">
  <div class="card-body">
    <h5 class="card-title pb-3">sended by : </h5>
    <h6 class="card-subtitle mb-2 text-muted"></h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p  class="card-tex">in :</p>
  </div>
  <hr>
  <textarea name="text" id="" cols="30" rows="3" placeholder="input your message her "></textarea>
</div>
    </div>
</template>
<script>
    export default{
        name:'chat',
        props:["name"],
        data(){
            return{

            }
        }
    }
</script>
<style>

</style>
