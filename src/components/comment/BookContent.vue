<template>
  <div
    class="BookContent component"
    title="富文本组件"
    :style="{
      margin: componentData.margin,
    }"
  >
    <div
      class="page_content"
      :style="{
        padding: componentData.padding,
      }"
    >
      <div v-html="componentData.value" />
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
      <el-form ref="form" label-width="80px">
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
        <el-form-item label="内容">
          <div style="padding-right: 20px">
            <Editor ref="editor" :value="componentData.value" />
            <div class="centerR" style="padding-top: 15px">
              <el-button type="primary" @click="setValue">保存</el-button>
              <!-- <el-button type="success">重置</el-button> -->
            </div>
          </div>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import Editor from "../Editor";
export default {
  components: {
    Editor,
  },
  props: {
    componentData: {
      type: [Object, String, Array, Number],
      required: true,
    },
  },
  data() {
    return {
      drawer: false, // 修改弹窗
    };
  },
  created() {},
  methods: {
    setValue() {
      this.componentData.value = this.$refs.editor.getVal();
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.BookContent {
  position: relative;
  user-select: none;
  min-height: 1rem;
  line-height: 1.5;
  // mix-blend-mode: difference;
  .page_content {
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>