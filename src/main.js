import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueHtml2Canvas from 'vue-html2canvas';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vuetify from './plugins/vuetify';

const images = require.context(
  '@/assets/images',
  true,
  /^.*\.jpg$/,
);

Vue.use(BootstrapVue);
Vue.use(VueHtml2Canvas);
Vue.config.productionTip = false;

new Vue({
  router,
  store,

  created() {
    this.$store.dispatch('init', images.keys());
  },

  vuetify,
  render: (h) => h(App),
}).$mount('#app');
