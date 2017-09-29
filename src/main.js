import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueLocalStorage from 'vue-localstorage'
import {sync} from 'vuex-router-sync'

import store from './store'

Vue.use(VueMaterial)
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueLocalStorage)

Vue.config.productionTip = false

Vue.http.options.emulateJSON = true;
Vue.http.interceptors.push(function(request, next) {
	request.headers.set('token', Vue.localStorage.get('token'));
	next(function(response) {
		if(response.status === 401) {
			location.href = '/#/auth-error'
		}
	});
});

sync(store, router)

new Vue({
	el: '#app',
	router,
	store: store,
	template: '<App />',
	components: { App }
})
