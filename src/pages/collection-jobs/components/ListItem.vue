<script setup lang="ts">
import UpdateButton from '../../../components/UpdateButton.vue';
import DeleteButton from '../../../components/DeleteButton.vue';
import BasicButton from '../../../components/BasicButton.vue';
import { defineProps } from 'vue';

const props = defineProps({
  jobName: String,
  state: String,
});

const updateJobs = ()=> {
  window.location.pathname = "jobs/update";
}
const logsJobs = ()=> {
  window.location.pathname = "jobs/logs";
}

</script>

<template>
  <li class="border-2 border-green-500 rounded-lg p-2 shadow-lg my-1 flex justify-between">
      <div class="basis-4/5">
        <h3 class="text-green-600 font-bold">Recolección: {{ props.jobName }}</h3>
        <h4>Estado: {{ props.state }}</h4>
        
      </div>
      <div class="flex justify-between items-center gap-1 basis-1/5">
        <BasicButton text="Consultar" :on-click-action="logsJobs"/>
        <UpdateButton text="Editar" :on-click-action="updateJobs"/>
        <DeleteButton text="Borrar"/>
      </div>
  </li>
</template>
