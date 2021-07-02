<template>
  <div class="exhibition" id="zoomView">
    <div
      class="book-box center"
      ref="bookBox"
      @click="computedChick"
      :class="{
        pageIsZoom: pageIsZoom,
        active: moveStatus,
        searchPd: searchList.length,
      }"
      @mousedown="setMoveStatus(true)"
      @mouseup="setMoveStatus(false)"
      :style="{
        left: position.x + 'px',
        top: position.y + 'px',
        transformOrigin: `${Origin.x}px ${Origin.y}px`,
      }"
    >
      <div
        class="center_container"
        :class="{
          first: pageType == 'first' && !isMobile,
          zoomOut: pageIsZoom,
        }"
        :style="{
          width:
            (pageType == 'none' && !isMobile ? curWidth : curWidth / 2) + 'px',
        }"
      >
        <div
          class="book_btn left"
          @click.stop="previous"
          v-show="pageType != 'first' && !pageIsZoom"
        ></div>
        <div id="flipbook">
          <div
            style="background: white"
            v-for="item in pageData.components"
            :key="item.id"
          >
            <ComponentContainer
              :children="[item]"
              :boxSize="{
                width: isMobile ? curWidth : curWidth / 2,
                height: curHeight,
              }"
            />
          </div>
        </div>
        <div
          class="book_btn right"
          @click.stop="next"
          v-show="pageType != 'last' && !pageIsZoom"
        ></div>
      </div>
    </div>
    <!-- 翻书音效 -->
    <audio src="@/assets/files/Hardcover.mp3" ref="Hardcover"></audio>
    <!-- 音量 -->
    <div class="volume_box" v-if="!isMobile">
      <div class="msg">键盘↑↓控制音量</div>
      媒体音量：{{ parseInt($store.state.volume * 100) }}%
    </div>
    <!-- 顶部分页 and 搜索 -->
    <div class="top_utils" :class="{ active: showUtils }" @keydown.stop>
      <img
        src="@/assets/img/home-icon.png"
        class="home-icon"
        alt=""
        @click="changePage(1)"
      />
      <input
        type="text"
        class="search-input"
        v-model.trim="searchVal"
        placeholder="请输入搜索内容"
        @change="searchFn"
        v-if="!disabledSearch"
      />
      <div class="page-info">
        <span class="cur-page">
          <input
            type="text"
            :value="curPageStr.join('-')"
            @change="changePageInput"
          />
        </span>
        <span>/</span>
        <span class="total-page">{{ pageData.components.length }}</span>
      </div>
    </div>
    <!-- 查询结果 -->
    <div class="search-list" @click.stop :class="{ active: searchList.length }">
      <div
        class="search-list-item"
        v-for="item in searchList"
        :key="item.id"
        @click="changePage(item.page + 1)"
      >
        <div
          class="page-index"
          :class="{ active: curPageStr.includes(item.page + 1) }"
        >
          {{ item.page + 1 }}
        </div>
        <div class="content" v-html="item.content" />
      </div>
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
      pWidth: 1600, // 书籍页面宽度
      pHeight: 1100, // 书籍页面高度
      isMobile: false,
      zoom: 1, // 比例
      curPage: 1, // 当前页码
      // 是否为第一页或者第最有一页
      pageType: "first",
      pageIsZoom: false, // 是否放大页面 放大页面阻止翻页
      clickComputed: false,
      timer: null,
      // 书籍位置
      position: {
        x: 0,
        y: 0,
      },
      // 圆点 圆心
      Origin: {
        x: 0,
        y: 0,
      },
      moveStatus: false, // 是否允许移动
      showUitlsTimer: null,
      showUtils: false,
      // 搜索内容
      disabledSearch: false, //禁用搜索
      searchVal: "",
      searchList: [], // 搜索到的内容列表
    };
  },
  created() {
    let pageData = localStorage.getItem("pageData");
    if (pageData) this.pageData = JSON.parse(pageData);
    else {
      this.pageData = data;
    }
  },
  computed: {
    curWidth() {
      return this.pWidth * this.zoom;
    },
    curHeight() {
      return this.pHeight * this.zoom;
    },
    curPageStr() {
      return this.isMobile
        ? [this.curPage]
        : this.curPage == 1 ||
          (this.curPage == this.pageData.components.length &&
            this.pageData.components.length % 2 == 0)
        ? [this.curPage]
        : this.curPage % 2 == 0
        ? [this.curPage, this.curPage + 1]
        : [this.curPage - 1, this.curPage];
    },
  },
  mounted() {
    this.resize();
    this.initBook();
    // 事件监听
    window.addEventListener("keydown", this.keydown); // 键盘事件
    window.addEventListener("resize", this.resize); // 窗口事件
    document.addEventListener("mousewheel", this.mousewheel, false); // 滚轮滚动事件
    this.$refs.bookBox.addEventListener("mousemove", this.move);
  },
  methods: {
    // 初始化书籍
    initBook() {
      $("#flipbook").turn({
        width: this.isMobile ? this.curWidth / 2 : this.curWidth,
        height: this.curHeight,
        autoCenter: false, // 自动居中
        acceleration: true, // 硬件加速
        gradients: true, // 翻页渐变和阴影
        display: this.isMobile ? "single" : "double", // 单双页
        duration: 700, // 翻页速度
        // 事件监听
        when: {
          first: () => {
            console.log("第一页");
            this.pageType = "first";
          },
          last: () => {
            console.log("最后一页");
            this.pageType = "last";
          },
          // 翻页前
          turning: (event, page, view) => {
            console.log("翻页", page);
            this.curPage = page;
            this.Hardcover();
            this.pageType = "none";
          },
        },
      });
      console.log($("#flipbook").turn("size"));
      // console.log($("#flipbook").turn("display"));
    },
    // 缩放
    resize() {
      let bWidth = this.$refs.bookBox.offsetWidth;
      let bHeight = this.$refs.bookBox.offsetHeight;
      // 小于这个宽高禁用搜索功能
      if (
        document.documentElement.offsetWidth < 950 ||
        document.documentElement.offsetHeight < 700
      ) {
        this.disabledSearch = true;
        this.searchList = [];
        this.searchVal = "";
      } else {
        this.disabledSearch = false;
      }
      if (this.searchList.length) {
        bWidth -= 350;
        bHeight -= 350;
      }
      // 宽度比例小于 5 说明是竖屏
      this.isMobile = bWidth / (bWidth + bHeight) <= 0.5;
      this.zoom = Math.min(
        bWidth / (this.isMobile ? this.pWidth / 2 : this.pWidth),
        bHeight / this.pHeight
      );
      this.bookResize();
    },
    // 书籍缩放
    bookResize() {
      this.$nextTick(() => {
        $("#flipbook").turn("display", this.isMobile ? "single" : "double"); // 单双页
        $("#flipbook").turn(
          "size",
          this.isMobile ? this.curWidth / 2 : this.curWidth,
          this.curHeight
        );
      });
    },
    // 下一页
    next() {
      $("#flipbook").turn("next");
      this.curPage = $("#flipbook").turn("page");
    },
    // 上一页
    previous() {
      $("#flipbook").turn("previous");
      this.curPage = $("#flipbook").turn("page");
    },
    // 翻书音效
    Hardcover() {
      if (this.$refs.Hardcover) {
        this.$refs.Hardcover.currentTime = 0;
        this.$refs.Hardcover.play();
      }
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
    // 滚轮滚动事件
    mousewheel(e) {
      console.log(e);
    },
    // 双击
    dblclick(e) {
      if (this.showUitlsTimer) clearTimeout(this.showUitlsTimer);
      this.pageIsZoom = !this.pageIsZoom;
      if (this.pageIsZoom) {
        this.Origin.x = e.x - 30;
        this.Origin.y = e.y - 30;
      }
    },
    // pc端验证双击
    computedChick(e) {
      this.setShowUtils();
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.clickComputed = false;
      }, 250);
      if (this.clickComputed) this.dblclick(e);
      this.clickComputed = true;
    },
    // 设置移动状态
    setMoveStatus(val) {
      this.moveStatus = val;
      console.log(val, "");
    },
    // 移动位置
    move(e) {
      if (!this.pageIsZoom) {
        this.position.x = 0;
        this.position.y = 0;
        return;
      }
      if (this.moveStatus) {
        this.position.x += e.movementX;
        this.position.y += e.movementY;
      }
    },
    // changePage
    changePage(page) {
      $("#flipbook").turn("page", page);
    },
    // changePageInput
    changePageInput(e) {
      let val = parseInt(e.target.value);
      console.log(val);
      if (
        !isNaN(val) &&
        val <= this.pageData.components.length &&
        val >= 1 &&
        val != this.curPage
      ) {
        this.changePage(val);
      }
    },
    // 是否打开功能选项
    setShowUtils() {
      if (this.showUitlsTimer) clearTimeout(this.showUitlsTimer);
      this.showUitlsTimer = setTimeout(() => {
        this.showUtils = !this.showUtils;
      }, 500);
    },
    // 搜索
    searchFn() {
      let page = "";
      this.searchList = [];
      const treeForEach = (children, back) => {
        for (let i = 0; i < children.length; i++) {
          const item = children[i];
          if (item.component == "Page") {
            page = i;
            console.log(page, "page");
          }
          back(item, page);
          if (item.children && item.children.length) {
            back(item, page);
            treeForEach(item.children, back);
          }
        }
      };
      // 递归查询
      treeForEach(this.pageData.components, (item, page) => {
        // 判断是否为富文本
        if (item.component == "BookContent") {
          // 清空所有上次查询
          item.componentData.html = item.componentData.html
            .replace(/<SEARCH_P style="background:#ff9813;">/g, "")
            .replace(/<\/SEARCH_P>/g, "");
          // 判断是否有内容
          if (
            this.searchVal &&
            item.componentData.html.includes(this.searchVal)
          ) {
            item.componentData.html = item.componentData.html.replace(
              this.searchVal,
              `<SEARCH_P style="background:#ff9813;">${this.searchVal}</SEARCH_P>`
            );
            this.searchList.push({
              id: item.id,
              page: page,
              content: item.componentData.html,
            });
          }
        }
      });
      this.resize();
      // console.log("查询结果", this.searchList);
      if (!this.searchList.length && this.searchVal)
        this.$message("暂无查询结果");
    },
  },
  // 销毁
  destroyed() {
    window.removeEventListener("resize", this.resize);
    window.removeEventListener("keydown", this.keydown);
    document.removeEventListener("mousewheel", this.mousewheel);
    this.$refs.bookBox.removeEventListener("mousemove", this.move);
  },
};
</script>

