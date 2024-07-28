<script setup>
import UpdateButton from '../../../components/UpdateButton.vue';
import DeleteButton from '../../../components/DeleteButton.vue';
import { defineProps, onMounted } from 'vue';

const props = defineProps([
  "sourceName",
  "listUrl",
]);
</script>

<template>
  <li class="border-2 border-green-500 rounded-lg p-4 shadow-lg w-full m-4 flex justify-between">
      <div class="basis-3/4">
        <h3 class="text-green-600 font-bold">Fuente: {{ sourceName }}</h3>
        <h4>Lista de URLs:</h4>
        <p>
            <span v-for = "url in listUrl" :key="url" >{{ url }},</span>
        </p>
      </div>
      <div class="flex justify-between basis-1/4">
        <UpdateButton/>
        <DeleteButton/>
      </div>
  </li>
</template>
