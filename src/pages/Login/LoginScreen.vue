<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useRouter } from "vue-router";

import ModalWindow from "../../components/ModalWindow.vue";
import LoadingAnimation from "../../components/LoadingAnimation.vue";

const username = ref<string>("");
const password = ref<string>("");
const usernameError = ref<boolean>(false);
const passwordError = ref<boolean>(false);
const showModal = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const router = useRouter();

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

const login = async () => {
  isLoading.value = true;

  const data = {
    username: username.value,
    password: password.value,
  }

  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const response = await fetch("https://fake-backend-upr-chat.onrender.com/user", req);

  const flag = response.status == 200;

  if (flag) {
    router.push("/root");
    return;
  }
  username.value = "";
  password.value = "";
  showModal.value = true;
  isLoading.value = false;
};

const loginBtnSwitch = computed(() => {
  return usernameError.value || passwordError.value || username.value === '' || password.value === '';
})

</script>

<template>
  <modal-window :open="showModal ? true : false" modal-title="Credenciales invalidas"
    modal-content="Usuario o contraseña incorrectos">
    <button @click="() => showModal = false" class="text-white text-xl bg-green-800 hover:bg-green-700 p-4  rounded-lg">
      OK
    </button>
  </modal-window>
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
    <button v-show="!isLoading" :disabled="loginBtnSwitch ? true : false"
      class="text-white text-xl bg-green-800 hover:bg-green-700 p-4 w-full rounded-lg" @click="login">
      Acceder
    </button>
    <loading-animation v-show="isLoading" />
  </form>
</template>
