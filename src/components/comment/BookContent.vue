<template>
  <div
    class="BookContent component"
    title="富文本组件"
    :style="{
      margin: componentData.margin.map((num) => num + 'px').join(' '),
      width: componentData.width + 'px',
      height: componentData.height + 'px',
    }"
  >
    <div
      class="page_content"
      :style="{
        padding: componentData.padding.map((num) => num + 'px').join(' '),
      }"
    >
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
  position: relative;
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