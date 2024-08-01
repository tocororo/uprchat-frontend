<script setup lang="ts">
import Header from "../components/Header.vue";
import NavMenu from "../components/NavMenu.vue";
import MenuIcon from "../components/MenuIcon.vue";
import MenuIconGreen from "../components/MenuIconGreen.vue";
import ChatHistory from "./sources/components/ChatHistory.vue";
import ChatSettings from "./sources/components/ChatSettings.vue";
import { ref } from "vue";

const showNav = ref<boolean>(false);
const showHistory = ref<boolean>(false)
const showButtonHideHistory = ref<boolean>(false)
const showSettings = ref<boolean>(false)
const showButtonHideSettings = ref<boolean>(false)

const showMenu = () => {
  if (showNav.value == false) {
    showNav.value = true;
  } else{
    showNav.value = false
  }
};

const showChatHistory = () =>{
  showHistory.value = true
  showButtonHideHistory.value = true
}

const showChatSettings = () =>{
  showSettings.value = true
  showButtonHideSettings.value = true
}

const hideChatHistory = () =>{
  showHistory.value = false
  showButtonHideHistory.value = false
}

const hideChatSettings = () =>{
  showSettings.value = false
  showButtonHideSettings.value = false
}

</script>

<template>
  <Header headerTitle="Chat" />
  <MenuIcon @click="showMenu" />
  <MenuIconGreen v-show="showNav" @click="showMenu" />
  <NavMenu v-show="showNav"/>
  <main class="grid w-full gap-2">
    <div>
      <button @click="showChatHistory" class="bg-green-800 text-white mt-4 ml-2 rounded-xl visible sm:hidden">Historial de Chats</button>
    </div>
    <div>
      <button @click="showChatSettings" class="bg-green-800 text-white mt-4 ml-2 p-3 rounded-xl visible sm:hidden absolute right-2">Ajustes</button>
    </div>
    <ChatHistory v-show="showHistory" />
    <ChatSettings v-show="showSettings"/>
    <button @click="hideChatHistory" v-show="showButtonHideHistory" class="bg-green-800 text-white mt-4 ml-2 rounded-xl visible sm:hidden absolute bottom-4 left-3 p-2">Ocultar</button>
    <button @click="hideChatSettings" v-show="showButtonHideSettings" class="bg-green-800 text-white mt-4 ml-2 rounded-xl visible sm:hidden absolute bottom-4 right-3 p-2">Ocultar</button>
    <div
      class="history border-2 bg-green-700 rounded-r-lg p-4 text-white sm:flex sm:flex-col gap-2 hidden"
    >
      <button
        class="border-2 p-1 rounded-lg flex justify-center bg-green-800 hover:bg-green-700"
      >
        <img src="/src/assets/add.svg" alt="" />
        <span>Nuevo Chat</span>
      </button>
      <div class="border-2 p-1 rounded-lg grow flex flex-col">
        <h3 class="text-center underline">Historial</h3>
        <ul class="flex flex-col gap-1 grow overflow-y-scroll">
          <li class="flex justify-between">
            <span>Chat 1</span
            ><button><img src="/src/assets/delete.svg" alt="" /></button>
          </li>
        </ul>
      </div>
      <button
        class="border-2 p-1 rounded-lg flex justify-center bg-green-800 hover:bg-green-700"
      >
        <img src="/src/assets/logout.svg" alt="" />
        <span>Salir</span>
      </button>
    </div>
    <div class="chat flex flex-col p-2">
      <div class="grow overflow-y-scroll"></div>
      <div class="flex p-1 border rounded-lg border-green-800">
        <button>
          <img
            class="bg-green-800 rounded-lg w-8 h-8 hover:bg-green-700"
            src="/src/assets/menu.svg"
            alt=""
          />
        </button>
        <input
          class="grow outline-none px-1 w-full"
          placeholder="Escriba su consulta"
          type="text"
        />
        <button>
          <img
            class="bg-green-800 rounded-lg w-8 h-8 hover:bg-green-700"
            src="/src/assets/send.svg"
            alt=""
          />
        </button>
      </div>
    </div>
    <div
      class="settings border-2 bg-green-700 rounded-l-lg p-2 text-white sm:flex sm:flex-col gap-2 hidden"
    >
      <h3 class="text-center text-xl">Ajustes</h3>
      <div class="flex flex-col gap-1 grow border-2 rounded-lg p-2">
        <h4 class="text-center">Modelo</h4>
        <select class="text-green-800 rounded-lg p-1" name="model">
          <option value="1">Modelo 1</option>
          <option value="2">Modelo 2</option>
          <option value="3">Modelo 3</option>
        </select>
        <h4 class="text-center">Agente</h4>
        <select class="text-green-800 rounded-lg p-1" name="model">
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
