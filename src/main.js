import Vue from 'vue'
import App from './App.vue'
import Navbar from './components/UI/Navbar.vue'
import Placeholder from './components/layouts/Placeholder.vue'
import Spinner from './components/layouts/Spinner.vue'
import VueCarousel from 'vue-carousel'
import MyCarousel from './components/layouts/MyCarousel.vue'
Vue.config.productionTip = false
import router from './route/index'
import store from './store/index'

Vue.component('navbar', Navbar)
Vue.component('placeholder', Placeholder)
Vue.component('spinner', Spinner)
Vue.component('my-carousel', MyCarousel)

Vue.use(VueCarousel)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')