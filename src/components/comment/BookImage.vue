<template>
  <div
    class="Book_image component"
    title="图片组件"
    :style="{
      width: componentData.width,
      height: componentData.height,
      margin: componentData.margin,
    }"
  >
    <div
      class="page_content"
      :style="{
        backgroundImage: `url('${componentData.value}')`,
        backgroundSize: componentData.size,
        backgroundPosition: componentData.position,
        padding: componentData.padding,
      }"
    >
      <slot />
    </div>
    <slot name="utils" />
    <!-- 修改图片 -->
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
            ><span style="font-size: 12px">px</span>
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
          <el-form-item label="图片地址">
            <el-input v-model="componentData.value"></el-input>
          </el-form-item>
          <el-form-item label="图片大小">
            <el-select v-model="componentData.size" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="图片位置">
            <el-select v-model="componentData.position" placeholder="请选择">
              <el-option label="居中" value="center" />
              <el-option label="居上" value="top" />
              <el-option label="居下" value="bottom" />
              <el-option label="居左" value="left" />
              <el-option label="居右" value="right" />
            </el-select>
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
      //
      options: [
        {
          value: "100% 100%",
          label: "拉伸",
        },
        {
          value: "contain",
          label: "包含",
        },
        {
          value: "cover",
          label: "裁切",
        },
      ],
    };
  },
  created() {},
  methods: {
    /* methods default end */
  },
};
</script>

<style lang="scss" scoped>
.Book_image {
  min-width: 50px;
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