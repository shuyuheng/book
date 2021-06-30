<template>
  <div class="exhibition" id="zoomView">
    <div
      class="center book_out_box"
      :style="{
        left: position.x + 'px',
        top: position.y + 'px',
      }"
    >
      <i
        class="el-icon-caret-left book_btn"
        :class="{ disabled: curPage <= 1 }"
        @click="previous"
        :style="{
          transform: `scale(${curentZoom})`,
        }"
      />
      <div :style="{ width: 800 * 2 * curentZoom + 'px' }">
        <div class="container">
          <div id="book">
            <div class="harda" v-if="pageData.components.length < 3">START</div>
            <div class="harda" v-if="pageData.components.length < 3">
              <div>
                <div style="text-align: center">前言</div>
                <div
                  style="
                    font-size: 14px;
                    padding-top: 20px;
                    letter-spacing: 6px;
                    line-height: 1.5;
                  "
                >
                  书籍最少四页，不足的情况下将补充<br />《START》《前言》《END》
                </div>
              </div>
            </div>
            <div
              class="page_box"
              v-for="item in pageData.components"
              :key="item.id"
            >
              <ComponentContainer :children="[item]" :zoom="curentZoom" />
            </div>
            <div class="harda" v-if="pageData.components.length < 3">END</div>
          </div>
        </div>
      </div>
      <i
        class="el-icon-caret-right book_btn"
        :class="{ disabled: curPage >= pages }"
        @click="next"
        :style="{
          transform: `scale(${curentZoom})`,
        }"
      />
    </div>
    <!-- 顶部工具区域 -->
    <div class="top-utils" @mousedown.stop="">
      <div style="width: 180px">
        <el-slider
          :value="((curentZoom / maxZoom) * 100).toFixed(2) - 0"
          input-size="mini"
          @input="changeZoomPer"
        />
      </div>
      <div class="center step_num">
        <div class="step_num_val">
          {{ curPage | filterPage }}
        </div>
        <div>/</div>
        <div>{{ pages }}</div>
      </div>
      <div>
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="search"
          size="mini"
        >
        </el-input>
      </div>
    </div>
    <!-- 底部步骤条 -->
    <div class="bottom-utils" @mousedown.stop="">
      <el-slider
        v-if="pages > 0"
        v-model="curPage"
        :max="pages"
        :min="1"
        :step="1"
        show-stops
        @input="setPage"
        
      >
      </el-slider>
    </div>
    <!-- 音量 -->
    <div class="volume_box" v-if="$store.state.playEl">
      <div class="msg">↑↓可控制音量</div>
      当前音量：{{ parseInt($store.state.volume * 100) }}%
    </div>
  </div>
</template>

