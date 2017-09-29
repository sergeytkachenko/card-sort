<template>
	<md-layout>
		<md-layout class="card-group" v-if="isShowUnSortingFeatures">
			<un-sorting-feature-group :drop-id="everywhere"></un-sorting-feature-group>
		</md-layout>
		<md-layout class="card-group" v-for="group in groups" :key="group.id" :item="group">
			<feature-group :group="group" :drop-id="getGroupDrop(group)"></feature-group>
		</md-layout>
	</md-layout>
</template>

<script>
	import { mapState, mapGetters } from 'vuex'
	import FeatureGroup from '../components/FeatureGroup.vue'
	import UnSortingFeatureGroup from '../components/UnSortingFeatureGroup.vue'

	import '../less/card-board.less';

	export default {

		data: () => ({
			everywhere: 'everywhere'
		}),

		computed: {
			...mapState({
				groups: state => state.groups.all,
				isMultipleGroupsSortingMode: state => state.voting.isMultipleGroupsSortingMode,
				isAllowDropEverywhere: state => state.voting.isAllowDropEverywhere
			}),

			...mapGetters('groups', [
				'groups'
			]),

			isShowUnSortingFeatures: state => state.isMultipleGroupsSortingMode && state.isAllowDropEverywhere
		},

		methods: {

			getGroupDrop: function(group) {
				return this.isAllowDropEverywhere ? this.everywhere : group.id;
			}
		},

		components: {
			FeatureGroup,
			UnSortingFeatureGroup
		}
	}
</script>