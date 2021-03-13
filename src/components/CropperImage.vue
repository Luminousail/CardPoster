<template>
<div>

  <div class="cropper-content">
    <div class="cropper" style="text-align:center">
      <vueCropper
          ref="cropper"
          :img=$store.state.uploadImage
          :outputSize="option.size"
          :outputType="option.outputType"
          :info="true"
          :full="option.full"
          :canMove="option.canMove"
          :canMoveBox="option.canMoveBox"
          :original="option.original"
          :autoCrop="option.autoCrop"
          :fixed="option.fixed"
          :fixedNumber="option.fixedNumber"
          :centerBox="option.centerBox"
          :infoTrue="option.infoTrue"
          :fixedBox="option.fixedBox"
      ></vueCropper>
    </div>
  </div>
  <div slot="footer" class="dialog-footer">
<!--    <el-button @click="this.$store.state.CropperVisible = false">取 消</el-button>-->
    <el-button type="primary" @click="cropperFinish" >确认</el-button>
  </div>


</div>
</template>

<script>
import { VueCropper }  from 'vue-cropper'
export default {
  name: "CropperImage",
  components: {
    VueCropper
  },
  props:['Name'],
  data() {
    return {
      name:this.Name,
      previews: {},
      option: {
        img: "", // 裁剪图片的地址
        info: true, // 裁剪框的大小信息
        outputSize: 1.0, // 裁剪生成图片的质量
        outputType: 'jpeg', // 裁剪生成图片的格式
        canScale: false, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        // autoCropWidth: 100, // 默认生成截图框宽度
        // autoCropHeight: 200, // 默认生成截图框高度
        fixedBox: true, // 固定截图框大小 不允许改变
        fixed: true, // 是否开启截图框宽高固定比例
        fixedNumber: [5, 7], // 截图框的宽高比例
        full: true, // 是否输出原图比例的截图
        canMoveBox: false, // 截图框能否拖动
        original: false, // 上传图片按照原始比例渲染
        centerBox: false, // 截图框是否被限制在图片里面
        infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
      },
      picsList: [],  //页面显示的数组
      // 防止重复提交
      loading: false
    };
  },
  methods: {
    // cropperFinish() {
    //   // 获取截图的base64 数据
    //   this.$refs.cropper.getCropBlob((data) => {
    //
    //     let form = new FormData()
    //     let file = this.blobToFile(data, 'filename.jpg')
    //     form.append('img_file', file)
    //     console.log(form)
    //     // this.$axios({
    //     //   method: 'POST',
    //     //   url: '/api/api_gateway?method=base.bases.base_photo',
    //     //   data: form
    //     // }).then((res) => {})
    //     this.$store.state.uploadImage = data
    //     this.cropperVisible = false
    //   })
    // },

    // 确定裁剪
    cropperFinish(type) {


      if (type === 'Blob') {
        this.$refs.cropper.getCropBlob((data) => {
          let file = data;
          file.name = this.file.name;
          this.$emit('cropperFinish', file, data);
        });

      } else {
        this.$refs.cropper.getCropData(data => {

          // 将剪裁后base64的图片转化为file格式
          let file = this.convertBase64UrlToBlob(data);
          // file.name = this.file.name;

          this.$emit('cropperFinish', file, data);
          this.$store.state.uploadImage = data
          this.$store.state.background_card = data
          this.$store.state.CropperVisible = false
          // console.log(file)
        });
      }

    },
    // 将base64的图片转换为file文件
    convertBase64UrlToBlob(urlData) {
      let bytes = window.atob(urlData.split(',')[1]); // 去掉url的头，并转换为byte
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      // 处理异常,将ascii码小于0的转换为大于0
      let ab = new ArrayBuffer(bytes.length);
      let ia = new Uint8Array(ab);
      for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }
      return new Blob([ab], { type: 'image/jpeg' });
    },


  },
}
</script>

<style scoped >
.cropper{
  height: 400px;
}
.dialog-footer{
  margin-top: 20px;
  width: 100%;
  display: flex;
  display: inline-flex;
  flex-direction : row;
  justify-content:center;
}
</style>
