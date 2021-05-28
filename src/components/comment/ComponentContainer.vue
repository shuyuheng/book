<template>
  <!-- 组件容器 -->
  <div class="ComponentContainer">
    <!-- 渲染列表 -->
    <component
      :is="item.component"
      :key="item.id"
      :class="{ redact: redact }"
      v-for="item in children"
      :componentData="item.componentData"
      :item="item"
      :drawer.sync="drawer"
      @handleClose="handleClose(`com${item.id}`)"
      :zoom="zoom"
    >
      <utils
        slot="utils"
        v-if="redact"
        :id="item.id"
        :item="item"
        :isDragstart="isDragstart"
      />
      <!-- 递归渲染子级 -->
      <ComponentContainer
        v-if="item.children && item.children.length"
        :children.sync="item.children"
        :redact="redact"
      />
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
      default: 1,
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