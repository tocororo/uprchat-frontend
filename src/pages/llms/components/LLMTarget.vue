<script setup lang="ts">

import UpdateButton from "../../../components/UpdateButton.vue";
import DeleteButton from "../../../components/DeleteButton.vue";
const props = defineProps({ name: String, apiKey: String });
const textUpdate: String = "Actualizar";
const textDelete: String = "Eliminar";

const UpdateLLM: Function = ():void=> {
    window.location.pathname = "llms/update"
}


</script>

<template>
  <div
    class="llm-target flex justify-between p-2 rounded-lg border-2 border-green-800 w-1/2 shadow-lg"
  >
    <div>
      <h1 class="text-green-800 text-xl">{{props.name }}</h1>
      <p>{{ props.apiKey }}</p>
    </div>
    <div class="buttons flex items-center justify-around w-1/3">
      <UpdateButton :text="textUpdate" :onClickAction="UpdateLLM" />
      <DeleteButton :text="textDelete" />
    </div>
  </div>
</template>

<style scoped>

  @media (max-width:640px) {
    .llm-target{
      width: 90%;
      height: 120px;
    }

    .buttons{
      position: relative;
      top: 25px;
      right: 20px;
      gap: 10px;
    }
  }

</style>
