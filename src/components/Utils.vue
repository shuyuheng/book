<template>
  <div
    class="utils"
    :class="{ selectBorder: isSelect, redact: isShow }"
    @mouseenter="isDragstart ? (isSelect = true) : ''"
    @mouseleave="isSelect = false"
    @click="clickFn"
    ref="util"
  >
    <div class="centerR page_content" v-if="indexs.length - 1 && isShow">
      <el-button type="text" @click.stop="$emit('updateFn')">编辑</el-button>
      <el-button type="text" @click.stop="$emit('deleteFn')">删除</el-button>
      <div
        class="el-button--text"
        type="text"
        style="cursor: all-scroll; margin-left: 6px"
        @mousedown.stop="dragstart"
      >
        拖动
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    indexs: {
      type: Array,
      default() {
        return [];
      },
    },
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isDragstart: false,
      isSelect: false, //是否向该组件内部插入组件
      isShow: false,
    };
  },
  created() {
    this.init();
    document.documentElement.addEventListener("click", (e) => {
      if (e.target != this.$refs.util) this.isShow = false;
    });
  },
  methods: {
    clickFn() {
      this.isShow = true;
    },
    dragstart() {
      eventBus.$emit("sidebarDragstart", this.item);
      eventBus.$emit("delete", this.indexs, this.item);
    },
    init() {
      // 监听拖拽开始
      eventBus.$on("dragstart", (flag) => {
        this.isDragstart = true;
      });
      eventBus.$on("dragend", () => {
        this.isDragstart = false;
      });
      eventBus.$on("dragendEle", () => {
        this.isDragstart = false;
      });
      eventBus.$on("dragend", (item) => {
        if (this.isSelect) {
          console.log(3);
          eventBus.$emit("dragendEle", this.indexs, item);
          this.isSelect = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.utils {
  position: absolute !important;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  padding: 10px 15px;
  .page_content {
    position: absolute;
    right: 4px;
    top: 4px;
  }
  .el-button--text {
    color: red;
    letter-spacing: 3px;
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>