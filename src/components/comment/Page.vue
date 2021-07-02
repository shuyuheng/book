<template>
  <div
    class="Page component"
    :style="{
      transform: `scale(${computedZoom})`,
    }"
    ref="page"
  >
    <div class="page_content">
      <slot />
    </div>
    <slot name="utils" />
  </div>
</template>

<script>
export default {
  props: {
    zoom: {
      type: [Number, String],
      default: "auto",
    },
    /* props default start */
    componentData: {
      type: [Object, String, Array, Number],
      required: true,
    },
    item: {
      type: Object,
      default: "",
    },
    // 是否在拖动状态
    isDrage: {
      type: Boolean,
      default: false,
    },
    /* props default end */
    // 外部元素宽高
    boxSize: {
      type: [Object, String],
      default: () => {
        return "";
      },
    },
  },
  data() {
    return {
      componentZoom: 1,
      cWidth: 800,
      cHeight: 1100,
      events: [""],
    };
  },
  computed: {
    computedZoom() {
      if (this.zoom != "auto") return this.zoom;
      else return this.componentZoom;
    },
  },
  created() {
    // console.log(this.componentData);
  },
  mounted() {
    window.addEventListener("resize", this.resize);
    // 后期执行函数
    for (let i = 0; i < this.events.length; i++) {
      let key = this.events[i];
      this.$nextTick(this[key]);
    }
  },
  watch: {
    boxSize: {
      handler() {
        this.resize();
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    resize() {
      if (!this.$refs.page) {
        this.events.push("resize");
        return;
      }
      if (this.boxSize) {
        this.cWidth = this.boxSize.width;
        this.cHeight = this.boxSize.height;
      } else {
        let container = this.$refs.page.parentElement.parentElement;
        this.cWidth = container.offsetWidth;
        this.cHeight = container.offsetHeight;
      }
      this.setZoome();
    },
    // 设置缩放
    setZoome() {
      let width = this.componentData.width;
      let height = this.componentData.height;
      // 获取最小比例
      this.componentZoom = Math.min(this.cWidth / width, this.cHeight / height);
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  },
};
</script>

<style lang="scss" scoped>
.Page {
  width: 800px;
  height: 1100px;
  position: relative;
  user-select: none;
  background-color: #fff;
  transform-origin: top left;
  .page_content {
    width: 100%;
    height: 100%;
    overflow: visible;
    position: relative;
    overflow: hidden;
    &:before {
      content: "";
      display: table;
    }
  }
  &.redact {
    width: 802px;
    height: 1102px;
    border: 1px dashed black;
    position: relative;
    &::before {
      user-select: auto;
      position: absolute;
      top: 0;
      left: 0;
      max-width: 450px;
      padding: 6px;
      content: "纸张宽度：800px，纸张高度：1100px,超出隐藏 拖动放入组件";
      transform: translateY(-100%);
      line-height: 1.5;
      font-size: 12px;
      color: red;
    }
  }
}
</style>