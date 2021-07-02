<template>
  <VueDragResize
    class="DataTree"
    :w="dragData.w"
    :h="dragData.h"
    :x="dragData.x"
    :y="dragData.y"
    :z="10"
    @clicked="onActivated"
    v-on:resizing="resize"
    v-on:dragging="resize"
  >
    <div class="content">
      <div class="tree_list">
        <el-tree
          :data="pageData.components"
          :props="defaultProps"
          default-expand-all
        >
          <template slot-scope="{ data }">
            <div class="centerLR" style="width: 100%" @click.stop>
              <div class="center">
                <el-checkbox
                  :value="filterVal(data.id)"
                  @change="!data.lock ? checkChange(data) : ''"
                  v-if="data.component != 'Page'"
                />
                <span
                  class="tree_title"
                  @click="!data.lock ? checkChange(data) : ''"
                  >{{ data.componentTitleStr }}</span
                >
              </div>
              <div class="btns">
                <div @click="moveIndex(data, true)" v-if="!data.lock">上移</div>
                <div @click="moveIndex(data, false)" v-if="!data.lock">
                  下移
                </div>
                <div @click="redactComponent(data)" v-if="!data.lock">编辑</div>
                <div
                  style="color: red"
                  @click="delComponent(data)"
                  v-if="!data.lock"
                >
                  删除
                </div>
                <div
                  style="color: green"
                  @click="data.component == 'Page' ? copyPage(data) : ''"
                  @mousedown.stop="
                    data.component != 'Page' ? copyComponent(data) : ''
                  "
                  v-if="!data.lock"
                >
                  {{ data.component == "Page" ? "复制一页" : "复制" }}
                </div>
                <div
                  style="color: green"
                  @click="
                    data.component == 'Page' ? copyComponent(data, true) : ''
                  "
                  @mousedown.stop="
                    data.component != 'Page' ? copyComponent(data, true) : ''
                  "
                  v-if="data.component != 'Page' && !data.lock"
                >
                  拖动
                </div>
                <div @click="lockToggle(data)" v-if="data.component != 'Page'">
                  <i class="el-icon-lock lock_icon" v-if="data.lock"></i>
                  <i class="el-icon-unlock lock_icon" v-else></i>
                </div>
              </div>
            </div>
          </template>
        </el-tree>
      </div>
      <div class="all-btns">
        <el-button type="text" @click="openDelAll">批量删除</el-button>
      </div>
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
      selectComponents: (state) => state.pageDataModule.selectComponents,
    }),
  },
  data() {
    return {
      dragData: {
        w: 500,
        h: 500,
        x: 20,
        y: 500,
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
      "setPageUpdateComponent",
      "setComponentLock",
      "setSelectComponents",
      "deleteSelectComponents",
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
          if (
            item.component == "Page" &&
            this.pageData.components.length <= 1
          ) {
            // alert('最后一页不能删除')
            this.$message.warning("书籍必须存在一页内容");
            return;
          }
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
      this.setSelectComponents(data);
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
      console.log(data);
      this.setDataIndex({
        id: data.id,
        type,
      });
    },
    // 复制组件
    copyComponent(data, flag) {
      // 重新拖拽
      this.setPageAddComponent(JSON.parse(JSON.stringify(data)));
      if (flag) {
        // 删除自己
        this.pageDataRemove(data.id);
      }
    },
    // 复制页面
    copyPage(data) {
      this.pageDataAdd({
        parentId: 0,
        component: JSON.parse(JSON.stringify(data)),
      });
    },
    // 编辑组件
    redactComponent(data) {
      this.setPageUpdateComponent(data);
    },
    // 锁定 or 解锁组件
    lockToggle(data) {
      // 如果锁定取消选中状态
      if (!data.lock && this.filterVal(data.id)) {
        console.log(data.lock);
        this.checkChange(data);
      }
      this.setComponentLock(data.id);
    },
    // 批量删除前确认框
    openDelAll() {
      if (!this.selectComponents.length)
        return this.$message.warning("未选中组件");
      this.$confirm("此操作将删除这些组件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.deleteSelectComponents();
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
    display: flex;
    flex-direction: column;
    .tree_list {
      .tree_title {
        padding-left: 5px;
      }
      /deep/ {
        .el-tree-node__content {
          height: 40px;
        }
      }
      min-width: 350px;
      .lock_icon {
        font-size: 24px;
        &.el-icon-lock {
          color: red;
        }
        &.el-icon-unlock {
          // color: green;
        }
      }
    }

    .btns {
      display: flex;
      align-items: center;
      & > div {
        margin-right: 5px;
        font-size: 12px;
        color: skyblue;
        &:hover {
          color: orange;
        }
      }
    }
    .all-btns {
      overflow: hidden;
      background-color: #333;
      margin-top: auto;
      padding: 10px;
    }
  }
}
</style>