<script>
import "@/assets/js/extras/jquery.min.1.7";
import "@/assets/js/lib/turn";
import data from "../utils/mockPageData";
// import "turn.js";
export default {
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
    // 百分比缩放
    changeZoomPer(val) {
      this.curentZoom = this.maxZoom * (val / 100);
      this.setZoom();
    },
    // 缩放
    zoomFn(val) {
      this.curentZoom += val;
      this.setZoom();
    },
    setZoom() {
      this.curentZoom =
        this.curentZoom > this.maxZoom ? this.maxZoom : this.curentZoom;
      this.curentZoom =
        this.curentZoom < this.minZoom ? this.minZoom : this.curentZoom;
      $("#book").turn("size", 1600 * this.curentZoom, 1100 * this.curentZoom);
    },
    next() {
      $("#book").turn("next");
      this.curPage = $("#book").turn("page");
    },
    previous() {
      $("#book").turn("previous");
      this.curPage = $("#book").turn("page");
    },
    // 更改页码
    changePage(val) {
      this.curPage += val;
      this.setPage();
    },
    setPage() {
      $("#book").turn("page", this.curPage);
    },
    // 初始化书籍
    initBook() {
      const that = this;
      $("#book").turn({
        width: 1600,
        height: 1100,
        autoCenter: true,
        duration: 1600,
        elevation: 50,
        gradients: true,
        // ... plus any extra option you need
        when: {
          turned(event, page, view) {
            if (page == 1) {
              that.$nextTick(() => {
                $("#book").turn("peel", "br");
              });
            }
          },
        },
      });
      // 获取页面数量
      this.pages = $("#book").turn("pages");
      this.curPage = $("#book").turn("page");
      this.resizeChangeZoom();
    },
    // 视口改变书籍大小
    resizeChangeZoom() {
      let zoom = document.body.clientWidth / 900 / 2.6;
      this.curentZoom = zoom > 1 ? 1 : zoom;
      this.setZoom();
    },
    // 左右键盘监听事件
    keydown(e) {
      switch (e.keyCode) {
        case 37:
          this.previous();
          break;
        case 38:
          this.$store.commit("setVolume", "add");
          break;
        case 39:
          this.next();
          break;
        case 40:
          this.$store.commit("setVolume", "minish");
          break;

        default:
          break;
      }
    },
    // 监听滚轮事件
    mousewheel(e) {
      if (e.wheelDelta > 0) {
        this.zoomFn(0.05);
      } else {
        this.zoomFn(-0.05);
      }
    },
    // 鼠标点击拖拽
    mousedown() {
      document.addEventListener("mousemove", this.mousemove);
    },
    mouseup() {
      document.removeEventListener("mousemove", this.mousemove);
    },
    mousemove(e) {
      this.position.x += e.movementX;
      this.position.y += e.movementY;
    },
  },
  filters: {
    filterPage: (page) => {
      if (page <= 1) return page;
      if (page >= $("#book").turn("pages")) return page;
      return `${page}-${page + 1}`;
    },
  },
  mounted() {
    this.initBook();
    // 监听窗口大小
    window.addEventListener("resize", this.resizeChangeZoom);
    window.addEventListener("keydown", this.keydown);
    document.addEventListener("mousewheel", this.mousewheel, false);
    document.addEventListener("mousedown", this.mousedown);
    document.addEventListener("mouseup", this.mouseup);
  },
  // 销毁
  destroyed() {
    window.removeEventListener("keydown", this.keydown);
    window.removeEventListener("resize", this.resizeChangeZoom);
    document.removeEventListener("mousewheel", this.mousewheel);
    document.removeEventListener("mousedown", this.mousedown);
    document.removeEventListener("mouseup", this.mouseup);
  },
};
</script>

<style lang="scss">
.exhibition {
  height: 100vh;
  background-color: #444444;
  overflow: hidden;

  .book_out_box {
    padding: 90px 0 0;
    position: relative;
    left: 0;
    top: 0;
    .book_btn {
      font-size: 60px;
      color: white;
      cursor: pointer;
      padding: 120px 0;
      position: relative;
      z-index: 99;
      &:hover {
        color: goldenrod;
      }
      &:first-child {
        transform-origin: right center;
      }
      &:last-child {
        transform-origin: left center;
      }
      &.disabled {
        color: gray;
        cursor: no-drop;
        pointer-events: none;
      }
    }
    .container {
      width: 30000px;
      .harda {
        background-color: #3c4043;
        color: white;
        font-size: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  //
  .top-utils {
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    background-color: #777777;
    z-index: 99;
    border-radius: 6px;
    padding: 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & > div {
      margin: 0 10px;
    }
    .step_num {
      width: 120px;
      font-size: 20px;
      color: white;
      letter-spacing: 2px;
      align-items: flex-end;
      .step_num_val {
        font-size: 16px;
      }
    }
  }
  .bottom-utils {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    z-index: 99;
  }
  .volume_box {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 9999999;
    padding: 20px;
    color: white;
    font-size: 20px;
    .msg {
      font-size: 12px;
      color: orange;
      text-align: center;
      padding-bottom: 10px;
    }
  }
}
</style>