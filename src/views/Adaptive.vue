<template>
  <div class="Adaptive" ref="Adaptive">
    <div class="center">
      <div class="center book_out_box" ref="box">
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
    </div>
    <div class="centerLR" style="width: 60%; margin: 20px auto 0">
      <el-button type="text" @click="previous" :disabled="curPage <= 1"
        >上一页</el-button
      >
      <el-button type="text" @click="next" :disabled="curPage >= pages"
        >下一页</el-button
      >
    </div>
  </div>
</template>

<script>
import "@/assets/js/extras/jquery.min.1.7";
import "@/assets/js/lib/turn";
import data from "../utils/mockPageData";
export default {
  data() {
    return {
      pageData: "",
      curentZoom: 0.5,
      maxZoom: 3,
      minZoom: 0.3,
      curPage: 1,
      pages: 0,
    };
  },
  created() {
    let pageData = localStorage.getItem("pageData");
    if (pageData) this.pageData = JSON.parse(pageData);
    else {
      this.pageData = data;
    }
  },
  mounted() {
    this.initBook();
    // 监听窗口大小
    window.addEventListener("resize", this.resizeChangeZoom);
  },
  methods: {
    //   上一页and下一页
    next() {
      $("#book").turn("next");
      this.curPage = $("#book").turn("page");
    },
    previous() {
      $("#book").turn("previous");
      this.curPage = $("#book").turn("page");
    },
    // 初始化书籍
    initBook() {
      const that = this;
      $("#book").turn({
        width: 800,
        height: 1100,
        autoCenter: true,
        duration: 800,
        elevation: 50,
        gradients: true,
        display: "single",
        acceleration: true,
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
      this.$nextTick(() => {
        this.resizeChangeZoom();
      });
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
      $("#book").turn("size", 800 * this.curentZoom, 1100 * this.curentZoom);
    },
    // 比例计算
    ratio(val, total) {
      return Math.round((val / total) * 10000) / 10000;
    },
    // 视口改变书籍大小
    resizeChangeZoom() {
      let domWidth =
        document.documentElement.offsetWidth -
        document.documentElement.offsetWidth * 0.15;
      let domHeight =
        this.$refs.Adaptive.clientHeight -
        this.$refs.Adaptive.clientWidth * 0.15;
      this.curentZoom = Math.min(domWidth / 800, domHeight / 1100);
      this.setZoom();
    },
  },
  // 销毁
  destroyed() {
    window.removeEventListener("resize", this.resizeChangeZoom);
  },
};
</script>

<style lang="scss" scoped>
.Adaptive {
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #444444;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
  overflow: hidden;
  .book_out_box {
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
}
</style>