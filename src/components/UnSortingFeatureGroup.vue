<template>
	<draggable class="feature" v-model="sortingData" @start="drag=true" @end="drag=false" :options="{group: dropId}">
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
					return this.$store.getters['features/unSortingFeatures'];
				},

				set(features) {
					this.$store.commit(`features/${types.SET_FEATURES_FROM_ARRAY}`, { features, group: undefined });
				}
			}
		},

		components: {
			draggable,
			Feature
		},

		props: ['drop-id']
	}
</script>