<script setup lang="ts">
import EditIcon from '../assets/EditIcon.vue';

const props = defineProps([
  "onClickAction",
  "text"
])
</script>

<template>
  <button @click="props.onClickAction"
    class="text-white text-l p-2 min-w-20 rounded-lg bg-blue-800 hover:bg-blue-700 flex justify-center">
    <EditIcon />
    {{ props.text }}
  </button>
</template>
