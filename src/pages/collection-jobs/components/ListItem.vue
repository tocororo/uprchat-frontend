<script setup lang="ts">
import UpdateButton from '../../../components/UpdateButton.vue';
import DeleteButton from '../../../components/DeleteButton.vue';
import BasicButton from '../../../components/BasicButton.vue';
import { defineProps } from 'vue';

const props = defineProps({
  jobName: String,
  state: String,
  date: Date,
  sourcesList: [String]
});

const updateJobs = ()=> {
  window.location.pathname = "jobs/update";
}
const logsJobs = ()=> {
  window.location.pathname = "jobs/logs";
}

</script>

<template>
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
        <BasicButton text="Consultar" :on-click-action="logsJobs"/>
        <UpdateButton text="Editar" :on-click-action="updateJobs"/>
        <DeleteButton text="Borrar"/>
      </div>
    </details>
  </li>
</template>
