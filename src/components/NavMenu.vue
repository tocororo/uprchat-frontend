<script setup lang="ts">
import { useRoute } from "vue-router";

interface Link {
  url: string;
  text: string;
}

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


</script>

<template>
  <div
    class="sm:w-1/5 w-2/5 h-full absolute top-0 left-0 bg-white flex items-center justify-center border-2 border-green-800 z-30"
  >
    <nav>
      <ul class="sm:text-xl flex flex-col gap-10 text-green-800">
        <li
          class="hover:text-green-700 border-2 hover:border-green-700 rounded-2xl hover:cursor-pointer p-2 flex"
        >
          <img src="../assets/chat.svg" alt="Chat" /><a :href="listLinks[0].url">Chat</a>
        </li>
        <li
          class="hover:text-green-700 border-2 hover:border-green-700 rounded-2xl hover:cursor-pointer p-2 flex"
        >
          <img src="../assets/llms.svg" alt="LLMs" /><a :href="listLinks[2].url" >LLMs</a>
        </li>
        <li
          class="hover:text-green-700 border-2 hover:border-green-700 rounded-2xl hover:cursor-pointer p-2 flex"
        >
          <img src="../assets/sources.svg" alt="Fuentes" /><a :href="listLinks[1].url"
            >Fuentes</a
          >
        </li>
        <li
          class="hover:text-green-700 border-2 hover:border-green-700 rounded-2xl hover:cursor-pointer p-2 flex"
        >
          <img src="../assets/crawler.svg" alt="Recoleccion" /><a :href="listLinks[3].url"
            >Recolección</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
