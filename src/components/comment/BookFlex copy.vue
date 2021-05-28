<template>
  <div
    class="BookFlex component"
    :style="{
      width: componentData.width + 'px',
      height: componentData.height + 'px',
      margin: componentData.margin.map((num) => num + 'px').join(' '),
    }"
  >
    <!-- 页面主要内容取悦 -->
    <div
      class="page_content"
      :style="{
        padding: componentData.padding.map((num) => num + 'px').join(' '),
      }"
    >
      <slot />
    </div>
    <!-- 工具箱 -->
    <slot name="utils" />
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
};
</script>

<style lang="scss" scoped>
.BookFlex {
  &.redact {
    background-color: rgba(gray, 0.5);
  }
  .page_content {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>