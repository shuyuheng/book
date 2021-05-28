<template>
  <div
    class="Book_image component"
    title="图片组件"
    :style="{
      width: componentData.width + 'px',
      height: componentData.height + 'px',
      margin: componentData.margin.map((num) => num + 'px').join(' '),
    }"
  >
    <div
      class="page_content"
      :style="{
        backgroundImage: `url('${componentData.value}')`,
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
    /* props default end */
  },
  data() {
    return {
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
    padding: 50px 25px;
  }
}
</style>