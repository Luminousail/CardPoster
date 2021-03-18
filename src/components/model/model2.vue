<script src="../../node_modules/html2canvas/dist/html2canvas.js"></script>
<template>
  <div class="content" >
    <div  id="poster" class="card">
      <div class="card-group">
<!--        <img class="cardimg" :src='$store.state.background_card'>-->
        <img class="cardimg" :src='$store.state.background_card'>

        <div class="cardimg-info">
          <div class="cardimg-tittle">{{this.$store.state.cardtextform.cardtittle}}</div>
          <div class="cardimg-subtittle">{{this.$store.state.cardtextform.cardsubtittle}}</div>
        </div>


        <div class="bottominfo">

          <div class="card-infomation">
            <div class="card-infomation-tittle">
              <div class="infomation-tittle">{{this.$store.state.cardtextform.infotittle}}</div>
              <div class="infomation-subtittle">{{this.$store.state.cardtextform.infosubtittle}}</div>

            </div>

            <vue-qr v-if="$store.state.text_QR != ''" class="qrcode"  :text="$store.state.text_QR" :size="80" :margin="6"></vue-qr>

          </div>
          <div class="card-foot" >
            CardPoster
          </div>
        </div>




      </div>

<!--      <div class="card-infomation">-->
<!--        <div class="card-infomation-tittle">-->
<!--          <div class="infomation-tittle">{{this.$store.state.cardtextform.infotittle}}</div>-->
<!--          <div class="infomation-subtittle">{{this.$store.state.cardtextform.infosubtittle}}</div>-->

<!--        </div>-->

<!--        <vue-qr v-if="$store.state.text_QR != ''" class="qrcode"  :text="$store.state.text_QR" :size="80" :margin="6"></vue-qr>-->

<!--      </div>-->

<!--      <div class="card-foot" >-->
<!--      - CardPoster - -->
<!--      </div>-->

    </div>

  </div>
</template>

<script>
import vueQr from 'vue-qr'

import html2canvas from 'html2canvas';
// import html2canvas from 'html2canvas-develop/dist/html2canvas';

import domtoimage from 'dom-to-image';
export default {
  name: "content",
  filters: {
    Tittle_ellipsis (value) {
      if (!value) return ''
      if (value.length > 25) {
        return value.slice(0,25) + '...'
      }
      return value
    },
    SubTittle_ellipsis (value) {
      if (!value) return ''
      if (value.length > 50) {
        return value.slice(0,50) + '...'
      }
      return value
    }
  },
  data(){
    return{


    }



  },


  methods: {

    downLoadDom(){


      domtoimage.toJpeg(document.getElementById('poster'), { quality: 1,width:370,height:600, scale:2})
          .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'my-image-name.jpeg';
            link.href = dataUrl;
            link.click();
          });
    },


    //文件下载方法
    downLoadFile(fileName, canvasImg) {
      //创建一个a标签
      var a = document.createElement('a')
      //指定下载文件名称
      a.href = canvasImg;
      a.download = fileName
      //a 标签 需要点击触发。所以强制给他分派一个点击事件
      //创建一个鼠标事件
      let event = document.createEvent("MouseEvents")
      // 初始化鼠标事件
      event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      // 指定元素对象触发事件
      a.dispatchEvent(event)
    },

    //下载虚拟卡券方法
    downloadCard(){
      let poster = document.getElementById('poster')
      html2canvas(poster, {
        scale: 2 || window.devicePixelRatio,
        dpi:600,
        useCORS: true,
        width: 370,
        height: 600,

      }).then(canvas => {
        let canvasImg = canvas.toDataURL("image/png")
        // console.log(this.posterDataUrl)
        this.downLoadFile("CardPoster", canvasImg);
      });
    },
  },
  mounted() {

  },
  components: { vueQr,
     },
}
</script>

<style scoped>
.content{
    /*margin-top: 10px;*/
    margin-left: 370px;

  display: flex;
  /*display: inline-flex;*/
  flex-direction : column;
  align-items:center;
  justify-content:center;;
}
.card{
  display: flex;
  display: inline-flex;
  flex-direction : column;
  /*background: #ffffff;*/
  background-color: rgba(255,255,255,0.15);
  height: 600px;
  width: 370px;
  align-items:center;
  /*justify-content:center;*/
  border-radius:15px;
}
.card-group{
  position: relative;
  width: 100%;
  height: 100%;
  /*margin-top: 18px;*/

}
.cardimg{

  width: 100%;
  height: 100%;
  /*border-radius:15px;*/
  /*box-shadow:6px 6px  7px 3px #a5a5a5;*/
  /*display: inline-block;*/
  /*box-shadow:4px 4px  10px  #050505;*/
  /*-webkit-box-shadow:4px 4px  10px  #050505;*/

  position: absolute;/*重要*/ /*子类绝对布局必填*/
  left: 0;/*重要*/
  right: 0;/*重要*/
  margin: auto;/*重要*/

}


.cardimg-info{
  position: absolute;/*重要*/ /*子类绝对布局必填*/
  width: 80%;
  margin-top: 70px;
  margin-left: 48px;
  margin-right: 48px;
}

.cardimg-tittle{
  font-family: SourceHanSansCN;
  color: white;
  font-size: 50px;
  /*text-shadow:2px 2px 2px #afafaf;*/
  letter-spacing: 1px;
}
.cardimg-subtittle{
  font-family: 江城圆体;
  margin-top: 12px;
  font-size: 18px;
  color: white;
  text-shadow:1px 1px 2px #686868;



  letter-spacing: 1.5px;
}

.qrcode{
  height: 50%;
  margin-right: 36px;
  margin-left: auto;
}

.card-infomation{
  background: white;
  position: absolute;/*重要*/ /*子类绝对布局必填*/
  width: 90%;
  height: 120px;
  margin-top: 420px;
  /*margin-top: 448px;*/

  display: flex;
  display: inline-flex;
  flex-direction : row;
  border-radius:15px;
  align-items:center;
  /*justify-content:center;*/

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
  position: absolute;/*重要*/ /*子类绝对布局必填*/
  font-family: 江城圆体;
  color: #ffffff;
  font-size: 14px;
  margin-top: 550px;
  margin-left:132px;

}

.bottominfo{
  /*margin-left: 48px;*/
  margin-left: 20px;
  display: flex;
  display: inline-flex;
  flex-direction : row;
  background: white;
  /*height: 600px;*/
  /*width: 370px;*/
  /*align-items:center;*/
  /*justify-content:center;*/
  /*border-radius:15px;*/
}
</style>