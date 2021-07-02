<template>
  <VueDragResize
    class="demo"
    :w="dragData.w"
    :h="dragData.h"
    :x="dragData.x"
    :y="dragData.y"
    :z="10"
    v-on:resizing="resize"
    v-on:dragging="resize"
  >
    <ComponentContainer
      :children="[pageData.components[0]]"
      :boxSize="{
        width: dragData.w,
        height: dragData.h,
      }"
    />
  </VueDragResize>
</template>

<script>
import VueDragResize from "vue-drag-resize";
export default {
  components: {
    VueDragResize,
  },
  data() {
    return {
      pageData: "",
      curentZoom: 0.5,
      maxZoom: 3,
      minZoom: 0.3,
      curPage: 1,
      pages: 0,
      position: {
        x: 0,
        y: 0,
      },
      search: "",
      //
      dragData: {
        w: 400,
        h: 600,
        x: 0,
        y: 0,
      },
    };
  },
  created() {
    let pageData = localStorage.getItem("pageData");
    if (pageData) this.pageData = JSON.parse(pageData);
    else {
      this.pageData = data;
    }
  },
  methods: {
    // 设置大小位置
    resize(newRect) {
      this.dragData.w = newRect.width;
      this.dragData.h = newRect.height;
      this.dragData.x = newRect.left;
      this.dragData.y = newRect.top;
    },
  },
};
</script>

<style>
.demo {
  background-color: gray;
  overflow: hidden;
}
</style>