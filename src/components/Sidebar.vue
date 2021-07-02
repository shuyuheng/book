<template>
  <div class="sidebar">
    <div
      v-for="item in components"
      :key="item.componentTitleStr"
      class="component_item center"
    >
      {{ item.componentTitleStr }}
      <div
        class="container"
        @mousedown="dragstart(item)"
        @mouseup="dragend(item)"
      ></div>
    </div>
    <div
      class="component_content"
      v-if="pageDragState"
      :style="{
        left: movement.x + 'px',
        top: movement.y + 'px',
      }"
    >
      <component
        :is="pageAddComponent.component"
        :key="pageAddComponent.id"
        :class="{ redact: true }"
        :componentData="pageAddComponent.componentData"
        :item="pageAddComponent"
        :redact="true"
        :drawer="false"
        @handleClose="handleClose(`com${pageAddComponent.id}`)"
        :ref="`com${pageAddComponent.id}`"
        :isDrage="true"
      >
        <ComponentContainer
          :children.sync="pageAddComponent.children"
          :redact="true"
        />
      </component>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      components: [
        {
          id: 0,
          parentId: 0,
          componentTitleStr: "背景容器",
          component: "BookImage",
          lock: false,
          componentData: {
            width: 200,
            height: 200,
            x: 0,
            y: 0,
            value:
              "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
            bgColor: "",
            borderRadius: 0,
          },
          children: [],
        },
        {
          id: 0,
          parentId: 0,
          componentTitleStr: "富文本组件",
          component: "BookContent",
          lock: false,
          componentData: {
            html: "富文本内容组件，可以解析html标签",
            width: 150,
            height: 150,
            x: 0,
            y: 0,
            fontFamily: "Microsoft YaHei",
          },
          children: [],
        },
        {
          id: 0,
          parentId: 0,
          componentTitleStr: "视频组件",
          component: "BookVideo",
          lock: false,
          componentData: {
            value:
              "https://img.tukuppt.com/video_show/10/00/71/4/5f684cd46b673.mp4",
            width: 60,
            aspectRatio: true,
            x: 0,
            y: 0,
          },
          children: [],
        },
        {
          id: 0,
          parentId: 0,
          componentTitleStr: "音频组件",
          component: "BookAudio",
          lock: false,
          componentData: {
            value:
              "https://img.tukuppt.com/newpreview_music/08/99/04/5c88da803211726129.mp3",
            width: 60,
            aspectRatio: true,
            x: 0,
            y: 0,
          },
          children: [],
        },
      ],
    };
  },
  computed: {
    ...mapState({
      pageDragState: (state) => state.pageDataModule.pageDragState,
      pageAddComponent: (state) => state.pageDataModule.pageAddComponent,
      movement: (state) => state.pageDataModule.movement,
    }),
  },
  created() {},
  mounted() {
    window.addEventListener("mousemove", this.move);
    window.addEventListener("mouseup", this.dragend);
  },
  methods: {
    // pagedata 模块方法
    ...mapMutations("pageDataModule", [
      "setPageDragState",
      "setPageAddComponent",
      "setMovement",
    ]),
    // 移动监听鼠标位置
    move(e) {
      let movement = {
        x: e.clientX,
        y: e.clientY,
        dataX: e.offsetX,
        dataY: e.offsetY,
      };
      this.setMovement(movement);
    },
    // 开始拖拽
    dragstart(item) {
      this.setPageAddComponent(item);
    },
    // 拖拽结束 添加
    dragend() {
      this.setPageAddComponent("");
    },
  },
  destroyed() {
    window.removeEventListener("mousemove", this.move);
    window.removeEventListener("mouseup", this.dragend);
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  .component_item {
    height: 40px;
    background-color: #3c4043;
    cursor: pointer;
    margin: 2px 0;
    position: relative;
    user-select: none;
    color: white;
    &:hover {
      color: orange;
    }
    .container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: transparent;
    }
  }
  .component_content {
    position: fixed;
    top: 0px;
    left: 0px;
    // width: 400px;
    // transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 88;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 99;
    }
  }
}
</style>