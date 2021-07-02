<template>
  <!-- 组件容器 -->
  <div class="ComponentContainer">
    <!-- 渲染列表 -->
    <component
      :is="item.component"
      :key="item.id"
      :class="{ redact: redact, lock: redact && item.lock }"
      v-for="item in children"
      :componentData="item.componentData"
      :item="item"
      :drawer.sync="drawer"
      @handleClose="handleClose(`com${item.id}`)"
      :zoom="zoom"
      :title="item.componentTitleStr"
      :boxSize="boxSize"
    >
      <utils
        slot="utils"
        v-if="redact"
        :id="item.id"
        :item="item"
        :isDragstart="isDragstart"
        :maxWidth="maxWidth"
        :maxHeight="maxHeight"
      />
      <!-- 递归渲染子级 -->
      <ComponentContainer
        v-if="item.children && item.children.length"
        :children.sync="item.children"
        :redact="redact"
        :maxWidth="item.componentData.width"
        :maxHeight="item.componentData.height"
      />
      <!-- 计算剩余高度的元素 必须在组件之后 -->
      <div class="computed-height" />
    </component>
  </div>
</template>

<script>
import Utils from "../Utils.vue";
export default {
  name: "ComponentContainer",
  components: { Utils },
  props: {
    children: {
      type: Array,
      required: true,
    },
    redact: {
      type: Boolean,
      default: false,
    },
    zoom: {
      type: [Number, String],
      default: "auto",
    },
    maxWidth: {
      type: [Number, String],
      default: 200,
    },
    maxHeight: {
      type: [Number, String],
      default: 200,
    },
    // 外部元素宽高
    boxSize: {
      type: [Object, String],
      default: () => {
        return "";
      },
    },
  },
  data() {
    return {
      /* data default start */
      isDragstart: false,
      drawer: false,
      /* data default end */
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.ComponentContainer {
}
</style>