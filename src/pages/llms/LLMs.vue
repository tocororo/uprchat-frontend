<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from "vue-router";

import AddButton from "../../components/AddButton.vue";
import LLMTarget from "./components/LLMTarget.vue";
import LoadingAnimation from "../../components/LoadingAnimation.vue";

interface LLM {
  name: string;
  apikey: string;
  url: string;
}

const router = useRouter();

const llmsList = ref<Array<LLM>>([])
const isLoading = ref<boolean>(true);

const fetchLLMs = async () => {
  const response = await fetch("https://fake-backend-upr-chat.onrender.com/llms");
  llmsList.value = await response.json();
  isLoading.value = false;
};

fetchLLMs()

const addButton = "Adicionar";

const AddLLM = (): void => {
  router.push({ name: "addllm" })
}

</script>

<template>
  <main class="sm:w-3/4 w-4/5 p-2">
    <LoadingAnimation v-show="isLoading" />
    <ul v-show="!isLoading" class="flex flex-col w-full gap-2">
      <LLMTarget v-for="llm in llmsList" :key="llm.name" :name="llm.name" :api-key="llm.apikey" :url="llm.url" />
    </ul>
    <AddButton :text="addButton" class="fixed bottom-20 right-4" :onClickAction="AddLLM" />
  </main>
</template>
