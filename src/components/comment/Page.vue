<template>
  <div
    class="Page"
    :class="{ selectBorder: isSelect, redact: redact }"
    @dragenter.stop="dragenter"
    @dragover.stop.prevent
    @dragover.stop="(e) => (isDragstart ? e.preventDefault() : '')"
    @dragleave.stop="dragleave"
  >
    <div class="page_content">
      <slot />
    </div>
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
    indexs: {
      type: Array,
      default() {
        return [];
      },
    },
    redact: {
      type: Boolean,
      default: false,
    },
    /* props default end */
  },
  data() {
    return {
      /* data default start */
      isSelect: false,
      isDragstart: false,
      /* data default end */
    };
  },
  created() {
    this.init();
  },
  methods: {
    /* methods default start */
    init() {
      // 监听拖拽开始
      eventBus &&
        eventBus.$on("dragstart", (flag) => {
          this.isDragstart = flag;
        });
      // 监听拖拽结束
      eventBus &&
        eventBus.$on("dragend", (item) => {
          this.dragend(item);
        });
    },
    dragenter(e) {
      if (this.isDragstart) this.isSelect = true;
    },
    dragleave() {
      this.isSelect = false;
    },
    dragend(item) {
      this.isDragstart = false;
      if (this.isSelect) {
        eventBus.$emit("append", this.indexs, item);
        this.isSelect = false;
      }
    },
    /* methods default end */
  },
};
</script>

<style lang="scss" scoped>
.Page {
  width: 800px;
  height: 1100px;
  position: relative;
  user-select: none;
  .page_content {
    width: 100%;
    height: 100%;
    overflow: hidden;
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
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: 2;
  }
  & > div {
    position: relative;
    z-index: 3;
  }
}
</style>