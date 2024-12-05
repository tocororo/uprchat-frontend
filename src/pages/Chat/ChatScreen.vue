<script setup lang="ts">
  import { ref } from 'vue';

  import HeaderComponent from '../../components/HeaderComponent.vue';
  import ChatHistory from './components/ChatHistory.vue';
  import ChatSettings from './components/ChatSettings.vue';
  import MenuIcon from '../../assets/MenuIcon.vue';
  import SendIcon from '../../assets/SendIcon.vue';
  import ModalWindow from '../../components/ModalWindow.vue';
  import BasicButton from '../../components/BasicButton.vue';
  import LoadingAnimation from '../../components/LoadingAnimation.vue';

  interface Conversation {
    question: string;
    answer: string;
  }

  const showHistory = ref<boolean>(false);
  const showSettings = ref<boolean>(false);
  const isLoading = ref<boolean>(false);
  const textMessage = ref<string>('');
  const messages = ref<Array<Conversation>>([]);
  const model = ref<string>('');
  const agent = ref<string>('');

  const showModal = ref<boolean>(false);
  let modalMessage: string = '';

  const changeLLM = (llm: string) => {
    model.value = llm;
  };
  const changeAgent = (newAgent: string) => {
    agent.value = newAgent;
  };

  const sendMessage = async() => {
    // if (textMessage.value === "" || model.value === "" || agent.value === "") {
    //   showModal.value = true;
    //   if (textMessage.value === "") {
    //     modalMessage = "Por favor escriba un mensaje";
    //     return;
    //   }
    //   if (model.value === "") {
    //     modalMessage = "Por favor escoja un modelo";
    //     return;
    //   }
    //   if (agent.value === "") {
    //     modalMessage = "Por favor escoja un agente";
    //     return;
    //   }
    // }
    const formdata = new FormData();
    formdata.append('input', 'actors in Jumanji?');

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    messages.value.push({
      question: textMessage.value,
      answer: ""
    });
    textMessage.value = '';
    isLoading.value = true;
    
    const response = await fetch('http://localhost:8000/chats/prompt', requestOptions)
    const result = await response.text();
    messages.value[messages.value.length - 1].answer = result.replace("\n", "");
    isLoading.value = false;
  };
</script>

<template>
  <ModalWindow
    :open="showModal ? true : false"
    modal-title="Atención"
    :modal-content="modalMessage"
  >
    <BasicButton text="OK" :on-click-action="() => (showModal = false)" />
  </ModalWindow>
  <HeaderComponent />
  <main class="grid w-full gap-2">
    <label
      for="history-toggle"
      class="absolute left-14 top-3 z-50 rounded-full bg-green-600 text-white"
    >
      <img class="w-10" src="/src/assets/history.svg" alt="" />
      <input
        v-model="showHistory"
        type="checkbox"
        name="history-toggle"
        id="history-toggle"
        class="hidden"
      />
    </label>
    <label
      for="settings-toggle"
      class="absolute right-2 top-3 z-50 rounded-full bg-green-600 text-white"
    >
      <img class="w-10" src="/src/assets/settings_w.svg" alt="" />
      <input
        v-model="showSettings"
        type="checkbox"
        name="settings-toggle"
        id="settings-toggle"
        class="hidden"
      />
    </label>
    <ChatHistory
      v-show="showHistory"
      class="history absolute left-0 top-16 z-50 hidden h-5/6 w-full sm:static sm:h-full"
    />
    <div class="chat flex flex-col p-2">
      <div
        class="m-0.5 flex grow flex-col rounded-lg border-2 border-green-800 p-1"
      >
        <div
          class="chat-conversation flex flex-col justify-self-start overflow-y-scroll"
        >
          <div class="flex flex-col" v-for="(message, i) in messages" :key="i">
            <div
              class="m-2 w-4/5 self-end rounded-lg bg-green-800 p-2 text-white"
            >
              {{ message.question }}
            </div>
            <div
              class="m-2 w-4/5 self-start rounded-lg border-2 border-black p-2"
            >
              {{ message.answer }}
              <LoadingAnimation v-if="isLoading && message.answer===''" />
            </div>
          </div>
            
        </div>
      </div>
      <div class="flex rounded-lg border border-green-800 p-1">
        <button
          class="flex h-8 w-8 items-center justify-center rounded-lg bg-green-800 hover:bg-green-700"
        >
          <MenuIcon />
        </button>
        <input
          class="w-full grow px-1 outline-none"
          placeholder="Escriba su consulta"
          type="text"
          v-model="textMessage"
          @keypress.enter="sendMessage"
        />
        <button
          @click="sendMessage"
          class="flex h-8 w-8 items-center justify-center rounded-lg bg-green-800 hover:bg-green-700"
        >
          <SendIcon />
        </button>
      </div>
    </div>
    <ChatSettings
      v-show="showSettings"
      @changeAgent="changeAgent"
      @changeLLM="changeLLM"
      class="settings absolute right-0 top-16 hidden h-5/6 w-full sm:static sm:h-full"
    />
  </main>
</template>

<style scoped>
  main {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-template-areas: 'chat chat chat chat chat';
  }

  .chat {
    grid-area: chat;
  }

  label:has(input:checked) {
    background-color: #023d19;
  }

  label:has(#history-toggle:checked) ~ .history {
    display: flex;
    flex-direction: column;
  }

  label:has(#settings-toggle:checked) ~ .settings {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 640px) {
    main {
      grid-template-areas: 'history chat chat chat settings';
      grid-auto-flow: dense;
      grid-auto-columns: auto;
      grid-auto-rows: auto;
    }

    main:has(#history-toggle:not(:checked)) {
      grid-template-areas: 'chat chat chat chat settings';
    }

    main:has(#settings-toggle:not(:checked)) {
      grid-template-areas: 'history chat chat chat chat';
    }

    main:has(#settings-toggle:not(:checked)):has(
        #history-toggle:not(:checked)
      ) {
      grid-template-areas: 'chat chat chat chat chat';
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
