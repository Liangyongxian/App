import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
/* eslint-disable*/
/*可以写绝对路径是因为在webpack.base中进行了设置 */
import 'common/stylus/index.styl'


fastclick.attach(document.body); //点击没有300ms的延时
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
