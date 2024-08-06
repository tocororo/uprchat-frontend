<script setup lang="ts">
import { useRoute } from 'vue-router';

import MenuIcon from "./MenuIcon.vue";

const props = defineProps({
  headerTitle: String,
});


interface Link {
  url: string,
  text: string
};

const listLinks: Array<Link> = [
  {
    url: "/chat",
    text: "Chat",
  },
  {
    url: "/sources",
    text: "Fuentes",
  },
  {
    url: "/llms",
    text: "LLMs",
  },
  {
    url: "/jobs",
    text: "Recolecciones",
  },
];

const currentPath: String = useRoute().fullPath;


const emits = defineEmits(["showMenu"]);

const menuButtonAction = () => {
  emits("showMenu");
};

</script>

<template>
  <header class="bg-green-800 w-full sticky top-0 text-white shadow-lg px-2 h-16 flex flex-col justify-center items-center z-40">
    <MenuIcon class="md:hidden" @click="menuButtonAction" />
    <h1 class="text-center text-2xl p-1">{{ props.headerTitle }}</h1>
    <ul v-if="listLinks" class="flex w-full justify-between py-1 border-t-2 nav-resposive">
      <li class="flex-1 text-center" v-for="link in listLinks" :key="link.text">
        <a v-if="currentPath !== link.url" class="text-shadow-white" :href="link.url">{{ link.text }}</a>
        <a v-else class="current-page" href="#">{{ link.text }}</a>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.text-shadow-white:hover {
  background: radial-gradient(ellipse, #ffffff88 0%, #ffffff00 75%);
  text-decoration: underline;
}

.current-page {
  text-decoration: underline;
  cursor: default;
}


@media screen and (max-width: 768px) {
  .nav-resposive {
    display: none;
  }
}
</style>
