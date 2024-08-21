<script setup lang="ts">
import UpdateButton from '../../../components/UpdateButton.vue';
import DeleteButton from '../../../components/DeleteButton.vue';
import BasicButton from '../../../components/BasicButton.vue';
import ModalWindow from "../../../components/ModalWindow.vue";
import CancelButton from '../../../components/CancelButton.vue';
import { defineProps, ref, watch } from 'vue';
const props = defineProps({
  sourceName: String,
  listUrl: Array<string>,
  listDomains: Array<string>,
  collector: String
});

const UpdateSource = ()=>{
    window.location.pathname = "sources/update";
};

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

const removeSource = (key: string): void => {
  modalMessage = `¿Desea eliminar el registro de la fuente ${key}?`;
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
  <ModalWindow  :open="showModal ? true: false" modal-title="Atención" :modal-content="modalMessage">
    <div class="flex justify-around items-center">
      <BasicButton text="Aceptar" :on-click-action="deleteConfirm" />
      <CancelButton text="Cancelar" :on-click-action="deleteCancel" />
    </div>
  </ModalWindow>
  <li class="border-2 border-green-500 rounded-lg p-2 shadow-lg w-full m-4 ">
    <details class="p-2 flex flex-col gap-1">
      <summary class="text-green-600 text-2xl">
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
        <UpdateButton text="Editar" :on-click-action="UpdateSource"/>
        <DeleteButton text="Borrar" :on-click-action="()=>removeSource(props.sourceName)"/>
      </div>
    </details>
  </li>
</template>