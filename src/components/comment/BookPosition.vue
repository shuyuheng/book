<template>
  <div
    class="BookPosition component"
    :class="{ redact: redact, isDrage: isDrage }"
    title="定位组件"
    ref="positionRef"
    :style="{
      left: componentData.x + 'px',
      top: componentData.y + 'px',
    }"
    @mousedown.stop="down"
    @mouseup="up"
  >
    <div
      class="page_content"
      :style="{
        padding: componentData.padding,
      }"
    >
      <slot />
    </div>
    <slot name="utils" />
    <!-- 修改 -->
    <el-drawer
      title="组件数据"
      :visible.sync="drawer"
      direction="btt"
      :before-close="
        () => {
          $emit('handleClose');
        }
      "
      :append-to-body="true"
      size="60%"
    >
      <div style="padding: 20px" @click.stop>
        <el-form ref="form" label-width="80px">
          <el-form-item label="内边距">
            <el-input
              v-model="componentData.padding"
              style="width: 280px"
            ></el-input
            ><span style="font-size: 12px"> %/px</span>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  props: {
    /* props default start */
    componentData: {
      type: [Object, String, Array, Number],
      required: true,
    },
    item: {
      type: Object,
      default: "",
    },
    redact: {
      type: Boolean,
      default: false,
    },
    // 是否在拖动状态
    isDrage: {
      type: Boolean,
      default: false,
    },
    /* props default end */
  },
  data() {
    return {
      drawer: false, // 修改弹窗
      isMove: false,
    };
  },
  created() {},
  mounted() {
    if (this.redact) {
      window.addEventListener("mouseup", () => {
        this.isMove = false;
      });
      // 获取外层元素宽高
      const parentEle = this.$refs.positionRef.parentElement.parentElement;
      this.parentEle = parentEle;
    }
  },
  methods: {
    down() {
      if (!this.redact) return;
      window.addEventListener("mousemove", this.move);
      this.isMove = true;
    },
    up() {
      if (!this.redact) return;
      window.removeEventListener("mousemove", this.move);
    },
    move(e) {
      if (!this.isMove) return;
      this.componentData.x += e.movementX;
      this.componentData.y += e.movementY;
      let thisWidth = this.$refs.positionRef.offsetWidth;
      let thisHeight = this.$refs.positionRef.offsetHeight;
      let parentWidth = this.parentEle.offsetWidth;
      let parentHeight = this.parentEle.offsetHeight;
      if (this.componentData.x < 0) {
        this.componentData.x = 0;
      } else if (this.componentData.x > parentWidth - thisWidth) {
        this.componentData.x = parentWidth - thisWidth;
      }
      if (this.componentData.y < 0) {
        this.componentData.y = 0;
      } else if (this.componentData.y > parentHeight - thisHeight) {
        this.componentData.y = parentHeight - thisHeight;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.BookPosition {
  position: absolute;
  user-select: none;
  z-index: 4;
  &.redact {
    cursor: all-scroll;
    background-color: rgba(orange, 0.3);
    background-image: url('../../assets/img/opacity.png');
    background-size: 200px;
    background-position: center;
  }
  &.isDrage {
    left: 0 !important;
    top: 0 !important;
  }

  .page_content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    background-size: cover;
    position: relative;
  }
}
</style>