<template>
<div class="cardroot">
  <el-alert
      title="选择卡片"
      type="success"
      description="您可以选择喜欢的卡片样式，来制作属于您自己的卡片海报"
      :closable="false">
  </el-alert>
  <el-row style="margin-left: 8px">
    <el-col :span="11" v-for="(item , index) in cardList" :key="index">
      <div class="grid-content bg-purple imgborder" >
        <img class="cardItem" @click="handleSetCard(item.model)" :src="item.img">
<!--        <h3>{{$store.state.count}}</h3>-->

      </div>
    </el-col>

  </el-row>

</div>
</template>

<script>
export default {
  name: "card",
  data(){
    return{
      cardList:[
        {img:require("../../../assets/model/model1.jpg"),model:1},
        // {img:require("../../../assets/test/2.jpg")},
        // {img:require("../../../assets/test/3.jpg")},
        // {img:require("../../../assets/test/4.jpg")},
      ]
    }
  },
  methods:{
    card_clicked(index , path){
      this.index_selected = index
      this.$router.push(path);
    },

    handleSetCard(model){
      // this.$store.commit('mutationsSetBackground',img);
      this.$store.commit('SetCardModel',model);


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
/*.cardroot{*/
/*  background: #deedff;*/
/*}*/

.cardItem{
  margin-top: 18px;
  margin-left: 24px;
  height: 180px;
  box-shadow:5px 5px  7px 1px #a5a5a5;

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

.imgborder{
  border: 5px;
  border-color: #63646a;
}
</style>