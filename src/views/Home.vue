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
        :children.sync="pageData.components"
        :minID="pageData.minID"
        :redact="true"
      />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    Sidebar,
  },
  computed: {
    ...mapState({
      pageData: (state) => state.pageDataModule.pageData,
    }),
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    ...mapMutations("pageDataModule", ["pageDataAdd", "pageDataRemove"]),
    addPage() {
      this.pageDataAdd({
        parentId: 0,
        component: {
          id: 0,
          component: "Page",
          componentData: {},
          children: [],
        },
      });
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
  .sidebar_box {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 3;
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
  }
}
</style>