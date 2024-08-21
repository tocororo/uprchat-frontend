<script setup lang="ts">
import UpdateButton from '../../../components/UpdateButton.vue';
import DeleteButton from '../../../components/DeleteButton.vue';
import BasicButton from '../../../components/BasicButton.vue';
import ModalWindow from "../../../components/ModalWindow.vue";
import CancelButton from '../../../components/CancelButton.vue';
import { defineProps, ref, watch } from 'vue';

const props = defineProps({
  jobName: String,
  state: String,
  date: Date,
  sourcesList: [String]
});

const updateJobs = () => {
  window.location.pathname = "jobs/update";
}
const logsJobs = () => {
  window.location.pathname = "jobs/logs";
}

const showModal = ref<boolean>(false);

let modalMessage: string = "";

let deleteTarget = "";

const confirmDelete = ref<boolean>(false);

const deleteConfirm = () => {
  showModal.value = false;
  confirmDelete.value = true;
};
const deleteCancel = () => {
  showModal.value = false;
};

const RemoveJob = (key: string): void => {
  modalMessage = `¿Desea eliminar el registro de la recolección ${key}?`;
  deleteTarget = key;
  showModal.value = true;
}

watch(confirmDelete, (value, oldValue) => {
  if (value === true) {
    alert(`${deleteTarget} was delete`);
    confirmDelete.value = false;
  }
});
</script>

<template>
  <ModalWindow :open="showModal ? true: false" modal-title="Atención" :modal-content="modalMessage">
    <div class="flex justify-around items-center">
      <BasicButton text="Aceptar" :on-click-action="deleteConfirm" />
      <CancelButton text="Cancelar" :on-click-action="deleteCancel" />
    </div>
  </ModalWindow>
  <li class="border-2 border-green-500 rounded-lg p-2 shadow-lg my-1 flex flex-col justify-between">
    <details>
      <summary class="text-green-600 text-2xl">
        <span>Recolección: {{ props.jobName }}</span>
        <p class="text-xl">Estado: {{ props.state }}</p>
      </summary>
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
        <DeleteButton text="Borrar" :on-click-action="() => RemoveJob(props.jobName)" />
      </div>
    </details>
  </li>
</template>
