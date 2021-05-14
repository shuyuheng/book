<template>
  <div class="home">
    <div class="sidebar_box">
      <div class="title">组件区域</div>
      <Sidebar />
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
  },
  methods: {
    // 添加数据
    append(indexs, itemOrignData) {
      let item = JSON.parse(JSON.stringify(itemOrignData));
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
  .sidebar_box {
    width: 460px;
    padding: 24px;
  }
  .book_page {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>