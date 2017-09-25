<template>
	<draggable class="feature" v-model="sortingData" @start="drag=true" @end="drag=false" :options="{group: group.id}">
		<feature v-for="feature in sortingData" :feature="feature"></feature>
	</draggable>
</template>

<script>
	import { mapState, mapGetters } from 'vuex'
	import Feature from '../components/Feature.vue'
	import draggable from 'vuedraggable'
	import * as types from '../store/mutation-types'

	export default {

		computed: {
			sortingData: {

				get() {
					let features = this.$store.getters['features/features'];
					return features(this.group);
				},

				set(features) {
					this.$store.commit(`features/${types.SET_FEATURES_FROM_ARRAY}`, { features, group: this.group });
				}
			}
		},

		components: {
			draggable,
			Feature
		},

		props: ['group']
	}
</script>