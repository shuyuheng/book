<template>
  <div class="page_404">
      <img src="../assets/img/404.gif" alt="" @click="backHome">
  </div>
</template>

<script>
export default {
    methods: {
        backHome(){
            this.$router.replace('/')
        }
    },
};
</script>

<style lang="scss">
.page_404 {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #f1f4f8;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
      cursor: pointer;
      width: 90%;
      max-width: 1920px;
  }
}
</style>