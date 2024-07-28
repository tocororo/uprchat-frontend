<script setup lang="ts">
<<<<<<< HEAD

import { useRoute } from 'vue-router';

const props = defineProps([
  "headerTitle",
  "listLinks"
  ]);

const currentPath:String = useRoute().fullPath;

=======
const props = defineProps(["mensaje"]);
>>>>>>> 55f2ca3f881061df70d64015dc2c00bf3821d2c9
</script>

<template>
  <header
<<<<<<< HEAD
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
=======
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
>>>>>>> 55f2ca3f881061df70d64015dc2c00bf3821d2c9
