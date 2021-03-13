<template>
  <div class="block" style="width: 96%;">
    <el-alert
        title="版本日志"
        type="success"
        description="此页面记录了CardPoster的迭代更新记录"
        :closable="false">
    </el-alert>
    <el-scrollbar style="width: 100%;height: 86%">
    <el-timeline style="margin-top: 8px;margin-left: -28px">

      <el-timeline-item timestamp="2021/03/08" placement="top">
        <el-card>
          <h4>v0.0.0</h4>
          <p>CardPoster正式开始开发</p>
        </el-card>
      </el-timeline-item>


<!--      <el-timeline-item timestamp="2018/4/3" placement="top">-->
<!--        <el-card>-->
<!--          <h4>更新 Github 模板</h4>-->
<!--          <p>王小虎 提交于 2018/4/3 20:46</p>-->
<!--        </el-card>-->
<!--      </el-timeline-item>-->
<!--      <el-timeline-item timestamp="2018/4/2" placement="top">-->
<!--        <el-card>-->
<!--          <h4>更新 Github 模板</h4>-->
<!--          <p>王小虎 提交于 2018/4/2 20:46</p>-->
<!--        </el-card>-->
<!--      </el-timeline-item>-->


    </el-timeline>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "log"
}
</script>

<style scoped>

</style>