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
            :style="{
              width: componentData.width + 'px',
              height: componentData.width + 'px',
            }"
          >
            <img
              class="el-icon-video-play"
              v-if="!isPlay"
              @click="changePlay(true)"
              src="../../assets/img/audioplay.png"
            />
            <img
              class="el-icon-video-pause"
              v-else
              @click="changePlay(false)"
              src="../../assets/img/stop.png"
            />
          </div>
          <el-progress
            v-if="isPlay"
            :stroke-width="3"
            type="circle"
            :show-text="false"
            :percentage="curtime"
            :width="componentData.width - 0"
            color="#ff9813"
          ></el-progress>
        </div>
      </div>
      <slot />
    </div>
    <slot name="utils" />
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
      isPlay: false,
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
      }
    },
    getCurTime() {
      this.$refs.audio.ontimeupdate = () => {
        this.curtime =
          (this.$refs.audio.currentTime / this.$refs.audio.duration) * 100;
        if (this.$refs.audio.currentTime == this.$refs.audio.duration) {
          this.curtime = 0;
          this.changePlay(false);
        }
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.BookAudio {
  position: relative;
  user-select: none;
  display: inline-block;
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
          width: 50%;
          height: 50%;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>