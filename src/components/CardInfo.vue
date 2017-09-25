<template>
	<md-card style="flex: 1">
		<md-card-header>
			<div class="md-title">{{ featureSelected.name }}</div>
		</md-card-header>

		<md-card-content>
			{{ featureSelected.description }}
		</md-card-content>
	</md-card>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters('features', {
				featureSelected: 'selected'
			})
		}
	}
</script>