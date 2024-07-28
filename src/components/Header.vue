<script setup lang="ts">

import { useRoute } from 'vue-router';

const props = defineProps([
  "headerTitle",
  "listLinks"
  ]);

const currentPath:String = useRoute().fullPath;

</script>

<template>
  <header
    class="bg-green-800 w-full sticky top-0 min-h-200 text-white shadow-lg px-2"
  >
    <h1 class="text-center text-2xl p-1">{{ headerTitle }}</h1>
    <ul v-if="listLinks" class="flex justify-between py-1 border-t-2" >
      <li class="flex-1 text-center" v-for="link in listLinks" :key="link.text" >
        <a v-if="currentPath !== link.url" class="text-shadow-white" :href="link.url">{{ link.text }}</a>
        <a v-else class="current-page" href="#"  >{{ link.text }}</a>
      </li>
    </ul>
  </header>
</template>

<style scoped>

.text-shadow-white:hover {
  background: radial-gradient(ellipse, #ffffff88 0%, #ffffff00 75% );
  text-decoration: underline;
}

.current-page {
  text-decoration: underline;
  cursor: default;
}

</style>
