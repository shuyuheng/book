<template>
  <!-- 组件容器 -->
  <div class="ComponentContainer">
    <!-- 渲染列表 -->
    <component
      :is="item.component"
      :key="item.id"
      :class="{ redact: redact }"
      v-for="(item, i) in children"
      :componentData="item.componentData"
      :indexs="[...indexs, i]"
      :item="item"
      :redact="redact"
      :drawer.sync="drawer"
      @dragend="dragend"
      @handleClose="handleClose(`com${item.id}`)"
      :isDragstart="isDragstart"
      :ref="`com${item.id}`"
    >
      <Utils
        v-if="redact && indexs.length"
        @deleteFn="delComponent([...indexs, i], item)"
        @updateFn="openUpdate(`com${item.id}`)"
      />
      <!-- 递归渲染子级 -->
      <ComponentContainer
        v-if="item.children && item.children.length"
        :children.sync="item.children"
        :indexs="[...indexs, i]"
        :redact="redact"
      />
    </component>
  </div>
</template>

<script>
export default {
  props: {
    children: {
      type: Array,
      required: true,
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
      /* data default start */
      isDragstart: false,
      drawer: false,
      /* data default end */
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      // 监听拖拽开始
      eventBus.$on("dragstart", (flag) => {
        this.isDragstart = flag;
      });
    },
    // 拖拽结束添加
    dragend(indexs, item) {
      this.isDragstart = false;
      eventBus.$emit("append", indexs, item);
    },
    delComponent(indexs, item) {
      this.$confirm("此操作将删除该组件，是否继续?", "删除提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "error",
      })
        .then(() => {
          eventBus.$emit("delete", indexs, item);
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
    openUpdate(refKey) {
      this.$refs[refKey][0].drawer = true;
    },
    handleClose(refKey) {
      this.$refs[refKey][0].drawer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.ComponentContainer {
}
</style>