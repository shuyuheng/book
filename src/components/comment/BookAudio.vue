<template>
  <div
    class="BookAudio component"
    title="音频组件"
    :style="{
      width: componentData.width + 'px',
      height: componentData.width + 'px',
      margin: componentData.margin,
    }"
  >
    <div
      class="page_content"
      :style="{
        backgroundSize: componentData.size,
        backgroundPosition: componentData.position,
        padding: componentData.padding,
      }"
    >
      <div class="center" style="width: 1005">
        <audio ref="audio" :src="componentData.value" controls></audio>
        <div
          class="play_box"
          :style="{
            width: componentData.width + 'px',
            height: componentData.width + 'px',
          }"
        >
          <div
            class="play_status"
            :style="{ fontSize: componentData.width - 0 + 5 + 'px' }"
          >
            <i
              class="el-icon-video-play"
              v-if="!isPlay"
              @click="changePlay(true)"
            ></i>
            <i
              class="el-icon-video-pause"
              v-else
              :style="{ fontSize: componentData.width / 1.5 + 'px' }"
              @click="changePlay(false)"
            ></i>
          </div>
          <el-progress
            v-if="isPlay"
            :stroke-width="3"
            type="circle"
            :show-text="false"
            :percentage="curtime"
            :width="componentData.width"
          ></el-progress>
        </div>
      </div>
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
          <el-form-item label="尺寸">
            <el-input
              v-model="componentData.width"
              style="width: 280px"
            ></el-input>
          </el-form-item>
          <el-form-item label="外边距">
            <el-input
              v-model="componentData.margin"
              style="width: 280px"
            ></el-input
            ><span style="font-size: 12px"> %/px</span>
          </el-form-item>
          <el-form-item label="音频地址">
            <el-input v-model="componentData.value"></el-input>
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
    /* props default end */
  },
  data() {
    return {
      drawer: false, // 修改弹窗
      isPlay: false,
      timer: null,
      curtime: 0,
    };
  },
  created() {},
  methods: {
    // 更改播放状态
    changePlay(val) {
      this.isPlay = val;
      if (this.isPlay) {
        this.$refs.audio.play();
        this.getCurTime();
      } else {
        this.$refs.audio.pause();
        this.getCurTime(false);
      }

      // console.log(this.$refs.audio);
    },
    getCurTime(flage = true) {
      if (this.timer) clearInterval(this.timer);
      if (!flage) return;
      this.timer = setInterval(() => {
        this.curtime =
          (this.$refs.audio.currentTime / this.$refs.audio.duration) * 100;
        if (this.$refs.audio.currentTime == this.$refs.audio.duration) {
          this.curtime = 0;
          this.changePlay(false);
        }
      }, 50);
    },
  },
};
</script>

<style lang="scss" scoped>
.BookAudio {
  position: relative;
  user-select: none;
  .page_content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    background-size: cover;
    position: relative;
    audio {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -2;
      opacity: 0;
      visibility: hidden;
    }
    .play_box {
      width: 60px;
      height: 60px;
      position: relative;
      z-index: 0;
      /deep/ .el-progress-circle__path {
        transition: 0s !important;
      }
      .play_status {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #20a0ff;
        line-height: 1;
        vertical-align: middle;
        transform: translate(0, 0);
        .el-icon-video-pause {
        }
      }
    }
  }
}
</style>