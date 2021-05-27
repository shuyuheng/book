<template>
  <div
    class="utils"
    :class="{ selectBorder: isSelect && pageDragState == true, redact: isShow }"
    @mouseenter.stop="pageDragState ? (isSelect = true) : ''"
    @mouseleave.stop="isSelect = false"
    @click="clickFn"
    @mouseup="isAddPageAddComponent(id)"
    ref="util"
  >
    <div class="centerR page_content" v-if="isShow">
      <el-button
        type="text"
        @click.stop="$emit('updateFn')"
        v-if="item.component != 'Page'"
        >编辑</el-button
      >
      <el-button type="text" @click.stop="delComponent">删除</el-button>
      <div
        v-if="item.component != 'Page'"
        class="el-button--text"
        type="text"
        style="cursor: all-scroll; margin-left: 6px"
        @mousedown.stop="dragstart"
      >
        拖动
      </div>
    </div>
    <!-- 缩放按钮 -->
    <div
      class="zoom_btns"
      v-if="isShow"
      @mousedown="zoomStart"
      @mouseup="zoomEnd"
    >
      <i v-for="i in 8" :key="i" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({
      pageDragState: (state) => state.pageDataModule.pageDragState,
      pageAddComponent: (state) => state.pageDataModule.pageAddComponent,
      pageAddComponent: (state) => state.pageDataModule.pageAddComponent,
    }),
  },
  data() {
    return {
      isSelect: false, //是否向该组件内部插入组件
      isShow: false,
    };
  },
  created() {
    document.documentElement.addEventListener("click", (e) => {
      if (e.target != this.$refs.util) this.isShow = false;
    });
  },
  methods: {
    ...mapMutations("pageDataModule", [
      "pageDataAdd",
      "pageDataRemove",
      "isAddPageAddComponent",
      "setPageAddComponent",
    ]),
    clickFn() {
      this.isShow = true;
    },
    dragstart() {
      // 重新拖拽
      this.setPageAddComponent(this.item);
      // 删除自己
      this.pageDataRemove(this.id);
    },
    // 删除
    delComponent() {
      this.$confirm(
        `此操作将删除${this.item.componentTitleStr}，是否继续?`,
        "删除提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "error",
        }
      )
        .then(() => {
          this.pageDataRemove(this.id);
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
    // 设置拉伸大小
    zoomStart(e) {
      window.addEventListener("mousemove", this.moveResize);
    },
    zoomEnd() {
      console.log('抬起');
      window.removeEventListener("mousemove", this.moveResize);
    },
    moveResize(e) {
      console.log(e);
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
  &.redact {
    border: 1px dashed black;
    box-shadow: 0 0 0 5px #ffd539 inset;
    cursor: pointer;
  }
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
  .zoom_btns {
    $size: 5px;
    i {
      display: block;
      position: absolute;
      width: $size;
      height: $size;
      background-color: red;
      &:nth-of-type(1) {
        top: 0px;
        left: 0px;
        cursor: nw-resize;
      }
      &:nth-of-type(2) {
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        cursor: n-resize;
      }
      &:nth-of-type(3) {
        top: 0px;
        right: 0px;
        cursor: ne-resize;
      }
      &:nth-of-type(4) {
        top: 50%;
        right: 0px;
        transform: translateY(-50%);
        cursor: e-resize;
      }
      &:nth-of-type(5) {
        bottom: 0px;
        right: 0px;
        cursor: se-resize;
      }
      &:nth-of-type(6) {
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        cursor: s-resize;
      }
      &:nth-of-type(7) {
        left: 0px;
        bottom: 0px;
        cursor: sw-resize;
      }
      &:nth-of-type(8) {
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
        cursor: w-resize;
      }
    }
  }
}
</style>