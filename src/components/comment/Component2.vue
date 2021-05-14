<template>
  <div
    class="Component"
    :class="{ selectBorder: isSelect, redact: redact }"
    @dragenter.stop="dragenter"
    @dragover.stop="(e) => (isDragstart ? e.preventDefault() : '')"
    @dragleave.stop="dragleave"
    @dblclick.stop="redact ? delComponent() : ''"
    title="测试"
  >
    ID:{{ item.id }}-{{ componentData.name || "暂无数据" }}
    <p>{{ indexs }}</p>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
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
  },
  data() {
    return {
      isSelect: false,
      isDragstart: false,
    };
  },
  created() {
    console.log("创建组件2");
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
  methods: {
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
    delComponent() {
      this.$confirm("此操作将删除该组件，是否继续?", "删除提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "error",
      })
        .then(() => {
          eventBus.$emit("delete", this.indexs, this.item);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="scss" soped>
.Component {
  padding: 60px;
  position: relative;
  user-select: none;
  &.redact {
    border: 1px dashed gray;
    &:hover {
      cursor: pointer;
      border-color: orange;
    }
    &:active {
      border-color: red;
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
  & > div {
    position: relative;
  }
}
</style>