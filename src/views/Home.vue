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
        :indexs="[]"
        :redact="true"
      />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      pageData: {
        minID: 4,
        components: [
          {
            id: 0,
            parentId: 0,
            component: "Page",
            componentData: {},
            children: [],
          },
        ],
      },
    };
  },
  created() {
    eventBus.$on("append", (indexs, item) => {
      this.append(indexs, item);
    });
    eventBus.$on("delete", (indexs, item) => {
      this.delete(indexs, item);
    });
    eventBus.$on("dragendEle", (indexs, item) => {
      this.append(indexs, item);
    });
  },
  methods: {
    addPage() {
      this.append([], {
        id: 0,
        parentId: 0,
        component: "Page",
        componentData: {},
        children: [],
      });
    },
    // 预览
    previewFn() {
      localStorage.setItem("pageData", JSON.stringify(this.pageData));
      let routeData = this.$router.resolve({ path: "/Exhibition" });
      window.open(routeData.href, "_blank");
    },
    // 添加数据
    append(indexs, itemOrignData) {
      let item = JSON.parse(JSON.stringify(itemOrignData));
      console.log(item, "item");
      item.id = this.pageData.minID;
      this.pageData.minID++;
      if (!indexs.length) {
        this.pageData.components.push(item);
        return;
      }
      let list = indexs.reduce((obj, index) => {
        return obj[index].children;
      }, this.pageData.components);
      if (!list) list = [];
      list.push(item);
    },
    delete(indexs, itemOrignData) {
      let lastIndex = indexs.pop();
      let item = JSON.parse(JSON.stringify(itemOrignData));
      let data = indexs.reduce((obj, val, index) => {
        return index == indexs.length - 1 ? obj[val] : obj[val].children;
      }, this.pageData.components);
      console.log("删除", indexs, item, data);
      data.children.splice(lastIndex, 1);
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  height: 100vh;
  padding-left: 460px;
  .sidebar_box {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 3;
    .title {
      font-size: 24px;
      line-height: 30px;
    }
    width: 460px;
    padding: 24px;
    overflow: scroll;
    background-color: #dcdcdc;
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