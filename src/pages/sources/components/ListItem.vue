<script setup lang="ts">
import UpdateButton from '../../../components/UpdateButton.vue';
import DeleteButton from '../../../components/DeleteButton.vue';
import { defineProps } from 'vue';

const props = defineProps({
  sourceName: String,
  listUrl: Array<String>,
});


const UpdateSource = ()=>{
    window.location.pathname = "sources/update";
};


</script>

<template>
  <li class="border-2 border-green-500 rounded-lg p-2 shadow-lg w-full m-4 flex justify-between">
      <div class="basis-4/5">
        <h3 class="text-green-600 font-bold">Fuente: {{ props.sourceName }}</h3>
        <h4>Lista de URLs:</h4>
        <p>
          {{ props.listUrl }}
        </p>
      </div>
      <div class="flex justify-between items-center gap-1 basis-1/5">
        <UpdateButton text="Editar" :on-click-action="UpdateSource"/>
        <DeleteButton text="Borrar"/>
      </div>
  </li>
</template>
