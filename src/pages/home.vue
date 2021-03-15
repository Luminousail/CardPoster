<template>
  <div>
    <vHeader></vHeader>
    <vsider class="sider"></vsider>
<!--    <v-content class="content" :style="defaultHeight"></v-content>-->
    <Model0 v-if="$store.state.Model==0" class="content" :style="defaultHeight"></Model0>
    <Model1 v-if="$store.state.Model==1" class="content" :style="defaultHeight"></Model1>
    <el-dialog
        title="图片裁剪"
        :visible.sync="$store.state.CropperVisible"
        width="30%"
       >

      <CropperImage></CropperImage>



      <span slot="footer" class="dialog-footer">
<!--    <el-button @click="dialogVisible = false">取 消</el-button>-->
<!--    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
  </span>
    </el-dialog>

  </div>
<!--  <el-container>-->
<!--    <el-header>Header</el-header>-->

<!--    <el-container>-->
<!--      <el-aside width="200px">Aside</el-aside>-->
<!--      <el-main>Main</el-main>-->
<!--    </el-container>-->
<!--  </el-container>-->
</template>

<script>
// import Header from '../components/header';
import vHeader from "@/components/header";
import vsider from "@/components/left-sider/sider";
// import vContent from "@/components/content";
import CropperImage from "@/components/CropperImage";

import Model0 from "@/components/model/model0";
import Model1 from "@/components/model/model1";


export default {
  name: "",

  data() {
    return {

      defaultHeight: {
        height: "",
        width:"",

      },


    };
  },
  methods: {
    //定义方法，获取高度减去头尾
    getHeight() {
      this.defaultHeight.height = window.innerHeight - 70 + "px";
      this.defaultHeight.width = window.innerWidth - 370 + "px"
    }
  },
  created() {
    //页面创建时执行一次getHeight进行赋值，顺道绑定resize事件
    window.addEventListener("resize", this.getHeight);
    this.getHeight();
  },
  components: {
    Model0,
    Model1,
    vHeader,
    vsider,
    // vContent,

    CropperImage
  }
}
</script>

<style scoped>
.sider{
  position: fixed;
z-index: 100;
}
.content{
  /*margin-left: 500px;*/
  /*margin-top: 200px;*/
}

.avatar-uploader{
  background:red!important;
  width:150px;height:150px;
  text-align: center;
  line-height: 150px;
}
.el-icon-plus{
  width:150px;height:150px;font-size:30px;
}

</style>