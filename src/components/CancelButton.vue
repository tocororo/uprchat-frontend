
<script setup lang="ts">
  const props = defineProps(['text','onClickAction'])
</script>

<template>
  <button @click="props.onClickAction"
    class="text-white text-l p-2 min-w-20 rounded-lg bg-red-800 hover:bg-red-700 flex justify-center"
  >
  <img src="/src/assets/cancel.svg" alt="">
    {{ props.text }}
  </button>
</template>
