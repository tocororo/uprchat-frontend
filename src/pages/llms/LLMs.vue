<script setup lang="ts">
import Header from "../../components/Header.vue";
import AddButton from "../../components/AddButton.vue";
import LLMTarget from "./components/LLMTarget.vue";
import Footer from "../../components/Footer.vue";

const nameExample = "Ejemplo 1";
const apiKeyExample = "http://ejemplo1.com";
const LLMs = "LLMs";
const addButton = "Adicionar";

const AddLLM: Function = ():void=> {
    window.location.pathname = "llms/add"
}

</script>

<template>
  <Header :header-title="LLMs"  />
  <main class="w-3/4 p-2">
    <ul class="flex flex-col w-full">
      <LLMTarget :name="nameExample" :api-key="apiKeyExample" />
    </ul>
    <AddButton :text="addButton" class="fixed bottom-20 right-4" :onClickAction="AddLLM" />
  </main>
  <Footer />
</template>
