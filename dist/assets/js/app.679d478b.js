(function(t){function e(e){for(var a,o,c=e[0],s=e[1],d=e[2],l=0,p=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i={app:0},r=[];function c(t){return s.p+"assets/js/"+({}[t]||t)+"."+{"chunk-d6693254":"175f3a37","chunk-389beecc":"7a682762","chunk-6e4b56ff":"7cf04600","chunk-ffbae038":"4b163288"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-389beecc":1,"chunk-6e4b56ff":1,"chunk-ffbae038":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="assets/css/"+({}[t]||t)+"."+{"chunk-d6693254":"31d6cfe0","chunk-389beecc":"f1e3b139","chunk-6e4b56ff":"7bd08e9c","chunk-ffbae038":"5cd3736c"}[t]+".css",i=s.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===a||l===i))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){d=p[c],l=d.getAttribute("data-href");if(l===a||l===i)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[t],u.parentNode.removeChild(u),n(r)},u.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(u)})).then((function(){o[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var p=new Error;d=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",p.name="ChunkLoadError",p.type=a,p.request=o,n[1](p)}i[t]=void 0}};var u=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var p=0;p<d.length;p++)e(d[p]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00f1":function(t,e,n){"use strict";n("6c4a")},"0330":function(t,e,n){},1515:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"BookBlack component",style:{width:t.componentData.width+"px",height:t.componentData.height+"px",margin:t.componentData.margin.map((function(t){return t+"px"})).join(" "),backgroundColor:t.componentData.bgColor}},[n("div",{staticClass:"page_content",style:{padding:t.componentData.padding.map((function(t){return t+"px"})).join(" ")}},[t._t("default")],2),t._t("utils")],2)},o=[],i=(n("a9e3"),{props:{componentData:{type:[Object,String,Array,Number],required:!0},item:{type:Object,default:""}}}),r=i,c=(n("00f1"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"3a712d10",null);e["default"]=s.exports},2200:function(t,e,n){},"259b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ComponentContainer"},t._l(t.children,(function(e){return n(e.component,{key:e.id,tag:"component",class:{redact:t.redact},attrs:{componentData:e.componentData,item:e,drawer:t.drawer,zoom:t.zoom},on:{"update:drawer":function(e){t.drawer=e},handleClose:function(n){return t.handleClose("com"+e.id)}}},[t.redact?n("utils",{attrs:{slot:"utils",id:e.id,item:e,isDragstart:t.isDragstart},slot:"utils"}):t._e(),e.children&&e.children.length?n("ComponentContainer",{attrs:{children:e.children,redact:t.redact},on:{"update:children":function(n){return t.$set(e,"children",n)}}}):t._e()],1)})),1)},o=[],i=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"utils",staticClass:"utils",class:{selectBorder:t.isSelect&&1==t.pageDragState,redact:t.isShow},on:{mouseenter:function(e){e.stopPropagation(),t.pageDragState&&(t.isSelect=!0)},mouseleave:function(e){e.stopPropagation(),t.isSelect=!1},click:t.clickFn,mouseup:function(e){return t.isAddPageAddComponent(t.id)}}},[t.isShow&&"Page"!=t.item.component?n("VueDragResize",{attrs:{isActive:!0,isDraggable:t.item.componentData.hasOwnProperty("x"),aspectRatio:t.item.componentData.aspectRatio,w:t.item.componentData.width,h:t.item.componentData.height,x:t.item.componentData.x,y:t.item.componentData.y,parentLimitation:!0,parentW:t.maxWidth,parentH:t.maxHeight},on:{resizing:t.resize,dragging:t.resize}},[t.isShow?n("div",{staticClass:"centerR page_content"},["Page"!=t.item.component?n("el-button",{attrs:{type:"text"},on:{click:function(e){return e.stopPropagation(),t.redactComponent(e)}}},[t._v("编辑")]):t._e(),n("el-button",{attrs:{type:"text"},on:{click:function(e){return e.stopPropagation(),t.delComponent(e)}}},[t._v("删除")]),"Page"!=t.item.component?n("div",{staticClass:"el-button--text",staticStyle:{cursor:"all-scroll","margin-left":"6px"},attrs:{type:"text"},on:{mousedown:function(e){return e.stopPropagation(),t.dragstart(e)}}},[t._v(" 拖动 ")]):t._e()],1):t._e(),n("div",{staticClass:"size_info"},[n("span",[t._v(t._s(t.item.componentData.x)+"*"+t._s(t.item.componentData.y))]),n("span",{staticStyle:{padding:"0 3px"}},[t._v("/")]),n("span",[t._v(t._s(t.item.componentData.width)+"*"+t._s(t.item.componentData.height))])])]):t._e()],1)}),r=[],c=n("ade3"),s=n("5530"),d=(n("d81d"),n("2f62")),l=n("3b58"),p=n.n(l),u={props:{id:{type:[Number,String],required:!0},item:{type:Object,required:!0}},components:{VueDragResize:p.a},computed:Object(s["a"])({},Object(d["c"])(Object(c["a"])({pageDragState:function(t){return t.pageDataModule.pageDragState},pageAddComponent:function(t){return t.pageDataModule.pageAddComponent}},"pageAddComponent",(function(t){return t.pageDataModule.pageAddComponent})))),data:function(){return{isSelect:!1,isShow:!1,parentEle:"",maxWidth:0,maxHeight:0}},created:function(){var t=this;document.documentElement.addEventListener("click",(function(e){e.target!=t.$refs.utils&&(t.isShow=!1)}))},mounted:function(){this.getMaxSize()},methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])("pageDataModule",["pageDataAdd","pageDataRemove","isAddPageAddComponent","setPageAddComponent","setPageUpdateComponent"])),{},{clickFn:function(){this.isShow=!0},dragstart:function(){this.setPageAddComponent(this.item),this.pageDataRemove(this.id)},delComponent:function(){var t=this;this.$confirm("此操作将删除".concat(this.item.componentTitleStr,"，是否继续?"),"删除提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then((function(){t.pageDataRemove(t.id),t.$message({type:"success",message:"删除成功!"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},getMaxSize:function(){var t=this.$refs.utils.parentElement.parentElement.parentElement;this.parentEle=t;for(var e=this.parentEle.offsetWidth,n=this.parentEle.offsetHeight,a=0,o=0;o<this.$refs.utils.parentElement.parentElement.children.length;o++){var i=this.$refs.utils.parentElement.parentElement.children[o];i!=this.$refs.utils.parentElement&&(a+=i.offsetHeight,a+=parseInt(getComputedStyle(i).marginTop),a+=parseInt(getComputedStyle(i).marginBottom))}n-=a,this.item.componentData.hasOwnProperty("margin")&&(e=e-this.item.componentData.margin[1]-this.item.componentData.margin[3],n=n-this.item.componentData.margin[0]-this.item.componentData.margin[2]);var r=getComputedStyle(this.parentEle),c=[r.paddingTop,r.paddingRight,r.paddingBottom,r.paddingLeft],s=c.map((function(t){return parseInt(t)}));e=e-s[1]-s[3],n=n-s[0]-s[2],this.maxWidth=e,this.maxHeight=n},resize:function(t){this.item.componentData.width=t.width,this.item.componentData.height=t.height,this.item.componentData.hasOwnProperty("x")&&(this.item.componentData.x=t.left,this.item.componentData.y=t.top),this.getMaxSize()},redactComponent:function(){this.setPageUpdateComponent(this.item)}})},m=u,f=(n("651b"),n("2877")),g=Object(f["a"])(m,i,r,!1,null,"07fb33cf",null),h=g.exports,D={name:"ComponentContainer",components:{Utils:h},props:{children:{type:Array,required:!0},redact:{type:Boolean,default:!1},zoom:{type:[Number,String],default:1}},data:function(){return{isDragstart:!1,drawer:!1}},created:function(){},methods:{}},b=D,v=(n("4287"),Object(f["a"])(b,a,o,!1,null,"0dda0335",null));e["default"]=v.exports},"361d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Book_image component",style:{width:t.componentData.width+"px",height:t.componentData.height+"px",margin:t.componentData.margin.map((function(t){return t+"px"})).join(" ")},attrs:{title:"图片组件"}},[n("div",{staticClass:"page_content",style:{backgroundImage:"url('"+t.componentData.value+"')",padding:t.componentData.padding.map((function(t){return t+"px"})).join(" ")}},[t._t("default")],2),t._t("utils")],2)},o=[],i=(n("a9e3"),{props:{componentData:{type:[Object,String,Array,Number],required:!0},item:{type:Object,default:""}},data:function(){return{}},created:function(){},methods:{}}),r=i,c=(n("f128"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"13da12a9",null);e["default"]=s.exports},"36ca":function(t,e,n){"use strict";n("7d03")},3985:function(t,e,n){"use strict";n("3d9b")},"3ab4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Page",style:{transform:"scale("+t.zoom+")"}},[n("div",{staticClass:"page_content"},[t._t("default")],2),t._t("utils")],2)},o=[],i=(n("a9e3"),{props:{zoom:{type:[Number,String],default:1}},data:function(){return{}},created:function(){},methods:{}}),r=i,c=(n("5848"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"31b15246",null);e["default"]=s.exports},"3d39":function(t,e,n){},"3d9b":function(t,e,n){},"3fb6":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"BookFlex component",style:{width:t.componentData.width+"px",height:t.componentData.height+"px",margin:t.componentData.margin.map((function(t){return t+"px"})).join(" ")}},[n("div",{staticClass:"page_content",style:{padding:t.componentData.padding.map((function(t){return t+"px"})).join(" ")}},[t._t("default")],2),t._t("utils")],2)},o=[],i=(n("a9e3"),{props:{componentData:{type:[Object,String,Array,Number],required:!0},item:{type:Object,default:""}}}),r=i,c=(n("5795"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"26444454",null);e["default"]=s.exports},4287:function(t,e,n){"use strict";n("724c")},"4a25":function(t,e,n){},"4c76":function(t,e,n){"use strict";n("0330")},"4ee2":function(t,e,n){},"54f8":function(t,e,n){},"55bc":function(t,e,n){"use strict";n("ea1f")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d81d"),n("d3b7"),n("ddb0"),n("ac1f"),n("5319"),n("b0c0");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},i=[],r=(n("caad"),{created:function(){},mounted:function(){window.addEventListener("resize",this.monitor)},methods:{monitor:function(){if(["/Exhibition","/Adaptive"].includes(this.$route.path)){var t=document.documentElement.offsetWidth;t>750?"/Exhibition"!=this.$route.path&&this.$router.replace("/Exhibition"):"/Adaptive"!=this.$route.path&&this.$router.replace("/Adaptive")}}},watch:{"$route.path":function(){this.monitor()}},destroyed:function(){window.removeEventListener("resize",this.monitor)}}),c=r,s=n("2877"),d=Object(s["a"])(c,o,i,!1,null,null,null),l=d.exports,p=(n("3ca3"),n("8c4f")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"sidebar_box"},[n("div",{staticClass:"title"},[t._v("组件区域")]),n("Sidebar"),n("div",{staticClass:"center"},[n("el-button",{staticStyle:{width:"300px","margin-top":"40px"},attrs:{type:"text"},on:{click:t.addPage}},[t._v("添加页面")])],1),n("div",{staticClass:"center"},[n("el-button",{staticStyle:{width:"300px","margin-top":"40px"},on:{click:t.previewFn}},[t._v("预览")])],1)],1),n("div",{staticClass:"book_page"},[n("ComponentContainer",{attrs:{children:t.pageData.components,minID:t.pageData.minID,redact:!0},on:{"update:children":function(e){return t.$set(t.pageData,"components",e)}}})],1),n("UpdateComData")],1)},m=[],f=n("5530"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[t._l(t.components,(function(e){return n("div",{key:e.componentTitleStr,staticClass:"component_item center"},[t._v(" "+t._s(e.componentTitleStr)+" "),n("div",{staticClass:"container",on:{mousedown:function(n){return t.dragstart(e)},mouseup:function(n){return t.dragend(e)}}})])})),t.pageDragState?n("div",{staticClass:"component_content",style:{left:t.movement.x+"px",top:t.movement.y+"px"}},[n(t.pageAddComponent.component,{key:t.pageAddComponent.id,ref:"com"+t.pageAddComponent.id,tag:"component",class:{redact:!0},attrs:{componentData:t.pageAddComponent.componentData,item:t.pageAddComponent,redact:!0,drawer:!1,isDrage:!0},on:{handleClose:function(e){return t.handleClose("com"+t.pageAddComponent.id)}}},[n("ComponentContainer",{attrs:{children:t.pageAddComponent.children,redact:!0},on:{"update:children":function(e){return t.$set(t.pageAddComponent,"children",e)}}})],1)],1):t._e()],2)},h=[],D=n("2f62"),b={data:function(){return{components:[{id:0,parentId:0,componentTitleStr:"图片组件",component:"BookImage",componentData:{width:200,height:200,padding:[0,0,0,0],margin:[0,0,0,0],value:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"},children:[]},{id:0,parentId:0,componentTitleStr:"富文本组件",component:"BookContent",componentData:{html:"富文本内容组件，可以解析html标签",width:200,height:200,padding:[0,0,0,0],margin:[0,0,0,0]},children:[]},{id:0,parentId:0,componentTitleStr:"视频组件",component:"BookVideo",componentData:{value:"https://img.tukuppt.com/video_show/10/00/71/4/5f684cd46b673.mp4",width:60,height:60,aspectRatio:!0},children:[]},{id:0,parentId:0,componentTitleStr:"音频组件",component:"BookAudio",componentData:{value:"https://img.tukuppt.com/newpreview_music/08/99/04/5c88da803211726129.mp3",width:60,height:60,aspectRatio:!0},children:[]},{id:0,parentId:0,componentTitleStr:"定位组件",component:"BookPosition",componentData:{padding:[0,0,0,0],x:0,y:0,width:200,height:200},children:[]},{id:0,parentId:0,componentTitleStr:"Flex布局组件",component:"BookFlex",componentData:{width:200,height:200,padding:[0,0,0,0],margin:[0,0,0,0],alignItems:"flex-start",justifyContent:"flex-start"},children:[]},{id:0,parentId:0,componentTitleStr:"占位空白符",component:"BookBlack",componentData:{width:200,height:40,padding:[0,0,0,0],margin:[0,0,0,0],bgColor:"rgba(180, 220, 180, 0.8)"},children:[]}]}},computed:Object(f["a"])({},Object(D["c"])({pageDragState:function(t){return t.pageDataModule.pageDragState},pageAddComponent:function(t){return t.pageDataModule.pageAddComponent},movement:function(t){return t.pageDataModule.movement}})),created:function(){},mounted:function(){window.addEventListener("mousemove",this.move),window.addEventListener("mouseup",this.dragend)},methods:Object(f["a"])(Object(f["a"])({},Object(D["b"])("pageDataModule",["setPageDragState","setPageAddComponent","setMovement"])),{},{move:function(t){var e={x:t.clientX,y:t.clientY,dataX:t.offsetX,dataY:t.offsetY};this.setMovement(e)},dragstart:function(t){this.setPageAddComponent(t)},dragend:function(){this.setPageAddComponent("")}}),destroyed:function(){window.removeEventListener("mousemove",this.move),window.removeEventListener("mouseup",this.dragend)}},v=b,x=(n("3985"),Object(s["a"])(v,g,h,!1,null,"28efa3d3",null)),y=x.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"UpdateComData"},[n("el-drawer",{attrs:{title:"编辑组件数据",visible:t.drawer,direction:"ltr","before-close":t.handleClose},on:{"update:visible":function(e){t.drawer=e}}},[n("div",{staticClass:"update_content"},[n("el-form",{ref:"ruleForm",attrs:{model:t.updateData.componentData,"label-width":"80px","label-position":"top"}},[t.updateKeys.includes("value")?n("el-form-item",{attrs:{label:"组件值"}},[n("el-input",{model:{value:t.updateData.componentData.value,callback:function(e){t.$set(t.updateData.componentData,"value",e)},expression:"updateData.componentData.value"}})],1):t._e(),t.updateKeys.includes("html")?n("el-form-item",{attrs:{label:"富文本"}},[n("Editor",{ref:"Editor",attrs:{value:t.updateData.componentData.html}})],1):t._e(),t.updateKeys.includes("margin")?n("el-form-item",{attrs:{label:"外边距"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6,offset:6}},[n("el-input-number",{attrs:{min:0,label:"上边距",size:"mini"},model:{value:t.updateData.componentData.margin[0],callback:function(e){t.$set(t.updateData.componentData.margin,0,e)},expression:"updateData.componentData.margin[0]"}})],1)],1),n("el-row",{staticStyle:{margin:"10px 0"},attrs:{gutter:20}},[n("el-col",{attrs:{span:6,offset:0}},[n("el-input-number",{attrs:{min:0,label:"左边距",size:"mini"},model:{value:t.updateData.componentData.margin[3],callback:function(e){t.$set(t.updateData.componentData.margin,3,e)},expression:"updateData.componentData.margin[3]"}})],1),n("el-col",{attrs:{span:6,offset:6}},[n("el-input-number",{attrs:{min:0,label:"右边距",size:"mini"},model:{value:t.updateData.componentData.margin[1],callback:function(e){t.$set(t.updateData.componentData.margin,1,e)},expression:"updateData.componentData.margin[1]"}})],1)],1),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6,offset:6}},[n("el-input-number",{attrs:{min:0,label:"下边距",size:"mini"},model:{value:t.updateData.componentData.margin[2],callback:function(e){t.$set(t.updateData.componentData.margin,2,e)},expression:"updateData.componentData.margin[2]"}})],1)],1)],1):t._e(),t.updateKeys.includes("padding")?n("el-form-item",{attrs:{label:"内边距"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6,offset:6}},[n("el-input-number",{attrs:{min:0,label:"上边距",size:"mini"},model:{value:t.updateData.componentData.padding[0],callback:function(e){t.$set(t.updateData.componentData.padding,0,e)},expression:"updateData.componentData.padding[0]"}})],1)],1),n("el-row",{staticStyle:{margin:"10px 0"},attrs:{gutter:20}},[n("el-col",{attrs:{span:6,offset:0}},[n("el-input-number",{attrs:{min:0,label:"左边距",size:"mini"},model:{value:t.updateData.componentData.padding[3],callback:function(e){t.$set(t.updateData.componentData.padding,3,e)},expression:"updateData.componentData.padding[3]"}})],1),n("el-col",{attrs:{span:6,offset:6}},[n("el-input-number",{attrs:{min:0,label:"右边距",size:"mini"},model:{value:t.updateData.componentData.padding[1],callback:function(e){t.$set(t.updateData.componentData.padding,1,e)},expression:"updateData.componentData.padding[1]"}})],1)],1),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6,offset:6}},[n("el-input-number",{attrs:{min:0,label:"下边距",size:"mini"},model:{value:t.updateData.componentData.padding[2],callback:function(e){t.$set(t.updateData.componentData.padding,2,e)},expression:"updateData.componentData.padding[2]"}})],1)],1)],1):t._e(),t.updateKeys.includes("justifyContent")?n("el-form-item",{attrs:{label:"横向布局"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.updateData.componentData.justifyContent,callback:function(e){t.$set(t.updateData.componentData,"justifyContent",e)},expression:"updateData.componentData.justifyContent"}},[n("el-option",{attrs:{label:"居左",value:"flex-start"}}),n("el-option",{attrs:{label:"居中",value:"center"}}),n("el-option",{attrs:{label:"居右",value:"flex-end"}}),n("el-option",{attrs:{label:"两端对齐均分",value:"space-between"}}),n("el-option",{attrs:{label:"均分",value:"space-around"}})],1)],1):t._e(),t.updateKeys.includes("justifyContent")?n("el-form-item",{attrs:{label:"纵向布局"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.updateData.componentData.alignItems,callback:function(e){t.$set(t.updateData.componentData,"alignItems",e)},expression:"updateData.componentData.alignItems"}},[n("el-option",{attrs:{label:"居上",value:"flex-start"}}),n("el-option",{attrs:{label:"居中",value:"center"}}),n("el-option",{attrs:{label:"居下",value:"flex-end"}})],1)],1):t._e(),t.updateKeys.includes("bgColor")?n("el-form-item",{attrs:{label:"背景色"}},[n("el-color-picker",{attrs:{"show-alpha":""},model:{value:t.updateData.componentData.bgColor,callback:function(e){t.$set(t.updateData.componentData,"bgColor",e)},expression:"updateData.componentData.bgColor"}})],1):t._e(),n("el-form-item",{staticClass:"centerR"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v("保存")]),n("el-button",{on:{click:function(e){return t.resetForm("ruleForm")}}},[t._v("重置")])],1)],1)],1)])],1)},C=[],w=(n("b64b"),n("ceb0")),E={data:function(){return{drawer:!1,updateKeys:[],updateData:"",prop:[]}},components:{Editor:w["a"]},computed:Object(f["a"])({},Object(D["c"])({pageData:function(t){return t.pageDataModule.pageData},pageUpdateComponent:function(t){return t.pageDataModule.pageUpdateComponent}})),watch:{pageUpdateComponent:function(t){t?(this.drawer=!0,this.updateData=JSON.parse(JSON.stringify(t)),this.getUpdateKey()):(this.updateKeys=[],this.drawer=!1)}},methods:Object(f["a"])(Object(f["a"])({},Object(D["b"])("pageDataModule",["pageDataRemove","setPageUpdateComponent","pageDataUpdate"])),{},{handleClose:function(){this.setPageUpdateComponent("")},getUpdateKey:function(){console.log("keys",Object.keys(this.updateData.componentData)),this.updateKeys=Object.keys(this.updateData.componentData)},submitForm:function(t){console.log("保存"),this.$refs.Editor&&(this.updateData.componentData.html=this.$refs.Editor.getVal()),this.pageDataUpdate(this.updateData),this.$message.success("修改成功"),this.handleClose()},resetForm:function(t){}})},k=E,O=(n("6383"),Object(s["a"])(k,A,C,!1,null,"e7be71d8",null)),S=O.exports,_={components:{Sidebar:y,UpdateComData:S},computed:Object(f["a"])({},Object(D["c"])({pageData:function(t){return t.pageDataModule.pageData}})),data:function(){return{}},created:function(){},methods:Object(f["a"])(Object(f["a"])({},Object(D["b"])("pageDataModule",["pageDataAdd","pageDataRemove"])),{},{addPage:function(){this.pageDataAdd({parentId:0,component:{id:0,component:"Page",componentData:{},children:[]}})},previewFn:function(){localStorage.setItem("pageData",JSON.stringify(this.pageData));var t=this.$router.resolve({path:"/Exhibition"});window.open(t.href,"_blank")}})},U=_,P=(n("a942"),Object(s["a"])(U,u,m,!1,null,"2da7533b",null)),j=P.exports;a["default"].use(p["a"]);var M=[{path:"/",redirect:"/Exhibition"},{path:"/redact",name:"Redact",component:j},{path:"/Exhibition",name:"Exhibition",component:function(){return Promise.all([n.e("chunk-d6693254"),n.e("chunk-389beecc")]).then(n.bind(null,"98d7"))}},{path:"/Adaptive",name:"Adaptive",component:function(){return Promise.all([n.e("chunk-d6693254"),n.e("chunk-6e4b56ff")]).then(n.bind(null,"faa0"))}},{path:"*",name:"404",component:function(){return n.e("chunk-ffbae038").then(n.bind(null,"8cdb"))}}],Q=new p["a"]({mode:"hash",base:"",routes:M}),F=Q,B=(n("a434"),""),I=function t(e,n){for(var a=0;a<e.length;a++){var o=e[a];if(o.id==n)return B={children:e,item:o,id:n,index:a};o.children&&o.children.length&&t(o.children,n)}},z={namespaced:!0,state:{pageData:{minID:2,components:[{id:1,component:"Page",componentData:{},children:[]}]},pageDragState:!1,pageAddComponent:"",movement:{x:0,y:0,dataX:0,dataY:0},pageUpdateComponent:""},mutations:{setMovement:function(t,e){t.movement=e},setPageAddComponent:function(t,e){t.pageAddComponent=e,this.commit("pageDataModule/setPageDragState",e)},setPageDragState:function(t,e){t.pageDragState=1==new Boolean(e)},pageDataAdd:function(t,e){var n=e.parentId,a=e.component,o=JSON.parse(JSON.stringify(t.pageData));if(a=JSON.parse(JSON.stringify(a)),a.id=o.minID,o.minID++,a.componentData.hasOwnProperty("x")&&(a.componentData.x=t.movement.dataX,a.componentData.y=t.movement.dataY),0==n||null==n)o.components.push(a);else{I(o.components,n);var i=B,r=i.item;r.children.push(a)}t.pageData=o},pageDataRemove:function(t,e){var n=JSON.parse(JSON.stringify(t.pageData));I(n.components,e);var a=B,o=a.children,i=a.index;o.splice(i,1),t.pageData=n},pageDataUpdate:function(t,e){console.log("修改组件",e);var n=JSON.parse(JSON.stringify(t.pageData));I(n.components,e.id);var a=B,o=a.children,i=a.index;o[i]=e,t.pageData=n,console.log("修改完成",n)},isAddPageAddComponent:function(t,e){t.pageDragState&&(this.commit("pageDataModule/pageDataAdd",{parentId:e,component:t.pageAddComponent}),this.commit("pageDataModule/setPageAddComponent",""))},setPageUpdateComponent:function(t,e){console.log("编辑组件",e),t.pageUpdateComponent=e}},actions:{}},R=z;a["default"].use(D["a"]);var K=new D["a"].Store({state:{webMoveEvent:""},mutations:{},actions:{},modules:{pageDataModule:R}}),T=n("5c96"),N=n.n(T),V=(n("4ee2"),n("3d39"),n("94bb"));V.keys().map((function(t){var e=V(t).default,n=/\w+.vue$/.exec(t)[0].replace(".vue",""),o=e.name||n;a["default"].component(o,e)})),a["default"].config.productionTip=!1,a["default"].use(N.a),console.log(Object({NODE_ENV:"production",BASE_URL:""}),"环境变量"),new a["default"]({router:F,store:K,render:function(t){return t(l)}}).$mount("#app")},5795:function(t,e,n){"use strict";n("2200")},5848:function(t,e,n){"use strict";n("54f8")},"5ca1":function(t,e,n){},6383:function(t,e,n){"use strict";n("4a25")},"651b":function(t,e,n){"use strict";n("d374")},"6c4a":function(t,e,n){},"724c":function(t,e,n){},7343:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"BookAudio component",style:{width:t.componentData.width+"px",height:t.componentData.width+"px",margin:t.componentData.margin},attrs:{title:"音频组件"}},[a("div",{staticClass:"page_content",style:{backgroundSize:t.componentData.size,backgroundPosition:t.componentData.position,padding:t.componentData.padding}},[a("div",{staticClass:"center",staticStyle:{width:"1005"}},[a("audio",{ref:"audio",attrs:{src:t.componentData.value,controls:""}}),a("div",{staticClass:"play_box",style:{width:t.componentData.width+"px",height:t.componentData.width+"px"}},[a("div",{staticClass:"play_status",style:{width:t.componentData.width+"px",height:t.componentData.width+"px"}},[t.isPlay?a("img",{staticClass:"el-icon-video-pause",attrs:{src:n("bf2e")},on:{click:function(e){return t.changePlay(!1)}}}):a("img",{staticClass:"el-icon-video-play",attrs:{src:n("dde5")},on:{click:function(e){return t.changePlay(!0)}}})]),t.isPlay?a("el-progress",{attrs:{"stroke-width":3,type:"circle","show-text":!1,percentage:t.curtime,width:t.componentData.width-0,color:"#ff9813"}}):t._e()],1)]),t._t("default")],2),t._t("utils")],2)},o=[],i=(n("a9e3"),{props:{componentData:{type:[Object,String,Array,Number],required:!0},item:{type:Object,default:""}},data:function(){return{isPlay:!1,curtime:0}},created:function(){},methods:{changePlay:function(t){this.isPlay=t,this.isPlay?(this.$refs.audio.play(),this.getCurTime()):this.$refs.audio.pause()},getCurTime:function(){var t=this;this.$refs.audio.ontimeupdate=function(){t.curtime=t.$refs.audio.currentTime/t.$refs.audio.duration*100,t.$refs.audio.currentTime==t.$refs.audio.duration&&(t.curtime=0,t.changePlay(!1))}}}}),r=i,c=(n("4c76"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"5d9279da",null);e["default"]=s.exports},"7b05":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:!1,expression:"false"}],staticClass:"BookVideo component",style:{width:t.componentData.width+"px",height:t.componentData.width+"px",margin:t.componentData.margin},attrs:{title:"视频组件","element-loading-text":"加载中...","element-loading-spinner":"el-icon-loading"}},[a("div",{staticClass:"page_content",style:{backgroundSize:t.componentData.size,backgroundPosition:t.componentData.position,padding:t.componentData.padding}},[a("div",{staticClass:"play_box"},[a("div",{staticClass:"play_box",style:{width:t.componentData.width+"px",height:t.componentData.width+"px"}},[a("div",{staticClass:"play_status",style:{width:t.componentData.width+"px",height:t.componentData.width+"px"}},[t.isPlay?a("img",{staticClass:"el-icon-video-pause",attrs:{src:n("bf2e")},on:{click:function(e){return t.changePlay(!1)}}}):a("img",{staticClass:"el-icon-video-play",attrs:{src:n("ed6e")},on:{click:function(e){return t.changePlay(!0)}}})]),t.isPlay?a("el-progress",{attrs:{"stroke-width":3,type:"circle","show-text":!1,percentage:t.curtime,width:t.componentData.width-0,color:"#ff7214"}}):t._e()],1)]),t._t("default")],2),t._t("utils"),a("el-dialog",{attrs:{title:"视频播放",visible:t.isPlay,width:"60%","before-close":function(){t.changePlay(!1)},"append-to-body":!0}},[a("video",{ref:"video",attrs:{width:"100%",height:"100%",src:t.componentData.value,controls:""}})])],2)},o=[],i=(n("a9e3"),{props:{componentData:{type:[Object,String,Array,Number],required:!0},item:{type:Object,default:""}},data:function(){return{isPlay:!1,curtime:0}},created:function(){},methods:{changePlay:function(t){var e=this;this.isPlay=t,console.log(t),this.$nextTick((function(){e.isPlay?(e.$refs.video.play(),e.getCurTime()):e.$refs.video.pause()}))},getCurTime:function(){var t=this;this.$refs.video.ontimeupdate=function(){t.curtime=t.$refs.video.currentTime/t.$refs.video.duration*100,t.$refs.video.currentTime==t.$refs.video.duration&&(t.curtime=0,t.changePlay(!1))}}}}),r=i,c=(n("55bc"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"2324f8d4",null);e["default"]=s.exports},"7d03":function(t,e,n){},"92d5":function(t,e,n){},"94bb":function(t,e,n){var a={"./BookAudio.vue":"7343","./BookBlack.vue":"1515","./BookContent.vue":"e747","./BookFlex copy.vue":"3fb6","./BookFlex.vue":"aeba","./BookImage.vue":"361d","./BookPosition.vue":"d17d","./BookVideo.vue":"7b05","./ComponentContainer.vue":"259b","./Page.vue":"3ab4"};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=i,t.exports=o,o.id="94bb"},a942:function(t,e,n){"use strict";n("f171")},aeba:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"BookFlex component",style:{width:t.componentData.width+"px",height:t.componentData.height+"px",margin:t.componentData.margin.map((function(t){return t+"px"})).join(" ")},attrs:{title:t.item.componentTitleStr}},[n("div",{ref:"pageContent",staticClass:"page_content",style:{padding:t.componentData.padding.map((function(t){return t+"px"})).join(" ")}},[t._t("default")],2),t._t("utils")],2)},o=[],i=(n("a9e3"),n("159b"),{props:{componentData:{type:[Object,String,Array,Number],required:!0},item:{type:Object,default:""}},mounted:function(){this.setChildrenStyle()},methods:{setChildrenStyle:function(){var t=this;this.$refs.pageContent.children.forEach((function(e){e.style.alignItems=t.componentData.alignItems,e.style.justifyContent=t.componentData.justifyContent}))}},watch:{componentData:{handler:function(t,e){this.$refs.pageContent&&this.setChildrenStyle()},immediate:!0}}}),r=i,c=(n("b217"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"07518886",null);e["default"]=s.exports},b217:function(t,e,n){"use strict";n("5ca1")},b8c3:function(t,e,n){},bf2e:function(t,e){t.exports="data:image/png;base64,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"},ceb0:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"editor",staticStyle:{"text-align":"left"},attrs:{id:"editor"}})},o=[],i=(n("a9e3"),n("6fad")),r=n.n(i),c={props:{value:{type:[String,Number],required:!0}},data:function(){return{editor:null}},mounted:function(){this.editor=new r.a(this.$refs.editor),this.editor.config.menus=["head","bold","fontSize","fontName","italic","underline","strikeThrough","indent","lineHeight","foreColor","backColor","link","list","todo","justify","quote","emoticon","table","code","splitLine","undo","redo"],this.editor.config.zIndex=3,this.editor.create(),this.setVal(this.value)},methods:{setVal:function(t){console.log(1),this.editor&&this.editor.txt.html(t)},clearVal:function(){this.editor.txt.clear()},getVal:function(){return this.editor.txt.html()}},watch:{}},s=c,d=n("2877"),l=Object(d["a"])(s,a,o,!1,null,null,null);e["a"]=l.exports},d17d:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"positionRef",staticClass:"BookPosition component",class:{redact:t.redact,isDrage:t.isDrage},style:{left:t.componentData.x+"px",top:t.componentData.y+"px",width:t.componentData.width+"px",height:t.componentData.height+"px"},attrs:{title:"定位组件"}},[n("div",{staticClass:"page_content",style:{padding:t.componentData.padding.map((function(t){return t+"px"})).join(" ")}},[t._t("default")],2),t._t("utils")],2)},o=[],i=(n("a9e3"),{props:{componentData:{type:[Object,String,Array,Number],required:!0},item:{type:Object,default:""},redact:{type:Boolean,default:!1},isDrage:{type:Boolean,default:!1}},data:function(){return{}},created:function(){},mounted:function(){},methods:{}}),r=i,c=(n("de55"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"c5287474",null);e["default"]=s.exports},d374:function(t,e,n){},dde5:function(t,e,n){t.exports=n.p+"assets/img/audioplay.ef6037b9.png"},de55:function(t,e,n){"use strict";n("92d5")},e747:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"BookContent component",style:{margin:t.componentData.margin.map((function(t){return t+"px"})).join(" "),width:t.componentData.width+"px",height:t.componentData.height+"px"},attrs:{title:"富文本组件"}},[n("div",{staticClass:"page_content",style:{padding:t.componentData.padding.map((function(t){return t+"px"})).join(" ")}},[n("div",{domProps:{innerHTML:t._s(t.componentData.html)}}),t._t("default")],2),t._t("utils")],2)},o=[],i=(n("a9e3"),n("ceb0")),r={components:{Editor:i["a"]},props:{componentData:{type:[Object,String,Array,Number],required:!0}},data:function(){return{}},created:function(){},methods:{}},c=r,s=(n("36ca"),n("2877")),d=Object(s["a"])(c,a,o,!1,null,"ed41c266",null);e["default"]=d.exports},ea1f:function(t,e,n){},ed6e:function(t,e,n){t.exports=n.p+"assets/img/videoplay.a230414f.png"},f128:function(t,e,n){"use strict";n("b8c3")},f171:function(t,e,n){}});