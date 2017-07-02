<template>
	<div id="app">
		<!--<transition name="bounce">-->
		<router-view></router-view>
		<!--</transition>-->
	</div>
</template>

<script>

	export default {
		name: 'app',
		components: {
		}
	}
</script>

<style>
body {
		/*background-color: #324057;*/
		margin: 0px;
		padding: 0px;
    background: url(../static/background.jpg);
		font-size:14px;
	}
	
	#app {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}
</style>