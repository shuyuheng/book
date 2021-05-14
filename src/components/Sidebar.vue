<template>
  <div class="sidebar">
    <button
      @dragstart.stop="dragstart"
      draggable="true"
      @dragend.stop="dragend(item)"
      v-for="item in components"
      :key="item.componentTitleStr"
    >
      {{ item.componentTitleStr }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      components: [
        {
          id: 0,
          parentId: 0,
          componentTitleStr: "组件1",
          component: "Component1",
          componentData: {
            name: "舒榆衡",
          },
          children: [],
        },
        {
          id: 0,
          parentId: 0,
          componentTitleStr: "组件2",
          component: "Component2",
          componentData: {
            name: "舒榆衡",
          },
          children: [],
        },
        {
          id: 0,
          parentId: 0,
          componentTitleStr: "图片组件",
          component: "BookImage",
          componentData: {
            name: "舒榆衡",
          },
          children: [],
        },
      ],
    };
  },
  methods: {
    dragstart(e) {
      // console.log("拖拽开始");
      eventBus.$emit("dragstart", true);
    },
    dragend(item) {
      eventBus.$emit("dragend", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
}
</style>