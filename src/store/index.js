import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import groups from './modules/groups'
import features from './modules/features'

Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	getters,
	modules: {
		groups,
		features
	}
})