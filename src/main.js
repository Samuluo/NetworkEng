import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import jquery from 'jquery'

Vue.config.productionTip = false;
NProgress.configure({ showSpinner: false });
const s = document.createElement("script");
s.type = "text/javascript";
s.src = "https://blog-static.cnblogs.com/files/zouwangblog/main.js";
document.body.appendChild(s);
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
