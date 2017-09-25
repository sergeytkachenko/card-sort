const state = {
	all: {
		'id1': {
			id: 'group1',
			name: 'group 1'
		},
		'id2': {
			id: 'group2',
			name: 'group 2'
		},
		'id3': {
			id: 'group3',
			name: 'group 3'
		}
	}
}

const getters = {
	groups: state => {
		return Object.values(state.all);
	}
}

const actions = {}

const mutations = {

}

export default {
	state,
	getters,
	actions,
	mutations,
	namespaced: true
}