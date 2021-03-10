<template>
  <div>
    <vHeader></vHeader>
    <vsider class="sider"></vsider>
    <v-content class="content" :style="defaultHeight"></v-content>
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
import vContent from "@/components/content";

export default {
  name: "首页",

  data() {
    return {
      defaultHeight: {
        height: "",
        width:""
      }
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
    vHeader,
    vsider,
    vContent
  }
}
</script>

<style scoped>
.sider{
  position: fixed;
z-index: 999999;
}
.content{
  /*margin-left: 500px;*/
  /*margin-top: 200px;*/
}
</style>