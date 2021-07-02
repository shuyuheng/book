<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {},
  mounted() {
    this.monitor();
    let V = 1;
    let v = localStorage.getItem("v");
    if (!v || v < V) {
      localStorage.clear();
      localStorage.setItem("v", V);
      alert('清除数据了')
    }
  },
  methods: {
    // 移动端不能编辑
    monitor() {
      let pageWidth = document.documentElement.offsetWidth;
      let pageHeight = document.documentElement.offsetHeight;
      if (pageWidth > 750 && pageHeight > 600) {
      } else {
        if (this.$route.path != "/Exhibition")
          this.$router.replace("/Exhibition");
      }
    },
  },
};
</script>

<style>
</style>