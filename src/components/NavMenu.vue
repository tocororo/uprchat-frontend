<script setup lang="ts">
const props = defineProps(["show"]);
</script>

<template>
  <div
    class="w-1/5 h-full absolute top-0 left-0 bg-white flex items-center justify-center"
    v-show="show"
  >
    <nav>
      <ul class="text-xl flex flex-col gap-3 text-green-800">
        <li class="hover:text-green-700"><a href="">Chat</a></li>
        <li class="hover:text-green-700"><a href="">LLMs</a></li>
        <li class="hover:text-green-700"><a href="">Fuentes</a></li>
        <li class="hover:text-green-700"><a href="">Recolección</a></li>
      </ul>
    </nav>
  </div>
</template>
