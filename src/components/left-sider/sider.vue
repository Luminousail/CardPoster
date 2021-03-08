<template>
<div class="left-sider">
  <div class="left-menu1">
    <button class="sider-button">
      <img class="icon" src="../../assets/icon/card.png">
      <div>卡片</div>
    
    </button>
    <button class="sider-button sider-button-white">
      <img class="icon" src="../../assets/icon/picture.png">
      <div>图片</div>
    </button>

    <button class="sider-button">
      <img class="icon" src="../../assets/icon/QRcode.png">
      <div>二维码</div>
    </button>
  </div>
  <div class="left-menu2">

    <el-row style="margin-left: 8px">
      <el-col :span="11">
        <div class="grid-content bg-purple">
          <img class="cardItem" src="../../assets/test/1.jpg">
        </div>
      </el-col>
      <el-col :span="11">
        <div class="grid-content bg-purple">
          <img class="cardItem" src="../../assets/test/1.jpg">
        </div>
      </el-col>
      <el-col :span="11">
        <div class="grid-content bg-purple">
          <img class="cardItem" src="../../assets/test/1.jpg">
        </div>
      </el-col>
      <el-col :span="11">
        <div class="grid-content bg-purple">
          <img class="cardItem" src="../../assets/test/1.jpg">
        </div>
      </el-col>
    </el-row>


  </div>

</div>
</template>

<script>
export default {
  name: "sider"
}
</script>

<style scoped>
.left-sider{
  height: 100%;
  display: flex;
  display: inline-flex;
  flex-direction : row;
}

.left-menu1{
  display: flex;
  display: inline-flex;
  flex-direction : column;
  box-sizing: border-box;
  width: 70px;
  height: 100%;
  color: #63646a;
  background: #f2f3f9;
  /*box-shadow:0px 10px  10px 5px #bfbfbf;*/
  align-items:center;

}

.left-menu2{
  display: flex;
  display: inline-flex;
  flex-direction : row;

  width: 300px;
  height: 100%;
  color: #409eff;
  background: #ffffff;
  /*box-shadow:20px 20px  30px 0px #bfbfbf;*/

}

.icon{
  margin-top: 12px;
  width: 40px;
}

.cardItem{
  margin-top: 18px;
  margin-left: 24px;
  height: 180px;
}

.sider-button{
  width: 100%;
  cursor:pointer;
  background:  #f2f3f9;

  border:none;

}
.sider-button-white{
  background: #ffffff;
}
:focus{
  outline: 0;
}
</style>