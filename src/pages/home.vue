<template>
  <div>
    <vHeader></vHeader>
    <vsider class="sider"></vsider>
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
export default {
  name: "首页",
  components: {vHeader
  ,vsider}
}
</script>

<style scoped>
.sider{
  position: fixed;
z-index: 999999;
}

</style>