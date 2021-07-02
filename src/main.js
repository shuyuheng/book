import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
// reset
import '@/assets/css/reset.css'
// Common style
import '@/assets/css/common.scss'
// font
import '@/assets/css/font.scss'
// Automatic import component
const Components = require.context('../src/components/comment', true, /\.vue/)
Components.keys().map(key => {
  let ComItem = Components(key).default
  let fileName = /\w+.vue$/.exec(key)[0].replace('.vue', '')
  let ComName = ComItem.name || fileName
  Vue.component(ComName, ComItem)
})
Vue.config.productionTip = false
Vue.use(ElementUI);
console.log(process.env, '环境变量')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
