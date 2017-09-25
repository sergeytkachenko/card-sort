<template>
	<md-card @click.native="click" :class="{ selected: featureSelected && featureSelected.id === feature.id }">
		<md-card-content>
			{{ feature.name }}
		</md-card-content>
	</md-card>
</template>

<script>
	import { mapGetters } from 'vuex'
	import * as types from '../store/mutation-types'
	import '../less/feature.less'

	export default {

		computed: {
			...mapGetters('features', {
				featureSelected: 'selected'
			})
		},

		methods: {
			click: function(event) {
				let feature = this.feature;
				this.$store.commit(`features/${types.DESELECT_FEATURES}`);
				this.$store.commit(`features/${types.SELECTED_FEATURE}`, { featureId: feature.id });
			}
		},

		props: ['feature']
	}
</script>