<template>
  <div
    class="BookAudio component"
    title="音频组件"
    :style="{
      width: componentData.width,
      height: componentData.height,
      margin: componentData.margin,
    }"
  >
    <div
      class="page_content"
      :style="{
        backgroundSize: componentData.size,
        backgroundPosition: componentData.position,
        padding: componentData.padding,
      }"
    >
      <div class="center" style="width: 1005;">
        <audio :src="componentData.value" controls></audio>
      </div>
      <slot />
    </div>
    <slot name="utils" />
    <!-- 修改 -->
    <el-drawer
      title="组件数据"
      :visible.sync="drawer"
      direction="btt"
      :before-close="
        () => {
          $emit('handleClose');
        }
      "
      :append-to-body="true"
      size="60%"
    >
      <div style="padding: 20px" @click.stop>
        <el-form ref="form" label-width="80px">
          <el-form-item label="宽度">
            <el-input
              v-model="componentData.width"
              style="width: 280px"
            ></el-input
            ><span style="font-size: 12px"> %/px</span>
          </el-form-item>
          <el-form-item label="高度">
            <el-input
              v-model="componentData.height"
              style="width: 280px"
            ></el-input
            ><span style="font-size: 12px"> %/px</span>
          </el-form-item>
          <el-form-item label="外边距">
            <el-input
              v-model="componentData.margin"
              style="width: 280px"
            ></el-input
            ><span style="font-size: 12px"> %/px</span>
          </el-form-item>
          <el-form-item label="内边距">
            <el-input
              v-model="componentData.padding"
              style="width: 280px"
            ></el-input
            ><span style="font-size: 12px"> %/px</span>
          </el-form-item>
          <el-form-item label="音频地址">
            <el-input v-model="componentData.value"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  props: {
    /* props default start */
    componentData: {
      type: [Object, String, Array, Number],
      required: true,
    },
    item: {
      type: Object,
      default: "",
    },
    /* props default end */
  },
  data() {
    return {
      drawer: false, // 修改弹窗
    };
  },
  created() {},
  methods: {
    /* methods default end */
  },
};
</script>

<style lang="scss" scoped>
.BookAudio {
  height: 200px;
  position: relative;
  user-select: none;
  .page_content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    background-size: cover;
    position: relative;
  }
}
</style>