<template>
	<md-layout>
		<md-layout class="card-group" v-for="group in groups" :key="group.id" :item="group">
			<feature-group :group="group"></feature-group>
		</md-layout>
	</md-layout>
</template>

<script>
	import { mapState, mapGetters } from 'vuex'
	import FeatureGroup from '../components/FeatureGroup.vue'

	import '../less/card-board.less';

	export default {

		computed: {
			...mapState({
				groups: state => state.groups.all
			}),

			...mapGetters('groups', [
				'groups'
			])
		},

		components: {
			FeatureGroup
		}
	}
</script>