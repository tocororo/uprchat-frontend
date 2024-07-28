<script setup lang="ts">
const props = defineProps(["onClickAction", "text"]);
</script>

<template>
  <button
    @click="onClickAction"
    class="text-white text-l p-2 min-w-20 rounded-lg bg-blue-800 hover:bg-blue-700"
  >
    {{ text }}
  </button>
</template>
