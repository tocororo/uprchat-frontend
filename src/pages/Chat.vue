<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref, watch } from "vue";

const mensaje: String = "Chat";
const disabledButton: Boolean = ref(true);
const prompt: String = ref("");

watch(prompt, (value, oldValue) => {
  if (value != "") {
    disabledButton.value = false;
  } else {
    disabledButton.value = true;
  }
});
</script>

<template>
  <Header :mensaje></Header>
  <div
    class="border-2 border-green-800 absolute left-2 top-24 h-4/5 w-52 flex items-center justify-center rounded-lg"
  >
    <button
      class="text-white bg-green-800 p-4 rounded-lg hover:bg-green-700 relative bottom-52"
    >
      Nuevo chat
    </button>
  </div>
  <div class="w-4/6 h-3/4 relative top-4"></div>
  <div
    class="border-2 border-green-800 absolute right-2 top-24 h-4/5 w-52 flex flex-col items-center justify-around rounded-lg"
  >
    <div class="w-full flex flex-col items-center">
      <p class="text-green-800 text-xl text-center m-2">Agente</p>
      <select
        class="w-3/4 text-center h-10 border-2 rounded-md bg-white border-green-800"
      >
        <option value="profesor">Profesor</option>
        <option value="bibliotecario">Bibliotecario</option>
        <option value="investigador">Investigador</option>
      </select>
    </div>
    <div class="w-full flex flex-col items-center">
      <p class="text-green-800 text-xl text-center m-2">Modelo</p>
      <select
        class="w-3/4 text-center h-10 border-2 rounded-md bg-white border-green-800"
      ></select>
    </div>
  </div>
  <div class="absolute bottom-2 flex items-center justify-center gap-2 w-full">
    <button
      class="rounded-full bg-green-800 hover:bg-green-700 h-11 p-2 flex items-center"
    >
      <img src="../assets/menu.png" alt="Menu" class="h-10 w-10" />
    </button>
    <input
      type="text"
      class="border-2 border-green-800 p-2 rounded-xl w-1/2"
      placeholder="Mensaje"
      v-model="prompt"
    />
    <button
      class="rounded-full bg-green-800 hover:bg-green-700 disabled:bg-opacity-60 h-11 p-2 flex items-center"
      v-bind:disabled="disabledButton"
    >
      <img src="../assets/send.png" class="h-10 w-10" alt="Enviar" />
    </button>
  </div>
</template>
