<template>
  <el-scrollbar style="width: 100%;height: 94%">
<div style="width: 100%" class="textform">

  <el-alert
      title="文字编辑"
      type="success"
      description="您可以在此页面编辑卡片文字"
      :closable="false">
  </el-alert>

  <el-form :label-position="labelPosition" label-width="80px" :model="formLabel" style="width: 80%">
    <el-form-item label="">
      <h2>卡片标题</h2>
      <el-input type="textarea" v-model="formLabel.cardtittle" @input="textChanged"></el-input>
    </el-form-item>
    <el-form-item label="" >
      <h2>卡片副标题</h2>
      <el-input type="textarea" v-model="formLabel.cardsubtittle" @input="textChanged"></el-input>
    </el-form-item>
    <el-form-item label="">
      <h2>信息标题</h2>
      <el-input type="textarea" v-model="formLabel.infotittle" @input="textChanged"></el-input>
    </el-form-item>

    <el-form-item label="">
      <h2>信息副标题</h2>
      <el-input type="textarea" v-model="formLabel.infosubtittle" @input="textChanged"></el-input>
    </el-form-item>
  </el-form>

</div>
  </el-scrollbar>
</template>

<script>
export default {
  name: "text",
  data() {
    return {
      labelPosition: 'top',
      formLabel: {
        cardtittle: '',
        cardsubtittle: '',
        infotittle: '',
        infosubtittle: '',
      }
    };
  },
  methods:{
    textChanged(){
      this.$store.commit('SetCardTextForm',this.formLabel);
    },
    initForm:function (){
      this.data.formLabel = this.$store.state.cardtextform
    },


  },
  computed:{




  },
  mounted() {
    this.formLabel = this.$store.state.cardtextform
  }


}
</script>

<style scoped>
.textform{
  color: #63646a;
  width: 100%;
  display: flex;
  display: inline-flex;
  flex-direction : column;
  align-items:center;
  /*justify-content:center;*/
}

.textinput{
  margin-top: -8px;
}
</style>