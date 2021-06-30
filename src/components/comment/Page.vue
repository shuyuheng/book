<template>
  <div
    class="Page component"
    :style="{
      transform: `scale(${zoom})`,
    }"
  >
    <div class="page_content">
      <slot />
    </div>
    <slot name="utils" />
  </div>
</template>

<script>
export default {
  props: {
    zoom: {
      type: [Number, String],
      default: 1,
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
.Page {
  width: 800px;
  height: 1100px;
  position: relative;
  user-select: none;
  background-color: #fff;
  transform-origin: top left;
  .page_content {
    width: 100%;
    height: 100%;
    overflow: visible;
    position: relative;
    overflow: hidden;
    &:before {
      content: "";
      display: table;
    }
  }
  &.redact {
    width: 802px;
    height: 1102px;
    border: 1px dashed black;
    position: relative;
    &::before {
      user-select: auto;
      position: absolute;
      top: 0;
      left: 0;
      max-width: 450px;
      padding: 6px;
      content: "纸张宽度：800px，纸张高度：1100px,超出隐藏 拖动放入组件";
      transform: translateY(-100%);
      line-height: 1.5;
      font-size: 12px;
      color: red;
    }
  }
}
</style>