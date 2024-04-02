<script setup>
import { ref } from 'vue';
const count = ref(0);
const increment = () => {
	count.value += 1
}
</script>

<template>
<div>
	<button @click="increment()">count {{ count }}</button>
</div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>