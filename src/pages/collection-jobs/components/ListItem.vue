<script setup lang="ts">
import { defineProps, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import BasicButton from '../../../components/BasicButton.vue';
import CancelButton from '../../../components/CancelButton.vue';
import DeleteButton from '../../../components/DeleteButton.vue';
import LoadingAnimation from '../../../components/LoadingAnimation.vue';
import ModalWindow from "../../../components/ModalWindow.vue";
import UpdateButton from '../../../components/UpdateButton.vue';


const props = defineProps({
  jobName: String,
  date: String,
  sourcesList: Array<string>
});

const isLoading = ref<boolean>(false);

const router = useRouter();

const updateJobs = () => {
  router.push({ name: "updatecrawljobs", params: { id: props.jobName } });
}
const logsJobs = () => {
  router.push({ name: "crawljobslogs", params: { id: props.jobName } });
}

const showModal = ref<boolean>(false);
const showModal2 = ref<boolean>(false);

let modalMsg: string = "";
let modalMsg2: string = "";

const confirmDelete = ref<boolean>(false);

const deleteConfirm = () => {
  showModal.value = false;
  confirmDelete.value = true;
};
const deleteCancel = () => {
  showModal.value = false;
};

const RemoveJob = (): void => {
  modalMsg = `¿Desea eliminar el registro de la recolección ${props.jobName}?`;
  showModal.value = true;
}

watch(confirmDelete, async (value, oldValue) => {
  if (value === true) {
    isLoading.value = true;
    confirmDelete.value = false;
    const data = {
      name: props.jobName,
    }
    const req = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    const response = await fetch("https://fake-backend-upr-chat.onrender.com/jobs", req);

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
  <ModalWindow :open="showModal ? true : false" modal-title="Atención" :modal-content="modalMsg">
    <div class="flex justify-around items-center">
      <BasicButton text="Aceptar" :on-click-action="deleteConfirm" />
      <CancelButton text="Cancelar" :on-click-action="deleteCancel" />
    </div>
  </ModalWindow>
  <ModalWindow :open="showModal2 ? true : false" modal-title="Atención" :modal-content="modalMsg2">
    <basic-button text="OK" @click-action="() => showModal = false" />
  </ModalWindow>
  <li class="border-2 border-green-500 rounded-lg p-2 shadow-lg my-1 flex flex-col justify-between">
    <LoadingAnimation v-show="isLoading" />
    <details v-show="!isLoading">
      <summary class="bg-green-600 text-white text-2xl p-2 rounded-lg">
        <span>Recolección: {{ props.jobName }}</span>
      </summary>
      <div>
        <div class="basis-4/5">
          <h4>Lista de Fuentes:</h4>
          <p>{{ props.sourcesList }}</p>
        </div>
        <div class="basis-4/5">
          <h4>Fecha:</h4>
          <p>{{ props.date }}</p>
        </div>
        <div class="flex justify-end items-center gap-1 basis-1/5">
          <BasicButton text="Consultar" :on-click-action="logsJobs" />
          <UpdateButton text="Editar" :on-click-action="updateJobs" />
          <DeleteButton text="Borrar" :on-click-action="RemoveJob" />
        </div>
      </div>
    </details>
  </li>
</template>
