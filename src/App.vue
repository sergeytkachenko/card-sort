<template>
	<div id="app">
		<app-header title="Card sort application"></app-header>
		<router-view></router-view>
	</div>
</template>

<script>
	import AppHeader from './components/AppHeader.vue'
	import 'vue-material/dist/vue-material.css'

	export default {
		name: 'app',
		components: { AppHeader }
	}
</script>
