import Vue from 'vue'
import UUID from 'vue-uuid';
import App from './App.vue'
export const EventBus = new Vue();

Vue.config.productionTip = false
Vue.use(UUID)
new Vue({
  render: h => h(App),
}).$mount('#app')
