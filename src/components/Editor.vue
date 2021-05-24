<template>
  <div id="editor" ref="editor" style="text-align: left"></div>
</template>
<script>
import E from "wangeditor";
export default {
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = new E(this.$refs.editor);
    // 设置菜单
    this.editor.config.menus = [
      "head",
      "bold",
      "fontSize",
      "fontName",
      "italic",
      "underline",
      "strikeThrough",
      "indent",
      "lineHeight",
      "foreColor",
      "backColor",
      "link",
      "list",
      "todo",
      "justify",
      "quote",
      "emoticon",
      // "image",
      // "video",
      "table",
      "code",
      "splitLine",
      "undo",
      "redo",
    ];
    this.editor.config.zIndex = 3;
    // 创建富文本
    this.editor.create();
    this.setVal(this.value);
  },
  methods: {
    setVal(val) {
      console.log(1);
      this.editor && this.editor.txt.html(val);
    },
    clearVal() {
      this.editor.txt.clear();
    },
    getVal() {
      return this.editor.txt.html();
    },
  },
  watch: {},
};
</script>