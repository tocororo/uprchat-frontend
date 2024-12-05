<script setup lang="ts">
import DeleteIcon from '../assets/DeleteIcon.vue';
const props = defineProps([
  "onClickAction",
  "text"
])
</script>

<template>
  <button @click="props.onClickAction"
    class="text-white text-l p-2 min-w-20 rounded-lg bg-red-800 hover:bg-red-700 flex justify-center">
    <DeleteIcon />
    {{ props.text }}
  </button>
</template>
