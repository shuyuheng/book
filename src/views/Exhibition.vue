<template>
  <div class="exhibition">
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
            component: "Component1",
            componentData: {
              name: "舒榆衡",
            },
            children: [
              {
                id: 1,
                parentId: 0,
                component: "Component2",
                componentData: {},
                children: [
                  {
                    id: 2,
                    parentId: 1,
                    component: "Component1",
                    componentData: {},
                    children: [],
                  },
                ],
              },
              {
                id: 3,
                parentId: 0,
                component: "Component2",
                componentData: {
                  name: "张冰雪",
                },
                children: [],
              },
              {
                id: 4,
                parentId: 0,
                component: "BookImage",
                componentData: {
                  value:
                    "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                  width: "600px",
                  height: "800px",
                },
                children: [],
              },
            ],
          },
        ],
      },
    };
  },
  created() {},
  methods: {},
};
</script>

<style>
.exhibition {
}
</style>