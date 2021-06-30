<template>
  <div class="UpdateComData">
    <el-drawer
      title="编辑组件数据"
      :visible.sync="drawer"
      direction="ltr"
      :before-close="handleClose"
    >
      <div class="update_content" @keydown.enter="submitForm('ruleForm')">
        <el-form
          ref="ruleForm"
          :model="updateData.componentData"
          label-width="80px"
          label-position="top"
        >
          <el-form-item label="组件名称">
            <el-input v-model.trim="updateData.componentTitleStr"></el-input>
          </el-form-item>
          <el-form-item label="组件值" v-if="updateKeys.includes('value')">
            <el-input v-model.trim="updateData.componentData.value"></el-input>
          </el-form-item>
          <el-form-item label="距左距离" v-if="updateKeys.includes('x')">
            <el-input
              v-model.trim="updateData.componentData.x"
              type="number"
            ></el-input>
          </el-form-item>
          <el-form-item label="距上距离" v-if="updateKeys.includes('y')">
            <el-input
              v-model.trim="updateData.componentData.y"
              type="number"
            ></el-input>
          </el-form-item>
          <el-form-item label="宽度" v-if="updateKeys.includes('width')">
            <el-input
              v-model.trim="updateData.componentData.width"
              type="number"
              :disabled="updateData.component == 'Page'"
            ></el-input>
          </el-form-item>
          <el-form-item label="高度" v-if="updateKeys.includes('height')">
            <el-input
              v-model.trim="updateData.componentData.height"
              type="number"
              :disabled="updateData.component == 'Page'"
            ></el-input>
          </el-form-item>
          <el-form-item label="富文本" v-if="updateKeys.includes('html')">
            <Editor ref="Editor" :value="updateData.componentData.html" />
          </el-form-item>
          <el-form-item label="背景色" v-if="updateKeys.includes('bgColor')">
            <el-color-picker
              v-model="updateData.componentData.bgColor"
              show-alpha
            ></el-color-picker>
          </el-form-item>
          <!-- 操作按钮 -->
          <el-form-item class="centerR">
            <el-button type="primary" @click="submitForm('ruleForm')"
              >保存</el-button
            >
            <el-button @click="resetForm('ruleForm')">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Editor from "./Editor";
export default {
  data() {
    return {
      // 修改
      drawer: false,
      updateKeys: [],
      updateData: "",
      //   https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg
      //  验证规则
      prop: [],
    };
  },
  components: {
    Editor,
  },
  computed: {
    ...mapState({
      pageData: (state) => state.pageDataModule.pageData,
      pageUpdateComponent: (state) => state.pageDataModule.pageUpdateComponent,
    }),
  },
  watch: {
    pageUpdateComponent(val) {
      if (val) {
        this.drawer = true;
        // 克隆编辑防止污染
        this.updateData = JSON.parse(JSON.stringify(val));
        this.getUpdateKey();
      } else {
        this.updateKeys = [];
        this.drawer = false;
      }
    },
  },
  methods: {
    ...mapMutations("pageDataModule", [
      "pageDataRemove",
      "setPageUpdateComponent",
      "pageDataUpdate",
    ]),
    // 关闭修改
    handleClose() {
      // 删除修改的组件
      this.setPageUpdateComponent("");
    },
    // 获取需要修改的数据所有类型
    getUpdateKey() {
      console.log("keys", Object.keys(this.updateData.componentData));
      this.updateKeys = Object.keys(this.updateData.componentData);
    },
    // 提交表单
    submitForm(formName) {
      console.log("保存");
      //   如果有富文本那么应该取值
      if (this.$refs.Editor) {
        this.updateData.componentData.html = this.$refs.Editor.getVal();
      }
      // this.updateData.componentData.x = "0";
      // this.updateData.componentData.y = "0";
      // this.updateData.componentData.width = "800";
      // this.updateData.componentData.height = "1100";
      // 可以转为数字的都转为数字
      for (const key in this.updateData.componentData) {
        console.log(!isNaN(this.updateData.componentData[key]), key);
        if (!isNaN(this.updateData.componentData[key])) {
          this.updateData.componentData[key] = Number(
            this.updateData.componentData[key]
          );
        }
      }

      console.log(
        JSON.parse(JSON.stringify(this.updateData)),
        "this.updateData"
      );
      // 修改对应组件值
      this.pageDataUpdate(this.updateData);
      this.$message.success("修改成功");
      //   关闭
      this.handleClose();
    },
    // 重置表单
    resetForm(formName) {
      this.handleClose();
    },
  },
};
</script>

<style lang="scss" scoped>
.UpdateComData {
  .update_content {
    padding: 20px;
    max-height: 95vh;
    overflow: auto;
  }
}
</style>