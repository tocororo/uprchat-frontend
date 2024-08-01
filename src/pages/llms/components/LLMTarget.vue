<script setup lang="ts">

import UpdateButton from "../../../components/UpdateButton.vue";
import DeleteButton from "../../../components/DeleteButton.vue";
const props: string[] = defineProps(["name", "apiKey"]);
const textUpdate = "Actualizar"
const textDelete = "Eliminar"

</script>

<template>
  <div class="flex justify-between p-2 rounded-lg border-2 border-green-800 w-1/2 shadow-lg">
    <div>
      <h1 class="text-green-800 text-xl">{{ name }}</h1>
      <p>{{ apiKey }}</p>
    </div>
    <div class="flex items-center justify-around w-1/3">
        <UpdateButton :text="textUpdate" />
        <DeleteButton :text="textDelete" />
    </div>
  </div>
</template>
