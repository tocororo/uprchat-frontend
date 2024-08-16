<script setup lang="ts">
import UpdateButton from '../../../components/UpdateButton.vue';
import DeleteButton from '../../../components/DeleteButton.vue';
import { defineProps } from 'vue';

const props = defineProps({
  sourceName: String,
  listUrl: Array<string>,
  listDomains: Array<string>,
  collector: String
});


const UpdateSource = ()=>{
    window.location.pathname = "sources/update";
};


</script>

<template>
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
        <DeleteButton text="Borrar"/>
      </div>
    </details>
  </li>
</template>