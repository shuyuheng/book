<template>
  <div
    class="utils"
    :class="{ selectBorder: isSelect && pageDragState == true, redact: isShow }"
    @mouseenter.stop="pageDragState ? (isSelect = true) : ''"
    @mouseleave.stop="isSelect = false"
    @click="clickFn"
    @mouseup="isAddPageAddComponent(id)"
    ref="utils"
  >
    <VueDragResize
      v-if="isShow && item.component != 'Page'"
      :isActive="true"
      :isDraggable="item.componentData.hasOwnProperty('x')"
      :aspectRatio="item.componentData.aspectRatio"
      :w="item.componentData.width"
      :h="item.componentData.height"
      :x="item.componentData.x"
      :y="item.componentData.y"
      :parentLimitation="true"
      :parentW="maxWidth"
      :parentH="maxHeight"
      v-on:resizing="resize"
      v-on:dragging="resize"
    >
      <div class="centerR page_content" v-if="isShow">
        <el-button
          type="text"
          @click.stop="redactComponent"
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
      <div class="size_info">
        <span>{{ item.componentData.x }}*{{ item.componentData.y }}</span>
        <span style="padding: 0 3px">/</span>
        <span
          >{{ item.componentData.width }}*{{ item.componentData.height }}</span
        >
      </div>
    </VueDragResize>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import VueDragResize from "vue-drag-resize";
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
  components: {
    VueDragResize,
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
      // 父级组件
      parentEle: "",
      maxWidth: 800,
      maxHeight: 1100,
    };
  },
  created() {
    document.documentElement.addEventListener("click", (e) => {
      if (e.target != this.$refs.utils) this.isShow = false;
    });
  },
  mounted() {
    // 获取外层元素宽高
    this.getMaxSize();
  },
  methods: {
    ...mapMutations("pageDataModule", [
      "pageDataAdd",
      "pageDataRemove",
      "isAddPageAddComponent",
      "setPageAddComponent",
      "setPageUpdateComponent",
    ]),
    clickFn() {
      this.isShow = true;
      // 编辑之前计算一下最大宽高
      this.getMaxSize();
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
    // 获取最大宽高
    getMaxSize() {
      const parentEle = this.$refs.utils.parentElement.parentElement
        .parentElement;
      this.parentEle = parentEle;
      let maxWidth = this.parentEle.offsetWidth;
      let maxHeight = this.parentEle.offsetHeight;
      // 不计算剩余宽高 父组件宽高为最大宽高
      if (this.item.componentData.noComputedSize) {
      } else {
        let childrenEle = this.parentEle.querySelectorAll(".computed-height");
        childrenEle = childrenEle[childrenEle.length - 1];
        maxHeight = childrenEle.offsetHeight + this.item.componentData.height;
      }
      // 重新赋值最大宽高
      this.maxWidth = maxWidth;
      this.maxHeight = maxHeight;
      // console.log("最大宽高 =>", this.maxWidth, this.maxHeight);
      // 判断如果是否超过最大宽高
      if (this.item.componentData.width > maxWidth) {
        this.item.componentData.width = maxWidth;
      }
      if (this.item.componentData.width > maxWidth) {
        this.item.componentData.height = maxHeight;
      }
    },
    // 设置大小位置
    resize(newRect) {
      this.item.componentData.width = newRect.width;
      this.item.componentData.height = newRect.height;
      if (this.item.componentData.hasOwnProperty("x")) {
        this.item.componentData.x = newRect.left;
        this.item.componentData.y = newRect.top;
      }
    },
    // 编辑组件
    redactComponent() {
      this.setPageUpdateComponent(this.item);
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
  .vdr,
  .vdr.active:before {
    left: 0 !important;
    top: 0 !important;
  }
  .page_content {
    position: absolute;
    right: 4px;
    top: 4px;
  }
  .size_info {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: white;
    padding: 6px;
    background-color: rgba(black, 0.5);
  }
  .el-button--text {
    color: red;
    letter-spacing: 3px;
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>