<script setup lang="ts">
import Header from "../../components/Header.vue";
import BasicButton from "../../components/BasicButton.vue";

const headerTitle = "Adicionar LLM";
const backText = "Atrás";
const addText = "Adicionar";
</script>

<template>
  <Header :header-title="headerTitle" />
  <div class="w-1/2 flex flex-col items-center gap-4 mt-40">
    <div class="w-full flex items-center justify-between">
      <label class="text-green-800 text-xl">Nombre LLM*:</label>
      <input type="text" placeholder="Escriba el nombre de su LLM" class="border-2 border-green-800 p-1 rounded-lg w-2/3 ml-5" />
    </div>
    <div  class="w-full flex items-center justify-between">
      <label class="text-green-800 text-xl">URL del LLM*:</label>
      <input type="text" placeholder="Escriba la URL de la API de su LLM" class="border-2 border-green-800 p-1 rounded-lg w-2/3 ml-5" />
    </div>
    <div  class="w-full flex items-center justify-between">
      <label class="text-green-800 text-xl">API KEY:</label>
      <input type="text" placeholder="Escriba la API KEY de su LLM" class="border-2 border-green-800 p-1 rounded-lg w-2/3 ml-5" />
    </div>
  </div>

  <BasicButton :text="backText" class="fixed left-8 bottom-8" />
  <BasicButton :text="addText" class="fixed right-8 bottom-8" />
</template>
