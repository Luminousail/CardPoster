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
      <el-button type="primary" round>Download</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header"
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