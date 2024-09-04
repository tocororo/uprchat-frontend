<script setup lang="ts">
import { ref } from 'vue';

const model = ref<string>("");
const agent = ref<string>("1");

const emits = defineEmits(["changeLLM", "changeAgent"]);

const changeLLM = () => {
  emits("changeLLM", model.value);
};
const changeAgent = () => {
  emits("changeAgent", agent.value);
};

interface LLM {
  name: string;
  apikey: string;
  url: string;
}

const llmsList = ref<Array<LLM>>([]);
const isLoading = ref<boolean>(true);

const fetchLLMs = async () => {
  const response = await fetch("https://fake-backend-upr-chat.onrender.com/llms");
  llmsList.value = await response.json();
  model.value = llmsList.value[0].name;
  isLoading.value = false;
};

fetchLLMs()

</script>

<template>
  <div class="settings border-2 bg-green-700 rounded-l-lg p-2 text-white sm:flex sm:flex-col gap-2 hidden">
    <h3 class="text-center text-xl">Ajustes</h3>
    <div class="flex flex-col gap-1 grow border-2 rounded-lg p-2">
      <h4 class="text-center">Modelo</h4>
      <p v-show="isLoading" class="text-white">Cargando Modelos</p>
      <select v-show="!isLoading" class="text-green-800 rounded-lg p-1" name="model" v-model="model"
        @change="changeLLM">
        <option v-for="llm in llmsList" :key="llm.name" :value="llm.name">{{ llm.name }}</option>
      </select>
      <h4 class="text-center">Agente</h4>
      <select class="text-green-800 rounded-lg p-1" name="agent" v-model="agent" @change="changeAgent">
        <option value="1">Agente 1</option>
        <option value="2">Agente 2</option>
        <option value="2">Agente 3</option>
      </select>
    </div>
  </div>
</template>
