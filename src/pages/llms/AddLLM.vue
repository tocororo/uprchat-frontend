<script setup lang="ts">
import Header from "../../components/Header.vue";
import AddButton from "../../components/AddButton.vue";
import CancelButton from "../../components/CancelButton.vue";
import Footer from "../../components/Footer.vue";
import { ref } from 'vue';

const headerTitle: string = "Adicionar LLM";

const name = ref<String>("");
const apikey = ref<String>("");
const url = ref<String>("");

const addLLM = ()=> {

};

const back  = () => {
  window.history.back();
};

</script>

<template>
  <Header :header-title="headerTitle"  />
  <main class="w-3/4 flex flex-col justify-center">
    <form action="" @submit.prevent="" class="grid grid-cols-1 sm:grid-cols-2  sm:grid-rows-7 grid-flow-row items-center gap-2 p-3 ">
      <label for="name">Nombre*:</label>
      <div class="border-2 border-green-600 flex p-2 rounded-lg">
          <input v-model="name" class="w-full outline-0" placeholder="Escriba el nombre del LLM"
              type="text" name="name" id="">
      </div>
      <label for="url">URL*:</label>
      <div class="border-2 border-green-600 flex p-2 rounded-lg">
          <input v-model="url" class="w-full outline-0" placeholder="Escriba la url"
              type="text" name="url" id="">
      </div>
      <label for="apikey">API KEY*:</label>
      <div class="border-2 border-green-600 flex p-2 rounded-lg">
          <input v-model="apikey" class="w-full outline-0" placeholder="Escriba la API KEY"
              type="text" name="apikey" id="">
      </div>
      <AddButton text="Agregar" :onClickAction="addLLM" />
      <CancelButton text="Cancelar" :onClickAction="back" />
  </form>
  </main>
  <Footer/>
</template>