<template>
	<md-card style="flex: 1">
		<md-card-header>
			<md-layout>
				<md-layout>
					<div class="md-title">{{ featureSelected.name }}</div>
				</md-layout>
				<md-layout md-align="end" md-vertical-align="start">
					<md-button md-theme="orange"
							   @click.native="close"
							   class="close-btn md-icon-button md-primary">
						<md-icon>close</md-icon>
					</md-button>
				</md-layout>
			</md-layout>
		</md-card-header>

		<md-card-content>
			{{ featureSelected.description }}
		</md-card-content>
	</md-card>
</template>

<script>
	import { mapGetters } from 'vuex'
	import * as types from '../store/mutation-types'

	export default {
		components: {},
		computed: {
			...mapGetters('features', {
				featureSelected: 'selected'
			})
		},

		methods: {
			close: function() {
				this.$store.commit(`features/${types.DESELECT_FEATURES}`);
			}
		}
	}
</script>
<style>
	.close-btn {
		position: relative;
		top: -5px;
	}
</style>