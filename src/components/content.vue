<template>
  <div class="content" >
    <div class="card">
      <img class="cardimg" :src='$store.state.background_card'>

    </div>

  </div>
</template>

<script>
export default {
  name: "content",
  data(){
    return{


    }



  },


  methods: {

  },
  mounted() {

  }
}
</script>

<style scoped>
.content{
    /*margin-top: 10px;*/
    margin-left: 370px;

  display: flex;
  display: inline-flex;
  flex-direction : row;
  align-items:center;
  justify-content:center;;
}
.card{
  /*width: 320px;*/
  width: 30%;
}

.cardimg{
  width: 100%;
}
</style>