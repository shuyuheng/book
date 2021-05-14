<template>
  <div
    class="Book_image"
    :class="{ selectBorder: isSelect, redact: redact }"
    @dragenter.stop="dragenter"
    @dragover.stop.prevent
    @dragover.stop="(e) => (isDragstart ? e.preventDefault() : '')"
    @dragleave.stop="dragleave"
    title="图片组件"
  >
    <div
      class="page_content"
      :style="{
        backgroundImage: `url('${componentData.value}')`,
      }"
    >
      <Utils v-if="redact" @deleteFn="delComponent" @updateFn="openUpdate" />
      <slot />
    </div>
    <!-- 修改图片 -->
    <el-drawer
      title="组件数据"
      :visible.sync="drawer"
      direction="btt"
      :before-close="handleClose"
      :append-to-body="true"
    >
      <div style="padding: 20px">
        <el-input
          type="text"
          v-model="componentData.value"
          style="width: 280px"
        />
      </div>
    </el-drawer>
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
      drawer: false,
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
    // 修改数据弹窗
    openUpdate() {
      this.drawer = true;
    },
    handleClose() {
      this.drawer = false;
    },
    /* methods default end */
  },
};
</script>

<style lang="scss" scoped>
.Book_image {
  height: 200px;
  position: relative;
  user-select: none;
  .page_content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-size: cover;
    background-position: center;
    // https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg
  }
  &.redact {
    border: 1px dashed black;
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