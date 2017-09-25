<template>
	<md-layout md-gutter>
		<md-layout :md-flex="featureSelected ? 80: 100">
			<card-board></card-board>
		</md-layout>
		<md-layout md-flex="20" v-if="featureSelected">
			<card-info></card-info>
		</md-layout>
	</md-layout>
</template>

<script>
	import CardBoard from '../components/CardBoard.vue'
	import CardInfo from '../components/CardInfo.vue'
	import { mapGetters } from 'vuex'

	export default {

		computed: {
			...mapGetters('features', {
				featureSelected: 'selected'
			})
		},

		components: {
		  CardBoard,
		  CardInfo
		}
	}
</script>