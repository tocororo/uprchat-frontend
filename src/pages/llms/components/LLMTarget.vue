<script setup lang="ts">
import { ref, watch, defineProps } from 'vue';
import UpdateButton from "../../../components/UpdateButton.vue";
import DeleteButton from "../../../components/DeleteButton.vue";
import BasicButton from '../../../components/BasicButton.vue';
import CancelButton from '../../../components/CancelButton.vue';
import ModalWindow from '../../../components/ModalWindow.vue';

const props = defineProps({ name: String, apiKey: String });
const textUpdate: string = "Actualizar";
const textDelete: string = "Eliminar";

const UpdateLLM = (): void => {
  window.location.pathname = "llms/update"
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

const RemoveLLM = (key: string): void => {
  modalMessage = `¿Desea eliminar el LLM ${key}?`;
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
  <details class="flex flex-col gap-3 justify-between p-2 rounded-lg border-2 border-green-800 shadow-lg w-full">
    <summary class="text-green-800 text-xl">
      <span>{{ props.name }}</span>
    </summary>
    <p>API Key: {{ props.apiKey }}</p>
    <div class="buttons flex items-center justify-end gap-2">
      <UpdateButton :text="textUpdate" :onClickAction="UpdateLLM" />
      <DeleteButton :text="textDelete" :onClickAction="()=> RemoveLLM(props.name)"/>
    </div>
  </details>
</template>

<style scoped>
</style>
