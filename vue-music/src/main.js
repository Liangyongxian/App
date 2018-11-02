import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable*/
/*可以写绝对路径是因为在webpack.base中进行了设置 */
import 'common/stylus/index.styl'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
