<script setup lang="ts">
  const props = defineProps([
    "onClickAction",
    "text"
  ])
</script>

<template>
<<<<<<< HEAD
  <button @click="onClickAction"
    class="text-white text-l p-2 min-w-20 rounded-lg bg-blue-800 hover:bg-blue-700"
  >
    {{ text }}
=======
  <button
    class="text-white text-xl p-4 rounded-lg bg-blue-800 hover:bg-blue-700"
  >
    Modificar
>>>>>>> 55f2ca3f881061df70d64015dc2c00bf3821d2c9
  </button>
</template>
