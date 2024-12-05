<script setup lang="ts">
import { ref, watch, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import UpdateButton from "../../../components/UpdateButton.vue";
import DeleteButton from "../../../components/DeleteButton.vue";
import BasicButton from '../../../components/BasicButton.vue';
import CancelButton from '../../../components/CancelButton.vue';
import ModalWindow from '../../../components/ModalWindow.vue';
import LoadingAnimation from '../../../components/LoadingAnimation.vue';

const props = defineProps({ name: String, apiKey: String, url: String });
const textUpdate: string = "Actualizar";
const textDelete: string = "Eliminar";

const router = useRouter();

const UpdateLLM = (): void => {
  router.push({ name: 'updatellm', params: { id: props.name } });
}

const showModal = ref<boolean>(false);
const showModal2 = ref<boolean>(false);
const isLoading = ref<boolean>(false);

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

const RemoveLLM = (): void => {
  modalMsg = `¿Desea eliminar el LLM ${props.name}?`;
  showModal.value = true;
}

watch(confirmDelete, async (value, oldValue) => {
  if (value === true) {
    isLoading.value = true;
    confirmDelete.value = false;
    const data = {
      name: props.name,
    }
    const req = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    const response = await fetch("https://fake-backend-upr-chat.onrender.com/llms", req);

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
  <LoadingAnimation v-show="isLoading" />
  <details v-show="!isLoading"
    class="flex flex-col gap-3 justify-between p-2 rounded-lg border-2 border-green-800 shadow-lg w-full">
    <summary class="bg-green-600 text-white p-2 rounded-lg text-xl">
      <span>{{ props.name }}</span>
    </summary>
    <p>API Key: {{ props.apiKey }}</p>
    <p>URL: {{ props.url }}</p>
    <div class="buttons flex items-center justify-end gap-2">
      <UpdateButton :text="textUpdate" :onClickAction="UpdateLLM" />
      <DeleteButton :text="textDelete" :onClickAction="RemoveLLM" />
    </div>
  </details>
</template>

<style scoped></style>
