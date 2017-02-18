import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'

// import 'element-ui/lib/theme-default/index.css'


import App from './App.vue'
import VueConfig from './routerConfig.js'


Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter(VueConfig)




new Vue({
	router,
  	el: '#app',
  	render: h => h(App)
})
