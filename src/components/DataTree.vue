<template>
  <VueDragResize
    class="DataTree"
    :w="dragData.w"
    :h="dragData.h"
    :x="dragData.x"
    :y="dragData.y"
    :z="10"
    :parentW="dragData.maxWidth"
    :parentH="dragData.maxHeight"
    :parentLimitation="true"
    @clicked="onActivated"
    v-on:resizing="resize"
    v-on:dragging="resize"
  >
    <div class="content">
      <el-tree
        :data="pageData.components"
        :props="defaultProps"
        default-expand-all
      >
        <template slot-scope="{ node, data }">
          <div class="centerLR" style="width: 100%" @click.stop>
            <div class="center">
              <el-checkbox
                :value="filterVal(data.id)"
                @change="checkChange(data)"
                v-if="data.component != 'Page'"
              />
              <span class="tree_title">{{ node.label }}</span>
            </div>
            <div class="btns">
              <div @click="moveIndex(data, true)">上移</div>
              <div @click="moveIndex(data, false)">下移</div>
              <div style="color: red" @click="delComponent(data)">删除</div>
              <div
                style="color: green"
                @click="data.component == 'Page' ? copyPage(data) : ''"
                @mousedown.stop="
                  data.component != 'Page' ? copyComponent(data) : ''
                "
              >
                复制
              </div>
            </div>
          </div>
        </template>
      </el-tree>
    </div>
  </VueDragResize>
</template>

<script>
import VueDragResize from "vue-drag-resize";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    VueDragResize,
  },
  computed: {
    ...mapState({
      pageData: (state) => state.pageDataModule.pageData,
    }),
  },
  data() {
    return {
      selectComponents: [],
      dragData: {
        w: 320,
        h: 500,
        x: 460,
        y: 20,
        maxWidth: 0,
        maxHeight: 0,
      },
      defaultProps: {
        children: "children",
        label: "componentTitleStr",
      },
    };
  },
  methods: {
    ...mapMutations("pageDataModule", [
      "setDataIndex",
      "pageDataRemove",
      "pageDataAdd",
      "setPageAddComponent",
    ]),
    //   过滤状态
    filterVal(id) {
      let index = this.selectComponents.findIndex((item) => item.id == id);
      let flage = index != -1 ? true : false;
      return flage;
    },
    // 删除
    delComponent(item) {
      this.$confirm(
        `此操作将删除${item.componentTitleStr}，是否继续?`,
        "删除提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "error",
        }
      )
        .then(() => {
          this.pageDataRemove(item.id);
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
    //   切换选中状态
    checkChange(data) {
      let index = this.selectComponents.findIndex((item) => item.id == data.id);
      index == -1
        ? this.selectComponents.push(data)
        : this.selectComponents.splice(index, 1);
    },
    onActivated() {
      let el = window;
      this.dragData.maxWidth = el.innerWidth - 20;
      this.dragData.maxHeight = el.innerHeight - 20;
    },
    // 设置大小位置
    resize(newRect) {
      this.dragData.w = newRect.width;
      this.dragData.h = newRect.height;
      this.dragData.x = newRect.left;
      this.dragData.y = newRect.top;
    },
    // 移动位置
    moveIndex(data, type) {
      this.setDataIndex({
        id: data.id,
        type,
      });
    },
    // 复制组件
    copyComponent(data) {
      // 重新拖拽
      this.setPageAddComponent(JSON.parse(JSON.stringify(data)));
    },
    // 复制页面
    copyPage(data) {
      this.pageDataAdd({
        parentId: 0,
        component: JSON.parse(JSON.stringify(data)),
      });
    },
  },
  watch: {
    selectComponents(val) {
      this.$store.state.pageDataModule.selectComponents = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.DataTree {
  position: fixed !important;
  user-select: none;
  .content {
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #3c4043;
    border-radius: 6px;
    padding: 10px;
    .tree_title {
      padding-left: 5px;
    }
    .btns {
      display: flex;
      & > div {
        margin-right: 5px;
        font-size: 12px;
        color: skyblue;
        &:hover {
          color: orange;
        }
      }
    }
  }
}
</style>