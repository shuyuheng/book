<template>
  <div class="exhibition center">
    <ComponentContainer
      :children.sync="pageData.components"
      :minID="pageData.minID"
    />
  </div>
</template>

<script>
export default {
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
            children: [
              {
                id: 4,
                parentId: 0,
                componentTitleStr: "图片组件",
                component: "BookImage",
                componentData: {
                  name: "舒榆衡",
                  width: "100%",
                  height: "280px",
                  padding: "10px",
                  margin: "0px",
                  size: "cover",
                  position: "center",
                  value:
                    "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
                },
                children: [],
              },
              {
                id: 5,
                parentId: 0,
                componentTitleStr: "文本组件",
                component: "BookText",
                componentData: { value: "我是文本组件，标签不能解析" },
                children: [],
              },
              {
                id: 6,
                parentId: 0,
                componentTitleStr: "文本组件",
                component: "BookText",
                componentData: { value: "我是文本组件，标签不能解析" },
                children: [],
              },
              {
                id: 7,
                parentId: 0,
                componentTitleStr: "文本组件",
                component: "BookText",
                componentData: { value: "我是文本组件，标签不能解析" },
                children: [],
              },
            ],
          },
        ],
      },
    };
  },
  created() {
    let pageData = localStorage.getItem("pageData");
    if (pageData) this.pageData = JSON.parse(pageData);
  },
  methods: {},
};
</script>

<style lang="scss">
.exhibition {
  height: 100vh;
  background-color: black;
  &>.ComponentContainer{
    background-color: #fff;
  }
}
</style>