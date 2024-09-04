<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import BasicButton from '../../../components/BasicButton.vue';
import DeleteButton from '../../../components/DeleteButton.vue';
import CancelButton from '../../../components/CancelButton.vue';
import LoadingAnimation from '../../../components/LoadingAnimation.vue';
import ModalWindow from "../../../components/ModalWindow.vue";
import UpdateButton from '../../../components/UpdateButton.vue';

const props = defineProps({
  sourceName: String,
  listUrl: Array<string>,
  listDomains: Array<string>,
  collector: String
});


const router = useRouter();

const UpdateSource = () => {
  router.push({ name: "updatesources", params: { id: props.sourceName } });
};
const isLoading = ref<boolean>(false);
const showModal = ref<boolean>(false);
const showModal2 = ref<boolean>(false);
let modalMsg = "";

let modalMessage: string = "";

const confirmDelete = ref<boolean>(false);

const deleteConfirm = () => {
  showModal.value = false;
  confirmDelete.value = true;
};
const deleteCancel = () => {
  showModal.value = false;
};

const removeSource = (): void => {
  modalMessage = `¿Desea eliminar el registro de la fuente ${props.sourceName}?`;
  showModal.value = true;
}

watch(confirmDelete, async (value, oldValue) => {
  if (value === true) {
    isLoading.value = true;
    confirmDelete.value = false;
    const data = {
      name: props.sourceName,
    }
    const req = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    const response = await fetch("https://fake-backend-upr-chat.onrender.com/sources", req);

    if (response.ok) {
      router.go(0);
    } else {
      modalMsg = "Error: " + response.body;
      showModal2.value = true;
      confirmDelete.value = oldValue;
    }
    isLoading.value = false;
  }
});

</script>

<template>
  <ModalWindow :open="showModal ? true : false" modal-title="Atención" :modal-content="modalMessage">
    <div class="flex justify-around items-center">
      <BasicButton text="Aceptar" :on-click-action="deleteConfirm" />
      <CancelButton text="Cancelar" :on-click-action="deleteCancel" />
    </div>
  </ModalWindow>
  <ModalWindow :open="showModal2 ? true : false" modal-title="Atención" :modal-content="modalMsg">
    <basic-button text="OK" @click-action="() => showModal = false" />
  </ModalWindow>
  <li class="border-2 border-green-800 rounded-lg p-2 shadow-lg w-full m-4 ">
    <LoadingAnimation v-show="isLoading" />
    <details v-show="!isLoading" class="flex flex-col gap-1">
      <summary class="bg-green-600 text-white p-2 rounded-lg text-xl">
        Fuente: {{ props.sourceName }}
      </summary>
      <div class="basis-4/5">
        <h4>Lista de URLs:</h4>
        <p>
          {{ props.listUrl }}
        </p>
      </div>
      <div class="basis-4/5">
        <h4>Lista de Dominios:</h4>
        <p>
          {{ props.listDomains }}
        </p>
      </div>
      <div class="basis-4/5">
        <h4>Recollector:</h4>
        <p>
          {{ props.collector }}
        </p>
      </div>
      <div class="flex justify-end items-center gap-2 w-full">
        <UpdateButton text="Editar" :on-click-action="UpdateSource" />
        <DeleteButton text="Borrar" :on-click-action="() => removeSource()" />
      </div>
    </details>
  </li>
</template>