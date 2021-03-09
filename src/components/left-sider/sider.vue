<template>
<div class="left-sider">
  <div class="left-menu1">
    <button v-for="(item , index) in buttonList" :key="index" @click="button_clicked(index , item.path)" :class="index == index_selected? 'sider-button sider-button-white':'sider-button'">

      <img class="icon " :src="item.icon">
      <div>{{item.name}}</div>

    </button>
<!--    <button class="sider-button sider-button-white">-->
<!--      <img class="icon" src="../../assets/icon/picture.png">-->
<!--      <div>图片</div>-->
<!--    </button>-->

<!--    <button class="sider-button">-->
<!--      <img class="icon" src="../../assets/icon/QRcode.png">-->
<!--      <div>二维码</div>-->
<!--    </button>-->
  </div>
  <div class="left-menu2">

    <router-view></router-view>


  </div>

</div>
</template>

<script>
export default {
  name: "sider",
  data(){
    return {
      index_selected:0,
      buttonList:[
        {name:"卡片",icon: require('../../assets/icon/card.png') , path:"/card"},
        {name:"图片",icon: require('../../assets/icon/picture.png'), path:"/picture"},
        {name:"二维码",icon: require('../../assets/icon/QRcode.png'), path:"/qrcode"},
        // {name:"图片",icon:"../../assets/icon/card.png"},

      ]
    }

  },
  methods:{
    button_clicked(index , path){
      this.index_selected = index
      this.$router.push(path);
    }
  }
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