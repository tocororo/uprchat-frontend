<script setup lang="ts">
import Header from "../../components/Header.vue";
import AddButton from "../../components/AddButton.vue";
import LLMTarget from "./components/LLMTarget.vue";

const nameExample = "Ejemplo 1"
const apiKeyExample = "http://ejemplo1.com"
const LLMs = "LLMs"
const addButton = 'Adicionar'

</script>

<template>
  <Header :header-title="LLMs" />
  <div class="w-full flex items-center justify-center mt-4">
    <LLMTarget :name="nameExample" :api-key="apiKeyExample"/>
  </div>

  <AddButton :text="addButton" class="fixed bottom-8 right-8" />
</template>
