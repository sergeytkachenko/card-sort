import * as types from '../mutation-types'
import Vue from 'vue'

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

const actions = {

	loadByVoting: function({ commit }, { votingId }) {
		Vue.http.get(`/voting/${votingId}/interview`).then(res => {
			const groupsData = {};
			const data = res.body;
			const groups = new Map(Object.values(data.groups));
			groups.forEach(group => {
				delete group.features;
				groupsData[group.id] = group;
			});
			commit(types.SET_GROUPS, { groups: groupsData });
		}).catch(res => {
			console.debug(res);
			commit(types.SET_GROUPS, { groups: {} });
		});
	}
}

const mutations = {

	[types.SET_GROUPS] (state, { groups }) {
		Vue.set(state, 'all', groups);
	}
}

export default {
	state,
	getters,
	actions,
	mutations,
	namespaced: true
}