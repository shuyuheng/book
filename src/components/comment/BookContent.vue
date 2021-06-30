<template>
  <div
    class="BookContent component"
    :class="{ isDrage: isDrage }"
    :style="{
      width: componentData.width + 'px',
      height: componentData.height + 'px',
      left: componentData.x + 'px',
      top: componentData.y + 'px',
    }"
  >
    <div class="page_content">
      <div v-html="componentData.html" />
      <slot />
    </div>
    <slot name="utils" />
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
    // 是否在拖动状态
    isDrage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.BookContent {
  user-select: none;
  min-height: 1rem;
  line-height: 1.5;
  padding: 1em;
  // mix-blend-mode: difference;
  .page_content {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
}
</style>