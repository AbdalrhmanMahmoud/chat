<template>
  <div class="container row justify-content-center">
    <!-- <h1>i am the best ever</h1>
  <span class="h1">hell yes</span> -->

  <div class="card text-center  justify-content-center ">
    <!-- <div class="col-md-4"></div>bg-success -->
  <div class="card-header  h3">
anonymous chat <br>  </div>
  <div class="card-body">
    <h5 class="card-title">send any message and receive from another anonymous   </h5>
    <form action="" @click.prevent="enterChat">
              <p class="text-danger h4" v-if="feedback">{{feedback}} </p>

     <input type="text" v-model="name" name="name" class="form-control mt-4 pb-2" placeholder="add any name you want ">
    <button  class="btn btn-primary mt-4 btn-lg ">Start Chat</button>

    </form>

  </div>

</div>
  </div>

</template>

<script>
export default {
  name: 'welcom',
  data(){
    return{
      name:null,
      feedback :null
    }
  },
  methods:{
    enterChat(){
      if(this.name){
        this.$router.push({name:"chat", params:{name:this.name}})
      }else{
        this.feedback ="enter any name to log"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::p{

  /* width: 500px; */
}
</style>
