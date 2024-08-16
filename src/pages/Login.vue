<script setup lang="ts">
import { ref, watch } from "vue";

const username = ref<String>("");
const password = ref<String>("");
const usernameError = ref<Boolean>(false);
const passwordError = ref<Boolean>(false);

watch(username, (value, oldValue) => {
  if (value.length > 30) {
    username.value = oldValue;
  }
  if (value.length < 3) {
    usernameError.value = true;
  }
  if (value == "" || value.length >= 3) {
    usernameError.value = false;
  }
});

watch(password, (value, oldValue) => {
  if (value.length > 16) {
    password.value = oldValue;
  }
  if (value.length < 4) {
    passwordError.value = true;
  }
  if (value == "" || value.length >= 4) {
    passwordError.value = false;
  }
});

const login = () => {
  if (username.value === "admin" && password.value === "admin") {
    window.location.pathname = "root";
    return;
  }
  username.value = "";
  password.value = "";
  alert("Credenciales invalidas");
};

</script>

<template>
    <form
      class="flex flex-col items-center w-4/5  sm:w-2/5 h-3/5 mt-auto mb-auto  gap-5 border-2 border-green-800 p-4 rounded-lg shadow-2xl "
      @submit.prevent="login">
      <h1 class="text-green-800 text-4xl">Bienvenido</h1>
      <hr class="border-1 w-full border-green-800" />
      <div class="flex items-center flex-col w-full">
        <label class="text-green-800 text-xl">Usuario</label>
        <input type="text" placeholder="Entre su nombre de usuario"
          class="p-2 rounded-lg w-full border-2 border-green-700" v-model="username" />
        <p v-show="usernameError" class="text-red-700 text-center">
          El usuario debe tener más de 3 caracteres
        </p>
      </div>
      <div class="flex items-center flex-col w-full">
        <label class="text-green-800 text-xl">Contraseña</label>
        <input type="password" placeholder="Entre su contraseña" class="p-2 rounded-lg w-full border-2 border-green-700"
          v-model="password" />
        <p v-show="passwordError" class="text-red-700 text-center">
          La contraseña debe poseer entre 4 y 16 caracteres
        </p>
      </div>
      <button class="text-white text-xl bg-green-800 hover:bg-green-700 p-4 w-full rounded-lg" @click="login">
        Acceder
      </button>
    </form>
</template>
