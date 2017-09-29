<template>
	<md-toolbar>
		<md-button class="md-icon-button">
			<md-icon>menu</md-icon>
		</md-button>

		<h2 class="md-title" style="flex: 1">{{ title }}</h2>

		<md-button class="md-raised md-accent" @click.native="save" v-if="user">Save</md-button>
	</md-toolbar>
</template>

<script>
	import '../less/main.less'
	import { mapGetters, mapState } from 'vuex'

	export default {

		methods: {
			save: function() {
				// TODO send to real path url
				this.$http.post('/save', { features: this.features });
			}
		},

		computed: {

			...mapState({
				user: state => state.user.current
			}),

			...mapGetters('features', {
				features: 'toArray'
			})
		},

		props: [
			'title'
		]
	}
</script>
