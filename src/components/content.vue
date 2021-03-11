<template>
  <div class="content" >
    <div class="card">
      <div class="card-group">
        <img class="cardimg" :src='$store.state.background_card'>

        <div class="cardimg-info">
          <div class="cardimg-tittle">Windows 10X延期发布，微软这次做系统能学乖吗？</div>
          <div class="cardimg-subtittle">这两款新品都是主打双屏概念，只不过Surface Duo采用的是系统......</div>
        </div>

      </div>

      <div class="card-infomation">
        <div class="card-infomation-tittle">
          <div class="infomation-tittle">麓思实验室</div>
          <div class="infomation-subtittle">技术让生活更有趣</div>

        </div>

        <vue-qr class="qrcode"  :text="$store.state.text_QR" :size="80" :margin="6"></vue-qr>

      </div>

      <div class="card-foot">
      CardPoster


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
.card-group{
  position: relative;
  width: 100%;
  margin-top: 18px;

}
.cardimg{

  width: 82%;
  height: 420px;
  border-radius:15px;
  box-shadow:6px 6px  10px 3px #bfbfbf;
  position: absolute;/*重要*/ /*子类绝对布局必填*/
  left: 0;/*重要*/
  right: 0;/*重要*/
  margin: auto;/*重要*/

}


.cardimg-info{
  position: absolute;/*重要*/ /*子类绝对布局必填*/

  margin-top: 280px;
  margin-left: 48px;
  margin-right: 48px;
}

.cardimg-tittle{
  font-family: SourceHanSansCN;
  color: white;
  font-size: 20px;
  text-shadow:2px 2px 2px #afafaf;
  letter-spacing: 1px;
}
.cardimg-subtittle{
  font-family: 江城圆体;
  margin-top: 12px;
  font-size: 14px;
  color: white;
  text-shadow:1px 1px 2px #686868;
  letter-spacing: 1.5px;
}

.qrcode{
  margin-right: 36px;
  margin-left: auto;
}

.card-infomation{
  margin-top: 448px;
  width: 100%;
  display: flex;
  display: inline-flex;
  flex-direction : row;

}
.card-infomation-tittle{
  display: flex;
  display: inline-flex;
  flex-direction : column;
  /*margin-top: 18px;*/
  margin-left: 60px;
  justify-content:center;
  height: 80px;
}
.infomation-tittle{
  font-family: SourceHanSansCN;
  font-size: 20px;
}
.infomation-subtittle{
  font-family: 江城圆体;
  font-size: 12px;
  color: #bfbfbf;
  margin-top: 6px;

}

.card-foot{
  font-family: 江城圆体;
  color: #e2e2e2;
  margin-top: 12px;

}
</style>