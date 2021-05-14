<template>
  <div
    class="component"
    :class="{ selectBorder: isSelect }"
    @dragenter.stop="dragenter"
    @dragover.stop.prevent
    @dragover.stop="(e) => (isDragstart ? e.preventDefault() : '')"
    @dragleave.stop="dragleave"
  >
    ID:{{ item.id }}-{{ componentData.name || "暂无数据" }}
    <p>{{ indexs }}</p>
    <slot />
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
.component {
  padding: 30px;
  background-color: pink;
  position: relative;
  user-select: none;
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