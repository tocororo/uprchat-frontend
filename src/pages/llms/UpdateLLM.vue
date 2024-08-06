<script setup lang="ts">
import { Ref, ref } from "vue";
import NavMenu from "../../components/NavMenu.vue";
import Header from "../../components/Header.vue";
import BasicButton from "../../components/BasicButton.vue";
import LLMForm from "./components/LLMForm.vue";

const headerTitle: string = "Actualizar LLM";
const backText: string = "Atrás";
const addText: string = "Actualizar";

const showNav: Ref<Boolean> = ref(false);
const showMenu = () => {
  if (showNav.value == false) {
    showNav.value = true;
  } else {
    showNav.value = false;
  }
};

const back  = () => {
  window.history.back();
};
</script>

<template>
  <Header :header-title="headerTitle" @show-menu="showMenu" />
  <NavMenu v-show="showNav" />
  <div class="llm-form w-1/2 flex flex-col items-center gap-4 mt-40">
    <LLMForm />
  </div>

  <BasicButton
    :text="backText"
    class="fixed left-8 bottom-8"
    @click-action="back"
  />
  <BasicButton :text="addText" class="fixed right-8 bottom-8" />
</template>

<style scoped>
@media (max-width: 640px) {
  .llm-form {
    width: 90%;
  }
}
</style>
