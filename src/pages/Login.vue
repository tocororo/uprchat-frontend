<script setup>

import { ref } from 'vue'

</script>

<template>
  <form
    class="flex items-center flex-col gap-5 w-80 border-2 border-green-800 p-4 rounded-lg shadow-2xl"
  >
    <h1 class="text-green-800 text-4xl">Login</h1>
    <hr class="border-1 w-full border-green-800" />
    <div class="flex items-center flex-col w-full">
      <label class="text-green-800 text-xl">Usuario</label>
      <input
        type="text"
        placeholder="Entre su nombre de usuario"
        class="p-2 rounded-lg w-full border-2 border-green-700"
      />
      <p v-show="showErrorUsername" class="text-red-700"></p>
    </div>
    <div class="flex items-center flex-col w-full">
      <label class="text-green-800 text-xl">Contraseña</label>
      <input
        type="password"
        placeholder="Entre su contraseña"
        class="p-2 rounded-lg w-full border-2 border-green-700"
      />
      <p v-show="showErrorPassword" class="text-red-700"></p>
    </div>
    <button
      class="text-white text-xl bg-green-800 hover:bg-green-700 p-4 w-full rounded-lg"
    >
      Aceptar
    </button>
  </form>
</template>
