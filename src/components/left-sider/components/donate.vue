<template>
  <div style="width: 100%" class="donateroot">
    <el-alert
        title="爱心捐助"
        type="success"
        description="如果您喜欢我所开发的应用，欢迎进行爱心捐助，所获得的所有收益将用于服务器维护与新功能的开发"
        :closable="false">
    </el-alert>

    <img src="../../../../src/assets/picture/paycode.jpg" style="width: 180px;margin-top: 30px">

</div>
</template>

<script>
export default {
  name: "donate"
}
</script>

<style scoped>
.donateroot{
  width: 100%;
  display: flex;
  display: inline-flex;
  flex-direction : column;
  align-items:center;
}
</style>