<template>
	<md-toolbar>
		<md-button class="md-icon-button">
			<md-icon>menu</md-icon>
		</md-button>

		<h2 class="md-title" style="flex: 1">{{ title }}</h2>

		<!--<md-button class="md-icon-button">-->
			<!--<md-icon>favorite</md-icon>-->
		<!--</md-button>-->
	</md-toolbar>
</template>

<script>
	import '../less/main.less'

	export default {
		props: [
			'title'
		]
	}
</script>
