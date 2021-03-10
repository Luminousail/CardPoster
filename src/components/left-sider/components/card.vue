<template>
<div>
  <el-alert
      title="选择卡片"
      type="success"
      description="您可以选择喜欢的卡片样式，来制作属于您自己的卡片海报"
      :closable="false">
  </el-alert>
  <el-row style="margin-left: 8px">
    <el-col :span="11">
      <div class="grid-content bg-purple">
        <img class="cardItem" @click="handleAddClick(1)" src="../../../assets/test/1.jpg">
        <h3>{{$store.state.count}}</h3>
      </div>
    </el-col>
    <el-col :span="11">
      <div class="grid-content bg-purple">
        <img class="cardItem" @click="handleReduceClick(1)" src="../../../assets/test/1.jpg">
      </div>
    </el-col>
    <el-col :span="11">
      <div class="grid-content bg-purple">
        <img class="cardItem" src="../../../assets/test/1.jpg">
      </div>
    </el-col>
    <el-col :span="11">
      <div class="grid-content bg-purple">
        <img class="cardItem" src="../../../assets/test/1.jpg">
      </div>
    </el-col>
  </el-row>

</div>
</template>

<script>
export default {
  name: "card",
  methods:{
    card_clicked(index , path){
      this.index_selected = index
      this.$router.push(path);
    },
    handleAddClick(n){
      this.$store.commit('mutationsAddCount',n);
    },
    handleReduceClick(n){
      this.$store.commit('mutationsReduceCount',n);
    }
  }
}
</script>

<style scoped>
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
</style>