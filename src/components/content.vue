<template>
  <div class="content" >
    <div class="card">
      <img class="cardimg" :src='$store.state.background_card'>
      <div class="infomation">
        <vue-qr class="qrcode"  text="https://www.blog.luminousail.com/" :size="80" :margin="6"></vue-qr>

      </div>

    </div>

  </div>
</template>

<script>
import vueQr from 'vue-qr'
export default {
  name: "content",
  data(){
    return{


    }



  },


  methods: {

  },
  mounted() {

  },
  components: { vueQr },
}
</script>

<style scoped>
.content{
    /*margin-top: 10px;*/
    margin-left: 370px;

  display: flex;
  display: inline-flex;
  flex-direction : column;
  align-items:center;
  justify-content:center;;
}
.card{
  display: flex;
  display: inline-flex;
  flex-direction : column;
  background: white;
  /*width: 320px;*/
  height: 600px;
  width: 370px;
  align-items:center;
  /*justify-content:center;*/
}

.cardimg{
  margin-top: 18px;
  width: 88%;
  height: 420px;
  border-radius:15px;
  box-shadow:6px 6px  10px 3px #bfbfbf;

}

.qrcode{
  margin-right: 36px;
  margin-left: auto;
}

.infomation{
  margin-top: 28px;
  width: 100%;
  display: flex;
  display: inline-flex;
  flex-direction : row;
}
</style>