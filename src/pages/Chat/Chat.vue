<script setup lang="ts">
import Header from "../../components/Header.vue";
import ChatHistory from "./components/ChatHistory.vue";
import ChatSettings from "./components/ChatSettings.vue";
import { ref } from "vue";
import MenuIcon from "../../assets/MenuIcon.vue";
import SendIcon from "../../assets/SendIcon.vue";
import ModalWindow from "../../components/ModalWindow.vue";
import BasicButton from "../../components/BasicButton.vue";

interface Conversation {
  question: string;
  answer: string;
}

const showHistory = ref<boolean>(false);
const showSettings = ref<boolean>(false);
const showModal = ref<boolean>(false);
const textMessage = ref<string>("");
const messages = ref<Array<Conversation>>([]);
const model = ref<string>("");
const agent = ref<string>("");

let modalMessage: string = "";


const changeLLM = (llm: string) => {
  model.value = llm;
}
const changeAgent = (newAgent: string) => {
  agent.value = newAgent;
}

const sendMessage = () => {
  if (textMessage.value === "" || model.value === "" || agent.value === "") {
    showModal.value = true;
    if (textMessage.value === "") {
      modalMessage = "Por favor escriba un mensaje";
      return;
    }
    if (model.value === "") {
      modalMessage = "Por favor escoja un modelo";
      return;
    }
    if (agent.value === "") {
      modalMessage = "Por favor escoja un agente";
      return;
    }
  }
  messages.value.push({
    question: textMessage.value,
    answer: "Funcionalidad en desarrollo",
  });
  textMessage.value = "";
};

const back = () => {
  window.history.back();
}

</script>

<template>
  <ModalWindow :open="showModal ? true: false" modal-title="Atención" :modal-content="modalMessage"  >
    <BasicButton text="OK" :on-click-action="()=> showModal = false" />
  </ModalWindow>
  <Header headerTitle="Chat" />
  <main class="grid w-full gap-2">
    <label for="history-toggle" class="absolute left-14 top-3 text-white rounded-full bg-green-600 z-50 ">
      <img class="w-10" src="/src/assets/history.svg" alt="">
      <input v-model="showHistory" type="checkbox" name="history-toggle" id="history-toggle" class="hidden">
    </label>
    <label for="settings-toggle" class="absolute right-2 top-3  text-white rounded-full bg-green-600 z-50 ">
      <img class="w-10" src="/src/assets/settings_w.svg" alt="">
      <input v-model="showSettings" type="checkbox" name="settings-toggle" id="settings-toggle" class="hidden">
    </label>
    <ChatHistory v-show="showHistory"
      class="hidden absolute left-0 top-16 z-50 sm:static history h-5/6 sm:h-full w-full" />
    <div class="chat flex flex-col p-2">
      <div class="grow m-0.5 border-2 border-green-800 p-1 rounded-lg flex flex-col">
        <div class="chat-conversation justify-self-start overflow-y-scroll flex flex-col">
          <div class="flex flex-col" v-for="(message, i) in messages" :key="i">
            <div class="w-4/5 self-end text-white bg-green-800 rounded-lg m-2 p-2">
              {{ message.question }}
            </div>
            <div class="w-4/5 self-start border-2 border-black rounded-lg m-2 p-2">
              {{ message.answer }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex p-1 border rounded-lg border-green-800">
        <button class="flex justify-center items-center bg-green-800 rounded-lg w-8 h-8 hover:bg-green-700">
          <MenuIcon />
        </button>
        <input class="grow outline-none px-1 w-full" placeholder="Escriba su consulta" type="text" v-model="textMessage"
          @keypress.enter="sendMessage" />
        <button @click="sendMessage"
          class="flex justify-center items-center bg-green-800 rounded-lg w-8 h-8 hover:bg-green-700">
          <SendIcon />
        </button>
      </div>
    </div>
    <ChatSettings v-show="showSettings" @changeAgent="changeAgent" @changeLLM="changeLLM"
      class="settings hidden absolute right-0 top-16  sm:static h-5/6 sm:h-full w-full" />
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-template-areas: "chat chat chat chat chat";
}

.chat {
  grid-area: chat;
}

label:has(input:checked) {
  background-color: #023d19;
}

label:has(#history-toggle:checked)~.history {
  display: flex;
  flex-direction: column;
}

label:has(#settings-toggle:checked)~.settings {
  display: flex;
  flex-direction: column;
}

@media (min-width: 640px) {

  main {
    grid-template-areas: "history chat chat chat settings";
    grid-auto-flow: dense;
    grid-auto-columns: auto;
    grid-auto-rows: auto;
  }

  main:has(#history-toggle:not(:checked)) {
    grid-template-areas: "chat chat chat chat settings";
  }

  main:has(#settings-toggle:not(:checked)) {
    grid-template-areas: "history chat chat chat chat";
  }

  main:has(#settings-toggle:not(:checked)):has(#history-toggle:not(:checked)) {
    grid-template-areas: "chat chat chat chat chat";
  }

  .history {
    grid-area: 'history';
  }

  .settings {
    grid-area: settings;
  }

  .chat-conversation {
    max-height: 75dvh;
  }

}
</style>
