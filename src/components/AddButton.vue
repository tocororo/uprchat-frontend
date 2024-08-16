
<script setup lang="ts">
  import AddIcon from '../assets/AddIcon.vue';
  const props = defineProps(['text','onClickAction'])
</script>

<template>
  <button @click="props.onClickAction"
    class="text-white text-l p-2 min-w-20 rounded-lg bg-green-800 hover:bg-green-700 flex justify-center"
  >
  <AddIcon />
    {{ props.text }}
  </button>
</template>
