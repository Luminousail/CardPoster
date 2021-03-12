<template>
  <div class="header">
    <!-- 折叠按钮 -->
<!--    <div class="collapse-btn" @click="collapseChage">-->
<!--      <i v-if="!collapse" class="el-icon-s-fold"></i>-->
<!--      <i v-else class="el-icon-s-unfold"></i>-->
<!--    </div>-->
    <div class="logo">CardPoster</div>
    <div class="header-right">
      <div class="header-user-con">

        <!-- 消息中心 -->
        <!--<div class="btn-bell">-->
        <!--<el-tooltip-->
        <!--effect="dark"-->
        <!--:content="message?`有${message}条未读消息`:`消息中心`"-->
        <!--placement="bottom"-->
        <!--&gt;-->
        <!--<router-link to="/tabs">-->
        <!--<i class="el-icon-bell"></i>-->
        <!--</router-link>-->
        <!--</el-tooltip>-->
        <!--<span class="btn-bell-badge" v-if="message"></span>-->
        <!--</div>-->
        <!-- 用户头像 -->
        <!--<div class="user-avator">-->
        <!--<img src="../../assets/img/img.png" />-->
        <!--</div>-->
        <!-- 用户名下拉菜单 -->
      <el-button type="primary" round @click="clickdownbutton">Download</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
export default {
  name: "header",
  methods:{

    clickdownbutton(){
      var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
      console.log(userAgent)
      if (userAgent.indexOf("Safari") > 0 && userAgent.indexOf("Chrome") < 0) {//判断是否Safari浏览器
        console.log("Safari")
        this.downloadCard()
      }else {
        this.downLoadDom()
      }
    },


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

  }
}
</script>

<style scoped>
.header {

  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #409eff;
  background: #ffffff;
  box-shadow:0px 0px  5px 6px #bfbfbf;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.header .logo {
  float: left;
  margin-left: 24px;
  width: 550px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #42c3ff;
}
.btn-bell .el-icon-bell {
  color: #fff;
}
.user-name {
  margin-left: 10px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>