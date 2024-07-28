<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from '../components/Footer.vue';

</script>

<template>
  <Header headerTitle="Chat" />
  <main class="grid w-full gap-2">
    <div class="history border-2 bg-green-700 rounded-r-lg p-4 text-white flex flex-col gap-2">
      <button class="border-2 p-1 rounded-lg flex justify-center">
        <img src="/src/assets/add.svg" alt="">
        <span>Nuevo Chat</span>
      </button>
      <div class="border-2 p-1 rounded-lg grow flex flex-col" >
        <h3 class="text-center underline">Historial</h3>
        <ul class="flex flex-col gap-1 grow overflow-y-scroll">
          <li class="flex justify-between"><span>Chat 1</span><button><img src="/src/assets/delete.svg" alt=""></button></li>
        </ul>
      </div>
      <button class="border-2 p-1 rounded-lg flex justify-center">
        <img src="/src/assets/logout.svg" alt="">
        <span>Salir</span>
      </button>
    </div>
    <div class="chat flex flex-col p-2">
      <div class=" grow overflow-y-scroll" >
      </div>
      <div class="flex p-1 border rounded-lg border-green-600">
        <button>
          <img class="bg-green-600 rounded-lg" src="/src/assets/menu.svg" alt="">
        </button>
        <input class="grow outline-none px-1" placeholder="Escriba su consulta" type="text">
        <button>
          <img class="bg-green-600 rounded-lg" src="/src/assets/send.svg" alt="">
        </button>
      </div>
    </div>
    <div class="settings border-2 bg-green-700 rounded-l-lg p-2 text-white flex flex-col gap-2">
      <h3 class="text-center">Ajustes</h3>
      <div class="flex flex-col gap-1 grow border-2 rounded-lg p-2">
        <h4 class="text-center">Modelo</h4>
        <select class="text-green-600 rounded-lg p-1" name="model">
          <option value="1">Modelo 1</option>
          <option value="2">Modelo 2</option>
          <option value="3">Modelo 3</option>
        </select>
        <h4 class="text-center">Agente</h4>
        <select class="text-green-600 rounded-lg p-1" name="model">
          <option value="1">Agente 1</option>
          <option value="2">Agente 2</option>
          <option value="3">Agente 3</option>
        </select>
      </div>
    </div>
  </main>
</template>


<style scoped>

  main {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-template-areas: "history chat chat chat settings";
  }

  .history {
    grid-area: history;
  }

  .chat {
    grid-area: chat;
  }

  .settings {
    grid-area: settings;
  }

</style>
