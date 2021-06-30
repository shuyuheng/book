<template>
  <div class="home">
    <div class="sidebar_box">
      <div class="title">组件区域</div>
      <Sidebar />
      <div class="center">
        <el-button
          @click="addPage"
          type="text"
          style="width: 300px; margin-top: 40px"
          >添加页面</el-button
        >
      </div>
      <div class="center">
        <el-button @click="previewFn" style="width: 300px; margin-top: 40px"
          >预览</el-button
        >
      </div>
    </div>
    <div class="book_page">
      <ComponentContainer
        :children="[pageData.components[curPageIndex]]"
        :minID="pageData.minID"
        :redact="true"
        :maxWidth="pageData.components[curPageIndex].componentData.width"
        :maxHeight="pageData.components[curPageIndex].componentData.height"
      />
      <div class="curpage">
        <el-button
          type="text"
          @click="changeCurPage(-1)"
          :disabled="curPageIndex <= 0"
          >上一页</el-button
        >
        <span>{{ curPageIndex + 1 }}</span>
        <el-button
          type="text"
          @click="changeCurPage(1)"
          :disabled="curPageIndex >= pageData.components.length - 1"
          >下一页</el-button
        >
      </div>
    </div>
    <!-- 修改弹窗 -->
    <UpdateComData />
    <!-- tree数据 -->
    <DataTree />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import UpdateComData from "@/components/UpdateComData";
import DataTree from "@/components/DataTree";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Sidebar,
    UpdateComData,
    DataTree,
  },
  computed: {
    ...mapState({
      pageData: (state) => state.pageDataModule.pageData,
    }),
  },
  data() {
    return {
      curPageIndex: 0,
    };
  },
  created() {},
  watch: {
    pageData: {
      handler(val) {
        if (this.curPageIndex >= val.components.length - 1) {
          this.curPageIndex = val.components.length - 1;
        }
      },
      deep: true,
    },
  },
  methods: {
    ...mapMutations("pageDataModule", ["pageDataAdd", "pageDataRemove"]),
    // 修改当前页
    changeCurPage(val) {
      let index = this.curPageIndex;
      index += Number(val);
      this.curPageIndex = index;
    },
    addPage() {
      this.pageDataAdd({
        parentId: 0,
        component: {
          id: 0,
          component: "Page",
          componentTitleStr: "页面",
          componentData: {
            width: 800,
            height: 1100,
          },
          children: [],
        },
      });
      this.curPageIndex = this.pageData.components.length - 1;
    },
    // 预览
    previewFn() {
      localStorage.setItem("pageData", JSON.stringify(this.pageData));
      let routeData = this.$router.resolve({ path: "/Exhibition" });
      window.open(routeData.href, "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  min-height: 100vh;
  padding-left: 460px;
  background-color: #444444;
  user-select: none;
  .sidebar_box {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 10;
    .title {
      font-size: 24px;
      line-height: 30px;
      color: white;
      padding-bottom: 15px;
    }
    width: 460px;
    padding: 24px;
    overflow: auto;
    background-color: #444444;
  }
  .book_page {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    align-items: center;
    .curpage {
      margin-top: 25px;
      width: 800px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 25px;
      span {
        font-size: 18px;
        color: white;
      }
    }
  }
}
</style>