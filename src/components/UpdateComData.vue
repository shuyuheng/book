<template>
  <div class="UpdateComData">
    <el-drawer
      title="编辑组件数据"
      :visible.sync="drawer"
      direction="ltr"
      :before-close="handleClose"
    >
      <div class="update_content">
        <el-form
          ref="ruleForm"
          :model="updateData.componentData"
          label-width="80px"
          label-position="top"
        >
          <el-form-item label="组件值" v-if="updateKeys.includes('value')">
            <el-input v-model="updateData.componentData.value"></el-input>
          </el-form-item>
          <el-form-item label="富文本" v-if="updateKeys.includes('html')">
            <Editor ref="Editor" :value="updateData.componentData.html" />
          </el-form-item>
          <el-form-item label="外边距" v-if="updateKeys.includes('margin')">
            <el-row :gutter="20">
              <el-col :span="6" :offset="6">
                <el-input-number
                  v-model="updateData.componentData.margin[0]"
                  :min="0"
                  label="上边距"
                  size="mini"
                />
              </el-col>
            </el-row>
            <el-row :gutter="20" style="margin: 10px 0">
              <el-col :span="6" :offset="0">
                <el-input-number
                  v-model="updateData.componentData.margin[3]"
                  :min="0"
                  label="左边距"
                  size="mini"
                />
              </el-col>
              <el-col :span="6" :offset="6">
                <el-input-number
                  v-model="updateData.componentData.margin[1]"
                  :min="0"
                  label="右边距"
                  size="mini"
                />
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6" :offset="6">
                <el-input-number
                  v-model="updateData.componentData.margin[2]"
                  :min="0"
                  label="下边距"
                  size="mini"
                />
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="内边距" v-if="updateKeys.includes('padding')">
            <el-row :gutter="20">
              <el-col :span="6" :offset="6">
                <el-input-number
                  v-model="updateData.componentData.padding[0]"
                  :min="0"
                  label="上边距"
                  size="mini"
                />
              </el-col>
            </el-row>
            <el-row :gutter="20" style="margin: 10px 0">
              <el-col :span="6" :offset="0">
                <el-input-number
                  v-model="updateData.componentData.padding[3]"
                  :min="0"
                  label="左边距"
                  size="mini"
                />
              </el-col>
              <el-col :span="6" :offset="6">
                <el-input-number
                  v-model="updateData.componentData.padding[1]"
                  :min="0"
                  label="右边距"
                  size="mini"
                />
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6" :offset="6">
                <el-input-number
                  v-model="updateData.componentData.padding[2]"
                  :min="0"
                  label="下边距"
                  size="mini"
                />
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item
            label="横向布局"
            v-if="updateKeys.includes('justifyContent')"
          >
            <el-select
              v-model="updateData.componentData.justifyContent"
              placeholder="请选择"
            >
              <el-option label="居左" value="flex-start" />
              <el-option label="居中" value="center" />
              <el-option label="居右" value="flex-end" />
              <el-option label="两端对齐均分" value="space-between" />
              <el-option label="均分" value="space-around" />
            </el-select>
          </el-form-item>
          <el-form-item
            label="纵向布局"
            v-if="updateKeys.includes('justifyContent')"
          >
            <el-select
              v-model="updateData.componentData.alignItems"
              placeholder="请选择"
            >
              <el-option label="居上" value="flex-start" />
              <el-option label="居中" value="center" />
              <el-option label="居下" value="flex-end" />
            </el-select>
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
            <el-button @click="resetForm('ruleForm')">重置</el-button>
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
      // 修改对应组件值
      this.pageDataUpdate(this.updateData);
      this.$message.success("修改成功");
      //   关闭
      this.handleClose();
    },
    // 重置表单
    resetForm(formName) {},
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