<script setup lang="ts">
import Header from "../../components/Header.vue";
import AddButton from "../../components/AddButton.vue";
import LLMTarget from "./components/LLMTarget.vue";
import NavMenu from "../../components/NavMenu.vue";
import { type Ref, ref } from "vue";

const nameExample = "Ejemplo 1";
const apiKeyExample = "http://ejemplo1.com";
const LLMs = "LLMs";
const addButton = "Adicionar";

const showNav: Ref<Boolean> = ref(false);
const showMenu = () => {
  if (showNav.value == false) {
    showNav.value = true;
  } else {
    showNav.value = false;
  }
};

const AddLLM: Function = ():void=> {
    window.location.pathname = "llms/add"
}

</script>

<template>
  <Header :header-title="LLMs" @showMenu="showMenu" />
  <NavMenu v-show="showNav" />
  <div class="w-full flex items-center justify-center mt-4">
    <LLMTarget :name="nameExample" :api-key="apiKeyExample" />
  </div>

  <AddButton :text="addButton" class="fixed bottom-8 right-8" :onClickAction="AddLLM" />
</template>
