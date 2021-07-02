<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {},
  mounted() {
    // window.addEventListener("resize", this.monitor);
  },
  methods: {
    // 监听宽度适配对应显示页面
    monitor() {
      if (["/Exhibition", "/Adaptive"].includes(this.$route.path)) {
        let pageWidth = document.documentElement.offsetWidth;
        let pageHeight = document.documentElement.offsetHeight;
        if (pageWidth > 750 && pageHeight > 600) {
          if (this.$route.path != "/Exhibition")
            this.$router.replace("/Exhibition");
        } else {
          if (this.$route.path != "/Adaptive")
            this.$router.replace("/Adaptive");
        }
      }
    },
  },
  watch: {
    "$route.path"() {
      // this.monitor();
    },
  },
  destroyed() {
    window.removeEventListener("resize", this.monitor);
  },
};
</script>

<style>
</style>