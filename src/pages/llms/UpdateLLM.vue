<script setup lang="ts">
import Header from "../../components/Header.vue";
import BasicButton from "../../components/BasicButton.vue";
import LLMForm from "./components/LLMForm.vue";

const headerTitle: string = "Actualizar LLM";
const backText: string = "Atrás";
const addText: string = "Actualizar";
</script>

<template>
  <Header :header-title="headerTitle" />
  <div class="w-1/2 flex flex-col items-center gap-4 mt-40">
    <LLMForm />
  </div>

  <BasicButton :text="backText" class="fixed left-8 bottom-8" />
  <BasicButton :text="addText" class="fixed right-8 bottom-8" />
</template>