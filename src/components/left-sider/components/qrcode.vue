<template>
  <div style="width: 100%">
    <el-alert
        title="生成二维码"
        type="success"
        description="您可以将网络资源的地址输入到下面的文本框，点击生成按钮生成二维码"
        :closable="false">
    </el-alert>
    <div class="qrfrom">
      <el-input
          style="width: 80%;margin-top: 24px"
          type="textarea"
          autosize
          placeholder="请输入URL地址"
          v-model="url">
      </el-input>

      <el-button type="primary" style="margin-top: 18px" @click="handleSetUrl(url)"  >生成二维码</el-button>


    </div>


  </div>
</template>

<script>
export default {
  name: "qrcode",
  data(){
    return{
      url:""
    }
  },
  methods:{
    handleSetUrl(url){
      this.$store.commit('mutationsSetQRtext',url);
    }
  }
}
</script>

<style scoped>
.qrfrom{
  width: 100%;
  display: flex;
  display: inline-flex;
  flex-direction : column;
  align-items:center;
  justify-content:center;;
}
</style>