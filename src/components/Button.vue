<script setup>
defineProps({
	type: {
		type: String,
		default: 'button'
	}
})
</script>

<template>
	<button class="wl-button">
		<slot/>
	</button>
</template>

<style scoped>
.wl-button {
	width: 8vw;
	height: 3vh;
}

/* .wl-button:hover {
	outline: none;
	background-color: #5850ec;
	color: #ffffff;
	border: 2px solid #5850ec;
	border-radius: 6px;
} */
</style>