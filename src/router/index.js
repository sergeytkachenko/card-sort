import Vue from 'vue'
import Router from 'vue-router'
import Voting from '@/components/Voting'
import AuthError from '@/components/AuthError'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '',
			redirect: '/voting/8db272e0-526d-42f0-8f17-6a02241e88a5'
		},
		{
			path: '/voting/:votingId',
			name: 'index',
			component: Voting,
			props: true
		},
		{
			path: '/auth-error',
			name: 'auth-error',
			component: AuthError
		}
	]
})
