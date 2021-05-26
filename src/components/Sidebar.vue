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
      v-if="show"
      :style="{
        left: movement.x + 'px',
        top: movement.y + 'px',
      }"
    >
      <component
        :is="curComponent.component"
        :key="curComponent.id"
        :class="{ redact: false }"
        :componentData="curComponent.componentData"
        :item="curComponent"
        :redact="true"
        :drawer="false"
        @handleClose="handleClose(`com${curComponent.id}`)"
        :ref="`com${curComponent.id}`"
        :isDrage="true"
      >
        <ComponentContainer
          :children.sync="curComponent.children"
          :minID="0"
          :indexs="[]"
          :redact="true"
        />
      </component>
    </div>
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
          componentTitleStr: "图片组件",
          component: "BookImage",
          componentData: {
            name: "舒榆衡",
            width: "auto",
            height: "100px",
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
          id: 0,
          parentId: 0,
          componentTitleStr: "富文本组件",
          component: "BookContent",
          componentData: {
            value: "富文本内容组件，可以解析html标签",
            padding: "0px",
            margin: "0px",
          },
          children: [],
        },
        {
          id: 0,
          parentId: 0,
          componentTitleStr: "视频组件",
          component: "BookVideo",
          componentData: {
            value:
              "https://img.tukuppt.com/video_show/10/00/71/4/5f684cd46b673.mp4",
            width: "60",
            margin: "0px",
          },
          children: [],
        },
        {
          id: 0,
          parentId: 0,
          componentTitleStr: "音频组件",
          component: "BookAudio",
          componentData: {
            value:
              "https://img.tukuppt.com/newpreview_music/08/99/04/5c88da803211726129.mp3",
            width: "60",
            margin: "0px",
          },
          children: [],
        },
        {
          id: 0,
          parentId: 0,
          componentTitleStr: "定位组件",
          component: "BookPosition",
          componentData: {
            padding: "30px",
            margin: "0px",
            x: 0,
            y: 0,
          },
          children: [],
        },
      ],
      curComponent: "",
      show: false,
      movement: {
        x: 0,
        y: 0,
      },
    };
  },
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    init() {
      eventBus.$on("sidebarDragstart", (item) => {
        this.dragstart(item);
      });
    },
    move(e) {
      this.movement = {
        x: e.clientX,
        y: e.clientY,
        dataX: e.offsetX,
        dataY: e.offsetY,
      };
      this.$nextTick(() => {
        this.show = true;
      });
    },
    dragstart(item) {
      // console.log("拖拽开始");
      eventBus.$emit("dragstart");
      this.curComponent = item;
      window.addEventListener("mousemove", this.move);
      window.onmouseup = () => {
        this.dragend(item);
      };
    },
    // 拖拽结束 添加
    dragend(item) {
      let newItem = JSON.parse(JSON.stringify(item));
      if (newItem.componentData.hasOwnProperty("x")) {
        newItem.componentData.x = this.movement.dataX;
        newItem.componentData.y = this.movement.dataY;
      }
      eventBus.$emit("dragend", newItem);
      this.curComponent = "";
      this.show = false;
      window.removeEventListener("mousemove", this.move);
      window.onmouseup = null;
    },
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
    &:hover{
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
    transform: translate(-50%, -50%);
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