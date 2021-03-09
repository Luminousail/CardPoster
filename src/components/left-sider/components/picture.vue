<template>
  <div style="width: 100%">
    <el-alert
        title="上传图片"
        type="success"
        description="您可以将本地的图片上传，作为卡片的背景图"
        :closable="false">
    </el-alert>
    <div class="uoloadPicture">

      <el-button type="primary" style="margin-top: 36px" >上传图片<i class="el-icon-upload el-icon--right"></i></el-button>

    </div>
  </div>
</template>

<script>
export default {
  name: "picture"
}
</script>

<style scoped>
.uoloadPicture{
  width: 100%;
  display: flex;
  display: inline-flex;
  flex-direction : row;
  /*align-items:center;*/
  justify-content:center;

}


</style>
