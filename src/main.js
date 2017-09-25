import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import Vuex from 'vuex'

import store from './store'

Vue.use(VueMaterial)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
	el: '#app',
	router,
	store: store,
	template: '<App/>',
	components: {App}
})
