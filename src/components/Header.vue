<script setup lang="ts">
const props = defineProps(["mensaje"]);
</script>

<template>
  <header
    class="bg-green-800 w-full flex items-center justify-center sticky top-0 p-2"
  >
    <img
      src="../assets/menu.png"
      alt="Menu"
      class="h-14 w-14 absolute left-4 hover:h-16 hover:w-16 hover:cursor-pointer"
    />
    <p class="text-white text-4xl">{{ mensaje }}</p>
  </header>
</template>
