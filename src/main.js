import Vue from 'vue'
import App from './App.vue';
import iview from 'iview';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import routes from './routes';
import storeconfig from './store';

Vue.use(Vuex);
Vue.use(iview);
Vue.use(VueRouter);

const store = new Vuex.Store(storeconfig);
const router = new VueRouter(routes);
 
Vue.config.productionTip = false

new Vue({
  el:"#app",
  render: h => h(App),
  store,
  router
})
