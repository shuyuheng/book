<template>
  <div
    class="BookPosition component"
    :class="{ redact: redact, isDrage: isDrage }"
    title="定位组件"
    ref="positionRef"
    :style="{
      left: componentData.x + 'px',
      top: componentData.y + 'px',
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
      <slot />
    </div>
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
    redact: {
      type: Boolean,
      default: false,
    },
    // 是否在拖动状态
    isDrage: {
      type: Boolean,
      default: false,
    },
    /* props default end */
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.BookPosition {
  position: absolute;
  user-select: none;
  z-index: 4;
  &.redact {
    background-color: rgba(orange, 0.3);
    background-image: url("../../assets/img/opacity.png");
    background-size: 200px;
    background-position: center;
  }
  &.isDrage {
    left: 0 !important;
    top: 0 !important;
  }

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