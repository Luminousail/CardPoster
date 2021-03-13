<template>
  <div style="width: 100%">
    <el-alert
        title="上传图片"
        type="success"
        description="您可以将本地的图片上传，作为卡片图片"
        :closable="false">
    </el-alert>
    <div class="uoloadPicture">
<!--      <el-button type="primary" style="margin-top: 36px" >上传图片<i class="el-icon-upload el-icon&#45;&#45;right"></i></el-button>-->
      <el-upload
          class="avatar-uploader"

          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :on-change='changeUpload'
      >
        <img v-if="this.$store.state.uploadImage" :src="this.$store.state.uploadImage" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>



    </div>
  </div>
</template>

<script>

// import VueCropper  from 'vue-cropper';
export default {
  name: "picture",
  data(){
    return{
      imageUrl:"",
      fileinfo:""
    }

  },

  methods:{
    handleAvatarSuccess(){},
    beforeAvatarUpload(){},


    // 上传按钮   限制图片大小
    changeUpload(file,) {
      const isLt5M = file.size / 1024 / 1024 < 5
      if (!isLt5M) {
        this.$message.error('上传文件大小不能超过 5MB!')
        return false
      }
      this.fileinfo = file
      console.log(URL.createObjectURL(file.raw))
      // 上传成功后将图片地址赋值给裁剪框显示图片
      this.$nextTick(() => {
        // this.option.img = file.url
        this.$store.commit('SetUploadImage',URL.createObjectURL(file.raw));
        this.$store.commit('ChangeCropperVisible',true);
        // this.dialogVisible = true
      })
    },


  },
  components:{
    // VueCropper
  }
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

.avatar-uploader{
  /*background: #84c8fa !important;*/
  width:150px;height:210px;
  text-align: center;
  line-height: 210px;
  margin-top: 24px;
  box-shadow: 1px 1px 5px 2px;
}
.el-icon-plus{
  width:150px;height:125px;font-size:30px;
}
.avatar{
  width:150px;height:210px;
}

</style>
