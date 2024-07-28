<script setup lang="ts">
import UpdateButton from '../../../components/UpdateButton.vue';
import DeleteButton from '../../../components/DeleteButton.vue';
import BasicButton from '../../../components/BasicButton.vue';
import { defineProps } from 'vue';

const props = defineProps([
  "jobName",
  "state",
]);
</script>

<template>
  <li class="border-2 border-green-500 rounded-lg p-2 shadow-lg w-full m-4 flex justify-between">
      <div class="basis-4/5">
        <h3 class="text-green-600 font-bold">Recolección: {{ jobName }}</h3>
        <h4>Estado: {{ state }}</h4>
        
      </div>
      <div class="flex justify-between items-center gap-1 basis-1/5">
        <BasicButton text="Consultar" />
        <UpdateButton text="Editar"/>
        <DeleteButton text="Borrar"/>
      </div>
  </li>
</template>
