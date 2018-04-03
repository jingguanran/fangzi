import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuer from 'vue-resource'

Vue.config.productionTip = false
Vue.use(vuer)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
