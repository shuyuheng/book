<template>
  <div
    class="Book_image component"
    :class="{ isDrage: isDrage }"
    :style="{
      width: componentData.width + 'px',
      height: componentData.height + 'px',
      left: componentData.x + 'px',
      top: componentData.y + 'px',
    }"
  >
    <div
      class="page_content"
      :style="{
        backgroundImage: `url('${componentData.value}')`,
        backgroundColor: componentData.bgColor,
        borderRadius: componentData.borderRadius + 'px',
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
  methods: {
    /* methods default end */
  },
};
</script>

<style lang="scss" scoped>
.Book_image {
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