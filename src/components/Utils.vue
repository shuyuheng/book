<template>
  <div
    class="utils"
    :class="{
      selectBorder: isSelect && pageDragState == true,
      redact: isInclude,
    }"
    @mouseenter.stop="pageDragState ? (isSelect = true) : ''"
    @mouseleave.stop="isSelect = false"
    @mouseup="isAddPageAddComponent(id)"
    ref="utils"
    @click="computedChick"
  >
    <VueDragResize
      v-if="item.component != 'Page' && !item.lock"
      :isDraggable="true"
      :isActive="false"
      :aspectRatio="!!item.componentData.aspectRatio"
      :w="item.componentData.width"
      :h="
        item.componentData.aspectRatio
          ? item.componentData.width
          : item.componentData.height
      "
      :x="item.componentData.x"
      :y="item.componentData.y"
      :parentLimitation="true"
      :parentW="maxWidth"
      :parentH="maxHeight"
      @resizing="resize"
      @dragging="resize"
      :minw="0"
      :minh="0"
      ref="dragResize"
    >
      <div class="size_info">
        <span>{{ item.componentData.x }}*{{ item.componentData.y }}</span>
        <span style="padding: 0 3px">/</span>
        <span
          >{{ item.componentData.width }}*{{
            item.componentData.height || item.componentData.width
          }}</span
        >
      </div>
    </VueDragResize>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import VueDragResize from "vue-drag-resize";
export default {
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
    maxWidth: {
      type: [Number, String],
      default: 200,
    },
    maxHeight: {
      type: [Number, String],
      default: 200,
    },
  },
  components: {
    VueDragResize,
  },
  computed: {
    ...mapState({
      pageDragState: (state) => state.pageDataModule.pageDragState,
      pageAddComponent: (state) => state.pageDataModule.pageAddComponent,
      pageAddComponent: (state) => state.pageDataModule.pageAddComponent,
      selectComponents: (state) => state.pageDataModule.selectComponents,
    }),
    isInclude() {
      let index = this.selectComponents.findIndex(
        (item) => item.id == this.item.id
      );
      return index != -1;
    },
  },
  data() {
    return {
      isSelect: false, //是否向该组件内部插入组件
      timer: null,
      clickComputed: false, //验证双击锁
    };
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations("pageDataModule", [
      "pageDataAdd",
      "pageDataRemove",
      "isAddPageAddComponent",
      "setPageAddComponent",
      "setPageUpdateComponent",
      "pageDataUpdate",
    ]),
    // 设置大小位置
    resize(newRect) {
      // console.log(newRect, "newRect", this.maxWidth, this.maxHeight);
      this.item.componentData.width = newRect.width;
      if (!this.item.componentData.aspectRatio) {
        this.item.componentData.height = newRect.height;
      }
      this.item.componentData.x = newRect.left;
      this.item.componentData.y = newRect.top;
    },
    // 双击
    dblclick() {
      let component = JSON.parse(JSON.stringify(this.item));
      component.componentData.x = 0;
      component.componentData.y = 0;
      component.componentData.width = this.maxWidth;
      component.componentData.height = this.maxHeight;
      this.pageDataUpdate(component);
    },
    // pc端验证双击
    computedChick(e) {
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.clickComputed = false;
      }, 250);
      if (this.clickComputed) this.dblclick(e);
      this.clickComputed = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.utils {
  position: absolute !important;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  padding: 10px 15px;
  &.redact {
    border: 1px dashed black;
    box-shadow: 0 0 0 5px #ffd539 inset;
    cursor: pointer;
  }
  .vdr,
  .vdr.active:before {
    left: 0 !important;
    top: 0 !important;
  }
  .size_info {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
    color: white;
    padding: 6px;
    background-color: rgba(black, 0.5);
  }
  .el-button--text {
    color: red;
    letter-spacing: 3px;
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>