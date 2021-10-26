import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import jquery from 'jquery'

Vue.config.productionTip = false;
NProgress.configure({ showSpinner: false });

new Vue({
  router,
  jquery,
  render: h => h(App)
}).$mount('#app');

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
