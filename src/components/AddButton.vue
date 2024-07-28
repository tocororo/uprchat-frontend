
<script setup lang="ts">
  const props = defineProps([
    "onClickAction",
    "text"
  ])
</script>

<template>
  <button @click="onClickAction"
    class="text-white text-l p-2 min-w-20 rounded-lg bg-green-800 hover:bg-green-700 flex justify-center"
  >
  <img src="/src/assets/add.svg" alt="">
    {{ text }}
  </button>
</template>
