<template>
  <div class="utils">
    <el-button type="text" @click.stop="$emit('updateFn')">编辑</el-button>
    <el-button type="text" @click.stop="$emit('deleteFn')">删除</el-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.utils {
  position: absolute !important;
  right: 0;
  top: 0;
  padding: 10px 15px;
}
</style>