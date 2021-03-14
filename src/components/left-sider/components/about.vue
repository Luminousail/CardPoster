<template>
<div style="width: 100%" class="aboutroot">
  <el-alert
      title="关于CardPoster"
      type="success"
      description="-"
      :closable="false">
  </el-alert>
<!--  <el-avatar style="margin-top: 24px" shape="square" :size="100" :src="avatar" fit="fill"></el-avatar>-->
<!--  <img :src="avatar" style="width: 80px;">-->

  <div class="abouttext">
    <p>CardPoster是一款轻量级的卡片生成应用。</p>

      <p>用户可以将想要保存的数据或者网络地址存储在二维码中，上传自己喜欢的图片，并附上文字，做成专属于用户的卡片。</p>
    <p>欢迎访问作者的个人博客：</p>
    <p><a href="https://www.blog.luminousail.com/">Luminousail 麓思</a></p>
    <p>以及作者的公众号：</p>
    <img src="../../../assets/picture/wechat.jpg" style="width: 180px">
<!--    <p>麓思实验室</p>-->
    <p>作者将会第一时间公布最新开发的应用与信息。</p>
    <p>如果您觉得我的应用对您有所帮助，也非常欢迎进行捐助，您的认可就是我最大的动力。</p>


  </div>
</div>
</template>

<script>
export default {
  name: "about",
  data(){
    return {
      avatar:"https://www.blog.luminousail.com/wp-content/uploads/2021/03/2021031409422722-e1615714983429.png"
    }
  }
}
</script>

<style scoped>
.aboutroot{
  color: #767676;
  width: 100%;
  display: flex;
  display: inline-flex;
  flex-direction : column;
  align-items:center;
}
.abouttext{
  width: 90%;
}
</style>