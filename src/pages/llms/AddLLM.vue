<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from "vue-router";

import AddButton from "../../components/AddButton.vue";
import BasicButton from "../../components/BasicButton.vue";
import CancelButton from "../../components/CancelButton.vue";
import LoadingAnimation from "../../components/LoadingAnimation.vue";
import ModalWindow from "../../components/ModalWindow.vue";

const router = useRouter();

const name = ref<string>("");
const apikey = ref<string>("");
const url = ref<string>("");
const isLoading = ref<boolean>(false);
const showModal = ref<boolean>(false);
let modalMsg = "";

const addLLM = async () => {
  if (name.value === "") {
    modalMsg = "Por favor inserte un nombre";
    showModal.value = true;
    return;
  }
  if (url.value === "") {
    modalMsg = "Por favor inserte una URL";
    showModal.value = true;
    return;
  }
  isLoading.value = true;
  const data = {
    name: name.value,
    url: url.value,
    apikey: apikey.value,
  }

  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  const response = await fetch("https://fake-backend-upr-chat.onrender.com/llms", req);

  if (response.ok) {
    router.push({ name: "llmslist" })
  } else {
    modalMsg = "Error: " + response.body;
    isLoading.value = false;
    showModal.value = true;
  }
};

const back = () => {
  router.push({ name: "llmslist" })
};

</script>

<template>
  <ModalWindow :open="showModal ? true : false" modal-title="Atención" :modal-content="modalMsg">
    <basic-button text="OK" @click-action="() => showModal = false" />
  </ModalWindow>
  <main class="w-3/4 flex flex-col justify-center">
    <form action="" @submit.prevent=""
      class="grid grid-cols-1 sm:grid-cols-2  sm:grid-rows-7 grid-flow-row items-center gap-2 p-3 ">
      <label for="name">Nombre*:</label>
      <div class="border-2 border-green-600 flex p-2 rounded-lg">
        <input v-model="name" class="w-full outline-0" placeholder="Escriba el nombre del LLM" type="text" name="name"
          id="">
      </div>
      <label for="url">URL*:</label>
      <div class="border-2 border-green-600 flex p-2 rounded-lg">
        <input v-model="url" class="w-full outline-0" placeholder="Escriba la url" type="text" name="url" id="">
      </div>
      <label for="apikey">API KEY*:</label>
      <div class="border-2 border-green-600 flex p-2 rounded-lg">
        <input v-model="apikey" class="w-full outline-0" placeholder="Escriba la API KEY" type="text" name="apikey"
          id="">
      </div>
      <LoadingAnimation v-show="isLoading" class="loading" />
      <AddButton v-show="!isLoading" text="Agregar" :onClickAction="addLLM" />
      <CancelButton v-show="!isLoading" text="Cancelar" :onClickAction="back" />
    </form>
  </main>
</template>

<style scoped>
label {
  text-align: center;
}

.loading {
  grid-column: 1 / 3;
}
</style>
