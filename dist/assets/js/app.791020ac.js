(function(t){function e(e){for(var a,o,c=e[0],s=e[1],l=e[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i={app:0},r=[];function c(t){return s.p+"assets/js/"+({}[t]||t)+"."+{"chunk-d6693254":"175f3a37","chunk-389beecc":"5ecd56d0","chunk-6e4b56ff":"a0e829cd"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-389beecc":1,"chunk-6e4b56ff":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="assets/css/"+({}[t]||t)+"."+{"chunk-d6693254":"31d6cfe0","chunk-389beecc":"f1e3b139","chunk-6e4b56ff":"7bd08e9c"}[t]+".css",i=s.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===i))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){l=p[c],d=l.getAttribute("data-href");if(d===a||d===i)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[t],u.parentNode.removeChild(u),n(r)},u.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(u)})).then((function(){o[t]=0})));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=i[t]=[e,n]}));e.push(a[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(t);var p=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",p.name="ChunkLoadError",p.type=a,p.request=o,n[1](p)}i[t]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var u=d;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"042c":function(t,e,n){"use strict";n("a643")},"1ebc":function(t,e,n){"use strict";n("e9b9")},"259b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ComponentContainer"},t._l(t.children,(function(e){return n(e.component,{key:e.id,ref:"com"+e.id,refInFor:!0,tag:"component",class:{redact:t.redact},attrs:{componentData:e.componentData,item:e,redact:t.redact,drawer:t.drawer,zoom:t.zoom},on:{"update:drawer":function(e){t.drawer=e},handleClose:function(n){return t.handleClose("com"+e.id)}}},[t.redact?n("utils",{attrs:{slot:"utils",id:e.id,item:e,isDragstart:t.isDragstart},on:{updateFn:function(n){return t.openUpdate("com"+e.id)}},slot:"utils"}):t._e(),e.children&&e.children.length?n("ComponentContainer",{attrs:{children:e.children,redact:t.redact},on:{"update:children":function(n){return t.$set(e,"children",n)}}}):t._e()],1)})),1)},o=[],i=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"util",staticClass:"utils",class:{selectBorder:t.isSelect&&1==t.pageDragState,redact:t.isShow},on:{mouseenter:function(e){e.stopPropagation(),t.pageDragState&&(t.isSelect=!0)},mouseleave:function(e){e.stopPropagation(),t.isSelect=!1},click:t.clickFn,mouseup:function(e){return t.isAddPageAddComponent(t.id)}}},[t.isShow?n("div",{staticClass:"centerR page_content"},["Page"!=t.item.component?n("el-button",{attrs:{type:"text"},on:{click:function(e){return e.stopPropagation(),t.$emit("updateFn")}}},[t._v("编辑")]):t._e(),n("el-button",{attrs:{type:"text"},on:{click:function(e){return e.stopPropagation(),t.delComponent(e)}}},[t._v("删除")]),"Page"!=t.item.component?n("div",{staticClass:"el-button--text",staticStyle:{cursor:"all-scroll","margin-left":"6px"},attrs:{type:"text"},on:{mousedown:function(e){return e.stopPropagation(),t.dragstart(e)}}},[t._v(" 拖动 ")]):t._e()],1):t._e(),t.isShow?n("div",{staticClass:"zoom_btns",on:{mousedown:t.zoomStart,mouseup:t.zoomEnd}},t._l(8,(function(t){return n("i",{key:t})})),0):t._e()])}),r=[],c=n("ade3"),s=n("5530"),l=n("2f62"),d={props:{id:{type:[Number,String],required:!0},item:{type:Object,required:!0}},computed:Object(s["a"])({},Object(l["c"])(Object(c["a"])({pageDragState:function(t){return t.pageDataModule.pageDragState},pageAddComponent:function(t){return t.pageDataModule.pageAddComponent}},"pageAddComponent",(function(t){return t.pageDataModule.pageAddComponent})))),data:function(){return{isSelect:!1,isShow:!1}},created:function(){var t=this;document.documentElement.addEventListener("click",(function(e){e.target!=t.$refs.util&&(t.isShow=!1)}))},methods:Object(s["a"])(Object(s["a"])({},Object(l["b"])("pageDataModule",["pageDataAdd","pageDataRemove","isAddPageAddComponent","setPageAddComponent"])),{},{clickFn:function(){this.isShow=!0},dragstart:function(){this.setPageAddComponent(this.item),this.pageDataRemove(this.id)},delComponent:function(){var t=this;this.$confirm("此操作将删除".concat(this.item.componentTitleStr,"，是否继续?"),"删除提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then((function(){t.pageDataRemove(t.id),t.$message({type:"success",message:"删除成功!"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},zoomStart:function(t){window.addEventListener("mousemove",this.moveResize)},zoomEnd:function(){console.log("抬起"),window.removeEventListener("mousemove",this.moveResize)},moveResize:function(t){console.log(t)}})},p=d,u=(n("1ebc"),n("2877")),m=Object(u["a"])(p,i,r,!1,null,"a0291098",null),f=m.exports,g={name:"ComponentContainer",components:{Utils:f},props:{children:{type:Array,required:!0},redact:{type:Boolean,default:!1},zoom:{type:[Number,String],default:1}},data:function(){return{isDragstart:!1,drawer:!1}},created:function(){},methods:{openUpdate:function(t){this.$refs[t][0].drawer=!0},handleClose:function(t){this.$refs[t][0].drawer=!1}}},h=g,v=(n("d281"),Object(u["a"])(h,a,o,!1,null,"19042bca",null));e["default"]=v.exports},2715:function(t,e,n){},"361d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Book_image component",style:{width:t.componentData.width,height:t.componentData.height,margin:t.componentData.margin},attrs:{title:"图片组件"}},[n("div",{staticClass:"page_content",style:{backgroundImage:"url('"+t.componentData.value+"')",backgroundSize:t.componentData.size,backgroundPosition:t.componentData.position,padding:t.componentData.padding}},[t._t("default")],2),t._t("utils"),n("el-drawer",{attrs:{title:"组件数据",visible:t.drawer,direction:"btt","before-close":function(){t.$emit("handleClose")},"append-to-body":!0,size:"60%"},on:{"update:visible":function(e){t.drawer=e}}},[n("div",{staticStyle:{padding:"20px"},on:{click:function(t){t.stopPropagation()}}},[n("el-form",{ref:"form",attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"宽度"}},[n("el-input",{staticStyle:{width:"280px"},model:{value:t.componentData.width,callback:function(e){t.$set(t.componentData,"width",e)},expression:"componentData.width"}}),n("span",{staticStyle:{"font-size":"12px"}},[t._v(" %/px")])],1),n("el-form-item",{attrs:{label:"高度"}},[n("el-input",{staticStyle:{width:"280px"},model:{value:t.componentData.height,callback:function(e){t.$set(t.componentData,"height",e)},expression:"componentData.height"}}),n("span",{staticStyle:{"font-size":"12px"}},[t._v("px")])],1),n("el-form-item",{attrs:{label:"外边距"}},[n("el-input",{staticStyle:{width:"280px"},model:{value:t.componentData.margin,callback:function(e){t.$set(t.componentData,"margin",e)},expression:"componentData.margin"}}),n("span",{staticStyle:{"font-size":"12px"}},[t._v(" %/px")])],1),n("el-form-item",{attrs:{label:"内边距"}},[n("el-input",{staticStyle:{width:"280px"},model:{value:t.componentData.padding,callback:function(e){t.$set(t.componentData,"padding",e)},expression:"componentData.padding"}}),n("span",{staticStyle:{"font-size":"12px"}},[t._v(" %/px")])],1),n("el-form-item",{attrs:{label:"图片地址"}},[n("el-input",{model:{value:t.componentData.value,callback:function(e){t.$set(t.componentData,"value",e)},expression:"componentData.value"}})],1),n("el-form-item",{attrs:{label:"图片大小"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.componentData.size,callback:function(e){t.$set(t.componentData,"size",e)},expression:"componentData.size"}},t._l(t.options,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),n("el-form-item",{attrs:{label:"图片位置"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.componentData.position,callback:function(e){t.$set(t.componentData,"position",e)},expression:"componentData.position"}},[n("el-option",{attrs:{label:"居中",value:"center"}}),n("el-option",{attrs:{label:"居上",value:"top"}}),n("el-option",{attrs:{label:"居下",value:"bottom"}}),n("el-option",{attrs:{label:"居左",value:"left"}}),n("el-option",{attrs:{label:"居右",value:"right"}})],1)],1)],1)],1)])],2)},o=[],i=(n("a9e3"),{props:{componentData:{type:[Object,String,Array,Number],required:!0},item:{type:Object,default:""}},data:function(){return{drawer:!1,options:[{value:"100% 100%",label:"拉伸"},{value:"contain",label:"包含"},{value:"cover",label:"裁切"}]}},created:function(){},methods:{}}),r=i,c=(n("4014"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"25a1c35a",null);e["default"]=s.exports},"39b1":function(t,e,n){"use strict";n("4d94")},"3ab4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Page",style:{transform:"scale("+t.zoom+")"}},[n("div",{staticClass:"page_content"},[t._t("default")],2),t._t("utils")],2)},o=[],i=(n("a9e3"),{props:{zoom:{type:[Number,String],default:1}},data:function(){return{}},created:function(){},methods:{}}),r=i,c=(n("5848"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"31b15246",null);e["default"]=s.exports},"3d39":function(t,e,n){},4014:function(t,e,n){"use strict";n("8bee")},"4d94":function(t,e,n){},"4ee2":function(t,e,n){},"50ba":function(t,e,n){},"54f8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d81d"),n("d3b7"),n("ddb0"),n("ac1f"),n("5319"),n("b0c0");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},i=[],r=(n("caad"),{created:function(){},mounted:function(){window.addEventListener("resize",this.monitor)},methods:{monitor:function(){if(["/Exhibition","/Adaptive"].includes(this.$route.path)){var t=document.documentElement.offsetWidth;t>750?"/Exhibition"!=this.$route.path&&this.$router.replace("/Exhibition"):"/Adaptive"!=this.$route.path&&this.$router.replace("/Adaptive")}}},watch:{"$route.path":function(){this.monitor()}},destroyed:function(){window.removeEventListener("resize",this.monitor)}}),c=r,s=n("2877"),l=Object(s["a"])(c,o,i,!1,null,null,null),d=l.exports,p=(n("3ca3"),n("8c4f")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"sidebar_box"},[n("div",{staticClass:"title"},[t._v("组件区域")]),n("Sidebar"),n("div",{staticClass:"center"},[n("el-button",{staticStyle:{width:"300px","margin-top":"40px"},attrs:{type:"text"},on:{click:t.addPage}},[t._v("添加页面")])],1),n("div",{staticClass:"center"},[n("el-button",{staticStyle:{width:"300px","margin-top":"40px"},on:{click:t.previewFn}},[t._v("预览")])],1)],1),n("div",{staticClass:"book_page"},[n("ComponentContainer",{attrs:{children:t.pageData.components,minID:t.pageData.minID,redact:!0},on:{"update:children":function(e){return t.$set(t.pageData,"components",e)}}})],1)])},m=[],f=n("5530"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[t._l(t.components,(function(e){return n("div",{key:e.componentTitleStr,staticClass:"component_item center"},[t._v(" "+t._s(e.componentTitleStr)+" "),n("div",{staticClass:"container",on:{mousedown:function(n){return t.dragstart(e)},mouseup:function(n){return t.dragend(e)}}})])})),t.pageDragState?n("div",{staticClass:"component_content",style:{left:t.movement.x+"px",top:t.movement.y+"px"}},[n(t.pageAddComponent.component,{key:t.pageAddComponent.id,ref:"com"+t.pageAddComponent.id,tag:"component",class:{redact:!1},attrs:{componentData:t.pageAddComponent.componentData,item:t.pageAddComponent,redact:!0,drawer:!1,isDrage:!0},on:{handleClose:function(e){return t.handleClose("com"+t.pageAddComponent.id)}}},[n("ComponentContainer",{attrs:{children:t.pageAddComponent.children,redact:!0},on:{"update:children":function(e){return t.$set(t.pageAddComponent,"children",e)}}})],1)],1):t._e()],2)},h=[],v=n("2f62"),b={data:function(){return{components:[{id:0,parentId:0,componentTitleStr:"图片组件",component:"BookImage",componentData:{name:"舒榆衡",width:"auto",height:"",padding:"",margin:"",size:"cover",position:"center",value:"https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"},children:[]},{id:0,parentId:0,componentTitleStr:"富文本组件",component:"BookContent",componentData:{value:"富文本内容组件，可以解析html标签",padding:"0px",margin:"0px"},children:[]},{id:0,parentId:0,componentTitleStr:"视频组件",component:"BookVideo",componentData:{value:"https://img.tukuppt.com/video_show/10/00/71/4/5f684cd46b673.mp4",width:"60",margin:"0px"},children:[]},{id:0,parentId:0,componentTitleStr:"音频组件",component:"BookAudio",componentData:{value:"https://img.tukuppt.com/newpreview_music/08/99/04/5c88da803211726129.mp3",width:"60",margin:"0px"},children:[]},{id:0,parentId:0,componentTitleStr:"定位组件",component:"BookPosition",componentData:{padding:"30px",margin:"0px",x:0,y:0},children:[]}]}},computed:Object(f["a"])({},Object(v["c"])({pageDragState:function(t){return t.pageDataModule.pageDragState},pageAddComponent:function(t){return t.pageDataModule.pageAddComponent},movement:function(t){return t.pageDataModule.movement}})),created:function(){},mounted:function(){window.addEventListener("mousemove",this.move),window.addEventListener("mouseup",this.dragend)},methods:Object(f["a"])(Object(f["a"])({},Object(v["b"])("pageDataModule",["setPageDragState","setPageAddComponent","setMovement"])),{},{move:function(t){var e={x:t.clientX,y:t.clientY,dataX:t.offsetX,dataY:t.offsetY};this.setMovement(e)},dragstart:function(t){this.setPageAddComponent(t)},dragend:function(){this.setPageAddComponent("")}}),destroyed:function(){window.removeEventListener("mousemove",this.move),window.removeEventListener("mouseup",this.dragend)}},D=b,x=(n("599a"),Object(s["a"])(D,g,h,!1,null,"c87541b2",null)),y=x.exports,w={components:{Sidebar:y},computed:Object(f["a"])({},Object(v["c"])({pageData:function(t){return t.pageDataModule.pageData}})),data:function(){return{}},created:function(){},methods:Object(f["a"])(Object(f["a"])({},Object(v["b"])("pageDataModule",["pageDataAdd","pageDataRemove"])),{},{addPage:function(){this.pageDataAdd({parentId:0,component:{id:0,component:"Page",componentData:{},children:[]}})},previewFn:function(){localStorage.setItem("pageData",JSON.stringify(this.pageData));var t=this.$router.resolve({path:"/Exhibition"});window.open(t.href,"_blank")}})},A=w,C=(n("7a57"),Object(s["a"])(A,u,m,!1,null,"73beb996",null)),E=C.exports;a["default"].use(p["a"]);var S=[{path:"/",name:"Home",redirect:"/Adaptive"},{path:"/redact",name:"Home",component:E},{path:"/Exhibition",name:"Exhibition",component:function(){return Promise.all([n.e("chunk-d6693254"),n.e("chunk-389beecc")]).then(n.bind(null,"98d7"))}},{path:"/Adaptive",name:"Adaptive",component:function(){return Promise.all([n.e("chunk-d6693254"),n.e("chunk-6e4b56ff")]).then(n.bind(null,"faa0"))}}],k=new p["a"]({mode:"hash",base:"",routes:S}),P=k,O=(n("a434"),""),M=function t(e,n){for(var a=0;a<e.length;a++){var o=e[a];if(o.id==n)return O={children:e,item:o,id:n,index:a};o.children&&o.children.length&&t(o.children,n)}},Q={namespaced:!0,state:{pageData:{minID:2,components:[{id:1,component:"Page",componentData:{},children:[]}]},pageDragState:!1,pageAddComponent:"",movement:{x:0,y:0,dataX:0,dataY:0}},mutations:{setMovement:function(t,e){t.movement=e},setPageAddComponent:function(t,e){t.pageAddComponent=e,this.commit("pageDataModule/setPageDragState",e)},setPageDragState:function(t,e){t.pageDragState=1==new Boolean(e)},pageDataAdd:function(t,e){var n=e.parentId,a=e.component,o=JSON.parse(JSON.stringify(t.pageData));if(a=JSON.parse(JSON.stringify(a)),a.id=o.minID,o.minID++,a.componentData.hasOwnProperty("x")&&(a.componentData.x=t.movement.dataX,a.componentData.y=t.movement.dataY),0==n||null==n)o.components.push(a);else{M(o.components,n);var i=O,r=i.item;r.children.push(a)}t.pageData=o},pageDataRemove:function(t,e){var n=JSON.parse(JSON.stringify(t.pageData));M(n.components,e);var a=O,o=a.children,i=a.index;o.splice(i,1),t.pageData=n},isAddPageAddComponent:function(t,e){t.pageDragState&&(this.commit("pageDataModule/pageDataAdd",{parentId:e,component:t.pageAddComponent}),this.commit("pageDataModule/setPageAddComponent",""))}},actions:{}},_=Q;a["default"].use(v["a"]);var U=new v["a"].Store({state:{webMoveEvent:""},mutations:{},actions:{},modules:{pageDataModule:_}}),z=n("5c96"),F=n.n(z),I=(n("4ee2"),n("3d39"),n("94bb"));I.keys().map((function(t){var e=I(t).default,n=/\w+.vue$/.exec(t)[0].replace(".vue",""),o=e.name||n;a["default"].component(o,e)})),a["default"].config.productionTip=!1,a["default"].use(F.a),console.log(Object({NODE_ENV:"production",BASE_URL:""}),"环境变量"),new a["default"]({router:P,store:U,render:function(t){return t(d)}}).$mount("#app")},5848:function(t,e,n){"use strict";n("54f8")},"599a":function(t,e,n){"use strict";n("d172")},7343:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"BookAudio component",style:{width:t.componentData.width+"px",height:t.componentData.width+"px",margin:t.componentData.margin},attrs:{title:"音频组件"}},[a("div",{staticClass:"page_content",style:{backgroundSize:t.componentData.size,backgroundPosition:t.componentData.position,padding:t.componentData.padding}},[a("div",{staticClass:"center",staticStyle:{width:"1005"}},[a("audio",{ref:"audio",attrs:{src:t.componentData.value,controls:""}}),a("div",{staticClass:"play_box",style:{width:t.componentData.width+"px",height:t.componentData.width+"px"}},[a("div",{staticClass:"play_status",style:{width:t.componentData.width+"px",height:t.componentData.width+"px"}},[t.isPlay?a("img",{staticClass:"el-icon-video-pause",attrs:{src:n("bf2e")},on:{click:function(e){return t.changePlay(!1)}}}):a("img",{staticClass:"el-icon-video-play",attrs:{src:n("dde5")},on:{click:function(e){return t.changePlay(!0)}}})]),t.isPlay?a("el-progress",{attrs:{"stroke-width":3,type:"circle","show-text":!1,percentage:t.curtime,width:t.componentData.width-0,color:"#ff9813"}}):t._e()],1)]),t._t("default")],2),t._t("utils"),a("el-drawer",{attrs:{title:"组件数据",visible:t.drawer,direction:"btt","before-close":function(){t.$emit("handleClose")},"append-to-body":!0,size:"60%"},on:{"update:visible":function(e){t.drawer=e}}},[a("div",{staticStyle:{padding:"20px"},on:{click:function(t){t.stopPropagation()}}},[a("el-form",{ref:"form",attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"尺寸"}},[a("el-input",{staticStyle:{width:"280px"},model:{value:t.componentData.width,callback:function(e){t.$set(t.componentData,"width",e)},expression:"componentData.width"}})],1),a("el-form-item",{attrs:{label:"外边距"}},[a("el-input",{staticStyle:{width:"280px"},model:{value:t.componentData.margin,callback:function(e){t.$set(t.componentData,"margin",e)},expression:"componentData.margin"}}),a("span",{staticStyle:{"font-size":"12px"}},[t._v(" %/px")])],1),a("el-form-item",{attrs:{label:"音频地址"}},[a("el-input",{model:{value:t.componentData.value,callback:function(e){t.$set(t.componentData,"value",e)},expression:"componentData.value"}})],1)],1)],1)])],2)},o=[],i=(n("a9e3"),{props:{componentData:{type:[Object,String,Array,Number],required:!0},item:{type:Object,default:""}},data:function(){return{drawer:!1,isPlay:!1,curtime:0}},created:function(){},methods:{changePlay:function(t){this.isPlay=t,this.isPlay?(this.$refs.audio.play(),this.getCurTime()):this.$refs.audio.pause()},getCurTime:function(){var t=this;this.$refs.audio.ontimeupdate=function(){t.curtime=t.$refs.audio.currentTime/t.$refs.audio.duration*100,t.$refs.audio.currentTime==t.$refs.audio.duration&&(t.curtime=0,t.changePlay(!1))}}}}),r=i,c=(n("042c"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"0d89745f",null);e["default"]=s.exports},"7a19":function(t,e,n){"use strict";n("2715")},"7a57":function(t,e,n){"use strict";n("ff40")},"7b05":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:!1,expression:"false"}],staticClass:"BookVideo component",style:{width:t.componentData.width+"px",height:t.componentData.width+"px",margin:t.componentData.margin},attrs:{title:"视频组件","element-loading-text":"加载中...","element-loading-spinner":"el-icon-loading"}},[a("div",{staticClass:"page_content",style:{backgroundSize:t.componentData.size,backgroundPosition:t.componentData.position,padding:t.componentData.padding}},[a("div",{staticClass:"play_box"},[a("div",{staticClass:"play_box",style:{width:t.componentData.width+"px",height:t.componentData.width+"px"}},[a("div",{staticClass:"play_status",style:{width:t.componentData.width+"px",height:t.componentData.width+"px"}},[t.isPlay?a("img",{staticClass:"el-icon-video-pause",attrs:{src:n("bf2e")},on:{click:function(e){return t.changePlay(!1)}}}):a("img",{staticClass:"el-icon-video-play",attrs:{src:n("ed6e")},on:{click:function(e){return t.changePlay(!0)}}})]),t.isPlay?a("el-progress",{attrs:{"stroke-width":3,type:"circle","show-text":!1,percentage:t.curtime,width:t.componentData.width-0,color:"#ff7214"}}):t._e()],1)]),t._t("default")],2),t._t("utils"),a("el-drawer",{attrs:{title:"组件数据",visible:t.drawer,direction:"btt","before-close":function(){t.$emit("handleClose")},"append-to-body":!0,size:"60%"},on:{"update:visible":function(e){t.drawer=e}}},[a("div",{staticStyle:{padding:"20px"},on:{click:function(t){t.stopPropagation()}}},[a("el-form",{ref:"form",attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"宽度"}},[a("el-input",{staticStyle:{width:"280px"},model:{value:t.componentData.width,callback:function(e){t.$set(t.componentData,"width",e)},expression:"componentData.width"}})],1),a("el-form-item",{attrs:{label:"外边距"}},[a("el-input",{staticStyle:{width:"280px"},model:{value:t.componentData.margin,callback:function(e){t.$set(t.componentData,"margin",e)},expression:"componentData.margin"}}),a("span",{staticStyle:{"font-size":"12px"}},[t._v(" %/px")])],1),a("el-form-item",{attrs:{label:"视频地址"}},[a("el-input",{model:{value:t.componentData.value,callback:function(e){t.$set(t.componentData,"value",e)},expression:"componentData.value"}})],1)],1)],1)]),a("el-dialog",{attrs:{title:"视频播放",visible:t.isPlay,width:"60%","before-close":function(){t.changePlay(!1)},"append-to-body":!0}},[a("video",{ref:"video",attrs:{width:"100%",height:"100%",src:t.componentData.value,controls:""}})])],2)},o=[],i=(n("a9e3"),{props:{componentData:{type:[Object,String,Array,Number],required:!0},item:{type:Object,default:""}},data:function(){return{drawer:!1,isPlay:!1,curtime:0}},created:function(){},methods:{changePlay:function(t){var e=this;this.isPlay=t,console.log(t),this.$nextTick((function(){e.isPlay?(e.$refs.video.play(),e.getCurTime()):e.$refs.video.pause()}))},getCurTime:function(){var t=this;this.$refs.video.ontimeupdate=function(){t.curtime=t.$refs.video.currentTime/t.$refs.video.duration*100,t.$refs.video.currentTime==t.$refs.video.duration&&(t.curtime=0,t.changePlay(!1))}}}}),r=i,c=(n("39b1"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"b58a06d2",null);e["default"]=s.exports},"7b58":function(t,e,n){"use strict";n("bc5b")},"8bee":function(t,e,n){},"94bb":function(t,e,n){var a={"./BookAudio.vue":"7343","./BookContent.vue":"e747","./BookImage.vue":"361d","./BookPosition.vue":"d17d","./BookVideo.vue":"7b05","./ComponentContainer.vue":"259b","./Page.vue":"3ab4"};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=i,t.exports=o,o.id="94bb"},a643:function(t,e,n){},bc5b:function(t,e,n){},bf2e:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAJB0lEQVR4Xu2aT6jUVRzF750HrmwpBK1cBeFKQqlAyMDAhbqPwIVEUOBqnDsoNIK83+83722EWoiUi2gbSrjJTUgtxIULCXInBJEroRBe8t7ceDktgvx331w48zuf4K3y3jn3fL7nO+eVMfAPDuDAUx2IeIMDOPB0BwgI04EDz3CAgDAeOEBAmAEcKHOAb5Ay3zhl4gABMQHNM8scICBlvnHKxAECYgKaZ5Y5QEDKfOOUiQMExAQ0zyxzgICU+cYpEwcIiAlonlnmAAEp841TJg4QEBPQPLPMAQJS5hunTBwgICageWaZAwSkzDdOmThAQExA88wyBwhImW+cMnGAgJiA5pllDhCQMt84ZeIAATEBzTPLHCAgZb5xysQBAmICmmeWObCUAVlbW9u3tbX1QQjhvRDCnvlPDiE82P6JMX4TY/z2zJkzv5fZwqmXcaDPPJYqIE3THB4MBqdzzsdeAOBfIYSvYowXR6PRvRf48/yRl3TAgcfSBKTruss551MvyXD7jz+ch+R8wVmOPMUBFx5LEZC2bT8PIXyyw2n9OKV0aYd3cDyE4MRDPiBd132Wc54saDJPpJSuLeguy2vceEgHZHV19eBgMLgZQti1oGm8tbGxcWgymTxe0H1W1zjykA5I27ZXQwjHFzmFMcbJaDTi95ECUx15yAZk/p8O7xZwfN6ROyml/c/7Q/z7/zrgykM2IE3TnI0xXqgxqDHGI6PR6EaNu/t6pysP2YC0bftTCOHtSgO3nlIaVrq7l9e68lAOyJ8hhN2Vpu37lNL7le7u5bVt21rykAzI+vr6G5ubmz9XnLQHKaVXK97fq6udeUgGZDqdHp3NZtdrTtnKysru4XD4qOZn9OVuZx6SAWma5mSM8UrNAcs57x2Px/drfkZf7nbmoRqQYYxxWnPAcs4HxuPx7Zqf0Ze7m6ax5SEZkAX/dYb/ndOc87vj8fiHvgxxzXc48yAgNSerJ3cTEDGQzkDEUPwjx5kH3yCKEymmiYAARMwBLTkERIuH9Ve6GAoqFkAUHdDSxDeIFg++QeAh4wC/pMug0BXCN4gYG2cgYij4HQQgig5oaXJeWFQsrVmUVENAxLA4AxFDQcUCiKIDWpqcFxYVS2sWJdUQEDEszkDEUFCxAKLogJYm54VFxdKaRUk1BEQMizMQMRRULIAoOqClyXlhUbG0ZlFSDQERw+IMRAwFFQsgig5oaXJeWFQsrVmUVENAxLA4AxFDQcUCiKIDWpqcFxYVS2sWJdUQEDEszkDEUFCxAKLogJYm54VFxdKaRUk1BEQMizMQMRRULIAoOqClyXlhUbG0ZlFSDQERw+IMRAwFFQsgig5oaXJeWFQsrVmUVENAxLA4AxFDQcUCiKIDWpqcFxYVS2sWJdUQEDEszkDEUFCxAKLogJYm54VFxdKaRUk1BEQMizMQMRRULIAoOqClyXlhUbG0ZlFSDQERw+IMRAwFFQsgig5oaXJeWFQsrVmUVENAxLA4AxFDQcUCiKIDWpqcFxYVS2sWJdUQEDEszkDEUFCxAKLogJYm54VFxdKaRUk1BEQMizMQMRRULIAoOqClyXlhUbG0ZlFSDQERw+IMRAwFFQsgig5oaXJeWFQsrVmUVENAxLA4AxFDQcUCiKIDWpqcFxYVS2sWJdUQEDEszkDEUFCxAKLogJYm54VFxdKaRUk1BEQMizMQMRRULIAoOqClyXlhUbG0ZlFSDQERw+IMRAwFFQsgig5oaXJeWFQsrVmUVENAxLA4AxFDQcUCiKIDWpqcFxYVS2sWJdUQEDEszkDEUFCxAKLogJYm54VFxdKaRUk1BEQMizMQMRRULIAoOqClyXlhUbG0ZlFSDQERw+IMRAwFFQsgig5oaXJeWFQsrVmUVENAxLA4AxFDQcUCiKIDWpqcFxYVS2sWJdUQEDEszkDEUFCxAKLogJYm54VFxdKaRUk1BEQMizMQMRRULIAoOqClyXlhUbG0ZlFSDQERw+IMRAwFFQsgig5oaXJeWFQsrVmUVENAxLA4AxFDQcUCiKIDWpqcFxYVS2sWJdUQEDEszkDEUFCxAKLogJYm54VFxdKaRUk1BEQMizMQMRRULIAoOqClyXlhUbG0ZlFSDQERw+IMRAwFFQsgig5oaXJeWFQsrVmUVENAxLA4AxFDQcUCiKIDWpqcFxYVS2sWJdUQEDEszkDEUFCxAKLogJYm54VFxdKaRUk1BEQMizMQMRRULIAoOqClyXlhUbG0ZlFSDQERw+IMRAwFFQsgig5oaXJeWFQsrVmUVENAxLA0TTOMMU5ryso5HxiPx7drfkZf7nbmIfkN0jTNyRjjlZoDlnPeOx6P79f8jL7c7cxDMiDT6fTobDa7XnPAVlZWdg+Hw0c1P6MvdzvzkAxI13Wv55x/qThgv6WUXqt4f6+uduYhGZDt6Wrb9o8QwiuVJu27lNKxSnf38lpXHrIB6brux5zzO5WmbZpSGlW6u5fXuvKQDUjTNGdjjBdqTFuM8choNLpR4+6+3unKQzYga2tr+7a2tu5WGLg7KaX9Fe7t9ZWuPGQDMv895GoI4fgiJy/GOBmNRucXeafLXW3b2vGQDsjq6urBwWBwM4Swa0FDeGtjY+PQZDJ5vKD7rK5x5CEdkO3pW/BfcziRUrpmNdULfqwbD/mAzENyKef80Q5Zf5pS+mKHd3D8ydKy4bEUAZmH5HLO+VTBhD6MMV7k944C555xpOs6Cx5LE5BtVk3THB4MBqdzzi/yP/m2f8/4ch6Oe4sdD25z4bFUAfl3LLuue3M2m30YY3wrhLBn/pNDCA/mP9c3Nze/Pnfu3K+Mcn0H+sxjKQNSHzmfgANPHCAgTAIOPMMBAsJ44AABYQZwoMwBvkHKfOOUiQMExAQ0zyxzgICU+cYpEwcIiAlonlnmAAEp841TJg4QEBPQPLPMAQJS5hunTBwgICageWaZAwSkzDdOmThAQExA88wyBwhImW+cMnGAgJiA5pllDhCQMt84ZeIAATEBzTPLHCAgZb5xysQBAmICmmeWOUBAynzjlIkDBMQENM8sc4CAlPnGKRMHCIgJaJ5Z5gABKfONUyYO/A0l+Cd9f29KTQAAAABJRU5ErkJggg=="},d172:function(t,e,n){},d17d:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"positionRef",staticClass:"BookPosition component",class:{redact:t.redact,isDrage:t.isDrage},style:{left:t.componentData.x+"px",top:t.componentData.y+"px"},attrs:{title:"定位组件"},on:{mousedown:function(e){return e.stopPropagation(),t.down(e)},mouseup:t.up}},[n("div",{staticClass:"page_content",style:{padding:t.componentData.padding}},[t._t("default")],2),t._t("utils"),n("el-drawer",{attrs:{title:"组件数据",visible:t.drawer,direction:"btt","before-close":function(){t.$emit("handleClose")},"append-to-body":!0,size:"60%"},on:{"update:visible":function(e){t.drawer=e}}},[n("div",{staticStyle:{padding:"20px"},on:{click:function(t){t.stopPropagation()}}},[n("el-form",{ref:"form",attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"内边距"}},[n("el-input",{staticStyle:{width:"280px"},model:{value:t.componentData.padding,callback:function(e){t.$set(t.componentData,"padding",e)},expression:"componentData.padding"}}),n("span",{staticStyle:{"font-size":"12px"}},[t._v(" %/px")])],1)],1)],1)])],2)},o=[],i=(n("a9e3"),{props:{componentData:{type:[Object,String,Array,Number],required:!0},item:{type:Object,default:""},redact:{type:Boolean,default:!1},isDrage:{type:Boolean,default:!1}},data:function(){return{drawer:!1,isMove:!1}},created:function(){},mounted:function(){var t=this;if(this.redact){window.addEventListener("mouseup",(function(){t.isMove=!1}));var e=this.$refs.positionRef.parentElement.parentElement;this.parentEle=e}},methods:{down:function(){this.redact&&(window.addEventListener("mousemove",this.move),this.isMove=!0)},up:function(){this.redact&&window.removeEventListener("mousemove",this.move)},move:function(t){if(this.isMove){this.componentData.x+=t.movementX,this.componentData.y+=t.movementY;var e=this.$refs.positionRef.offsetWidth,n=this.$refs.positionRef.offsetHeight,a=this.parentEle.offsetWidth,o=this.parentEle.offsetHeight;this.componentData.x<0?this.componentData.x=0:this.componentData.x>a-e&&(this.componentData.x=a-e),this.componentData.y<0?this.componentData.y=0:this.componentData.y>o-n&&(this.componentData.y=o-n)}}}}),r=i,c=(n("7b58"),n("2877")),s=Object(c["a"])(r,a,o,!1,null,"0ff05bbe",null);e["default"]=s.exports},d281:function(t,e,n){"use strict";n("50ba")},dde5:function(t,e,n){t.exports=n.p+"assets/img/audioplay.ef6037b9.png"},e747:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"BookContent component",style:{margin:t.componentData.margin},attrs:{title:"富文本组件"}},[n("div",{staticClass:"page_content",style:{padding:t.componentData.padding}},[n("div",{domProps:{innerHTML:t._s(t.componentData.value)}}),t._t("default")],2),t._t("utils"),n("el-drawer",{attrs:{title:"组件数据",visible:t.drawer,direction:"btt","before-close":function(){t.$emit("handleClose")},"append-to-body":!0,size:"60%"},on:{"update:visible":function(e){t.drawer=e}}},[n("el-form",{ref:"form",attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"外边距"}},[n("el-input",{staticStyle:{width:"280px"},model:{value:t.componentData.margin,callback:function(e){t.$set(t.componentData,"margin",e)},expression:"componentData.margin"}}),n("span",{staticStyle:{"font-size":"12px"}},[t._v(" %/px")])],1),n("el-form-item",{attrs:{label:"内边距"}},[n("el-input",{staticStyle:{width:"280px"},model:{value:t.componentData.padding,callback:function(e){t.$set(t.componentData,"padding",e)},expression:"componentData.padding"}}),n("span",{staticStyle:{"font-size":"12px"}},[t._v(" %/px")])],1),n("el-form-item",{attrs:{label:"内容"}},[n("div",{staticStyle:{"padding-right":"20px"}},[n("Editor",{ref:"editor",attrs:{value:t.componentData.value}}),n("div",{staticClass:"centerR",staticStyle:{"padding-top":"15px"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.setValue}},[t._v("保存")])],1)],1)])],1)],1)],2)},o=[],i=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"editor",staticStyle:{"text-align":"left"},attrs:{id:"editor"}})}),r=[],c=n("6fad"),s=n.n(c),l={props:{value:{type:[String,Number],required:!0}},data:function(){return{editor:null}},mounted:function(){this.editor=new s.a(this.$refs.editor),this.editor.config.menus=["head","bold","fontSize","fontName","italic","underline","strikeThrough","indent","lineHeight","foreColor","backColor","link","list","todo","justify","quote","emoticon","table","code","splitLine","undo","redo"],this.editor.config.zIndex=3,this.editor.create(),this.setVal(this.value)},methods:{setVal:function(t){console.log(1),this.editor&&this.editor.txt.html(t)},clearVal:function(){this.editor.txt.clear()},getVal:function(){return this.editor.txt.html()}},watch:{}},d=l,p=n("2877"),u=Object(p["a"])(d,i,r,!1,null,null,null),m=u.exports,f={components:{Editor:m},props:{componentData:{type:[Object,String,Array,Number],required:!0}},data:function(){return{drawer:!1}},created:function(){},methods:{setValue:function(){this.componentData.value=this.$refs.editor.getVal(),this.drawer=!1}}},g=f,h=(n("7a19"),Object(p["a"])(g,a,o,!1,null,"9de09920",null));e["default"]=h.exports},e9b9:function(t,e,n){},ed6e:function(t,e,n){t.exports=n.p+"assets/img/videoplay.a230414f.png"},ff40:function(t,e,n){}});