<script setup lang="ts">

import UpdateButton from "../../../components/UpdateButton.vue";
import DeleteButton from "../../../components/DeleteButton.vue";
const props = defineProps({ name: String, apiKey: String });
const textUpdate: string = "Actualizar";
const textDelete: string = "Eliminar";

const UpdateLLM: Function = (): void => {
  window.location.pathname = "llms/update"
}


</script>

<template>

  <details class="flex flex-col gap-3 justify-between p-2 rounded-lg border-2 border-green-800 shadow-lg w-full">
    <summary class="text-green-800 text-xl">
      <span>{{ props.name }}</span>
    </summary>
    <p>API Key: {{ props.apiKey }}</p>
    <div class="buttons flex items-center justify-end gap-2">
      <UpdateButton :text="textUpdate" :onClickAction="UpdateLLM" />
      <DeleteButton :text="textDelete" />
    </div>
  </details>
</template>

<style scoped>
</style>