<style lang="scss">
.exhibition {
  height: 100vh;
  background-color: #444444;
  overflow: hidden;
  padding: 30px;
  user-select: none;
  .book-box {
    height: 100%;
    transition-property: transform, padding;
    transition-duration: 0.3s;
    &.pageIsZoom {
      position: relative;
      transform: scale(3);
      cursor: grab;
      &.active {
        cursor: grabbing !important;
      }
    }
    &.searchPd {
      padding-left: 300px;
    }

    .center_container {
      position: relative;
      transition: width 0.3s 0.5s;
      // cursor: zoom-in;
      &.zoomOut {
        // cursor: zoom-out;
      }
      #flipbook {
        position: relative;
        z-index: 2;
        transform: translateX(0%);
        transition: transform 0.3s 0.5s;
        overflow: visible !important;
      }
      &.first {
        #flipbook {
          transform: translateX(-50%) !important;
        }
      }
      .book_btn {
        position: absolute;
        top: 50%;
        width: 24px;
        height: 95%;
        background-color: rgba(119, 119, 119, 0.4);
        cursor: pointer;
        &:hover {
          background-color: rgba(119, 119, 119, 0.6);
        }
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0px;
          height: 0px;
          border-bottom: 13.2px solid transparent;
          border-top: 13.2px solid transparent;
          border-left: 13.2px solid rgb(119, 119, 119);
          font-size: 0px;
          line-height: 0px;
          cursor: pointer;
          transform: translate(-50%, -50%);
        }
        &.left {
          left: 0;
          transform: translate(-100%, -50%);
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
          &::after {
            border-bottom: 13.2px solid transparent;
            border-top: 13.2px solid transparent;
            border-left: none;
            border-right: 13.2px solid rgb(119, 119, 119);
          }
        }
        &.right {
          right: 0;
          transform: translate(100%, -50%);
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
    }
  }
  // 页面音量
  .volume_box {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 9999999;
    padding: 10px;
    color: white;
    font-size: 14px;
    .msg {
      font-size: 10px;
      color: orange;
      text-align: center;
      padding-bottom: 10px;
    }
  }
  // 顶部
  .top_utils {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    transition: transform 0.3s;
    min-width: 288px;
    height: 41px;
    background-color: rgb(119, 119, 119);
    border-color: rgb(119, 119, 119);
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    &.active {
      transform: translateX(-50%);
    }
    .home-icon {
    }
    .page-info {
      padding: 0 5px;
      font-size: 12px;
      span {
        color: #eee;
        padding: 0 3px;
      }
      .cur-page {
        display: inline-block;
        color: #333;
        padding: 3px;
        border-radius: 3px;
        background-color: #fff;
        margin-right: 6px;
        input {
          width: 50px;
          outline: none;
          background-color: transparent;
          text-align: right;
          border: none;
        }
      }
    }
    .search-input {
      outline: none;
      height: 23px;
      border: none;
      border-radius: 3px;
      margin: 0 5px;
      padding: 0 6px;
      font-size: 12px;
    }
  }
  // 查询结果
  .search-list {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    background-color: #292625;
    padding: 15px;
    z-index: 10;
    transform: translateX(-100%);
    transition: transform 0.3s;
    overflow: auto;
    &.active {
      transform: translateX(0%);
    }
    .search-list-item {
      overflow: hidden;
      display: flex;
      margin-top: 15px;
      cursor: pointer;
      .content {
        flex: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        line-height: 1.6;
        color: white;
        font-size: 12px;
      }
      .page-index {
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        background-color: #333;
        color: white;
        font-weight: bold;
        margin-right: 5px;
        &.active {
          background-color: #eee;
          color: #333;
        }
      }
    }
  }
}
</style>