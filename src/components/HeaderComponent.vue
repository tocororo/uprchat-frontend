<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';

import BasicButton from './BasicButton.vue';
import CancelButton from './CancelButton.vue';
import ModalWindow from './ModalWindow.vue';

const showModal = ref<boolean>(false);
const logoutSwitch = ref<boolean>(false);

const currentPath: string = useRoute().fullPath;
const router = useRouter();
const logOut = () => {
  showModal.value = true;
};

const confirmLogOut = () => {
  logoutSwitch.value = true;
  showModal.value = false;
}
const cancelLogOut = () => {
  showModal.value = false;
}

watch(logoutSwitch, (value, oldValue) => {
  if (value === true) {
    router.push({ name: 'login', state: { from: 'chat' } })
      .then(() => {
        console.log('Navigated to Login');
      })
      .catch((error) => {
        console.error('Failed to navigate:', error);
        logoutSwitch.value = oldValue;
      });
  }
});

</script>

<template>
  <ModalWindow :open="showModal ? true : false" modal-title="Atención" modal-content="Seguro de q desea desloguearse">
    <div class="flex justify-around items-center">
      <BasicButton text="Sí" :on-click-action="confirmLogOut" />
      <CancelButton text="No" :on-click-action="cancelLogOut" />
    </div>
  </ModalWindow>
  <header
    class="bg-green-800 w-full sticky top-0 text-white shadow-xl p-2 min-h-16 flex flex-col justify-center items-center z-50">
    <h1 class="text-center text-2xl p-1">UPRChat</h1>
    <button v-if="currentPath === '/chat'" for="history-toggle"
      class="absolute left-2 top-3 text-white rounded-full bg-green-600 z-50 " @click="logOut">
      <img class="w-10" src="/src/assets/LogOutIcon.svg" alt="">
    </button>
    <nav v-if="currentPath !== '/chat'" class="fixed top-16 left-0 z-20 overflow-x-hidden h-full bottom-12">
      <aside
        class="flex gap-2 top-16 left-0 z-20 shadow-lg p-1 sm:p-2 bg-current w-12 sm:w-16 overflow-hidden h-full border-r-2 border-green-600">
        <div class="h-full sm:hidden text-center">
          <label for="toggle-menu">
            <span>
              <img class="min-w-10 border-2 border-green-600 rounded-lg" src="/src/assets/MenuIconGreen.svg" alt="">
            </span>
            <input type="checkbox" class="hidden" name="toggle-menu" id="toggle-menu">
          </label>
        </div>
        <div class="w-5/6 h-full flex flex-col gap-1 p-1 border-2 border-green-600 sm:border-0" id="links-container">
          <router-link class="text-green-600 text-2xl flex items-center border-b-2 border-green-600 p-1" to="/root">
            <img class="w-8 sm:w-10 " src="/src/assets/MenuIconGreen.svg" alt="">
            <span class="sm:hidden">Menu</span>
          </router-link>
          <router-link class="text-green-600 text-2xl flex items-center border-b-2 border-green-600 p-1" to="/chat">
            <img class="w-8 sm:w-10 " src="/src/assets/chat-card.svg" alt="">
            <span class="sm:hidden">Chat</span>
          </router-link>
          <router-link class="text-green-600 text-2xl flex items-center border-b-2 border-green-600 p-1" to="/sources">
            <img class="w-8 sm:w-10 " src="/src/assets/sources-card.svg" alt="">
            <span class="sm:hidden">Fuentes</span>
          </router-link>
          <router-link class="text-green-600 text-2xl flex items-center border-b-2 border-green-600 p-1"
            to="/crawljobs">
            <img class="w-8 sm:w-10 " src="/src/assets/crawl-card.svg" alt="">
            <span class="sm:hidden">Recolecciones</span>
          </router-link>
          <router-link class="text-green-600 text-2xl flex items-center border-b-2 border-green-600 p-1" to="/root">
            <img class="w-8 sm:w-10 " src="/src/assets/mapping-card.svg" alt="">
            <span class="sm:hidden">Mappings</span>
          </router-link>
          <router-link class="text-green-600 text-2xl flex items-center border-b-2 border-green-600 p-1" to="/root">
            <img class="w-8 sm:w-10 " src="/src/assets/mapping-jobs-card.svg" alt="">
            <span class="sm:hidden">Mappings Jobs</span>
          </router-link>
          <router-link class="text-green-600 text-2xl flex items-center border-b-2 border-green-600 p-1" to="/llms">
            <img class="w-8 sm:w-10 " src="/src/assets/llms-card.svg" alt="">
            <span class="sm:hidden">LLMs</span>
          </router-link>
          <router-link class="text-green-600 text-2xl flex items-center border-b-2 border-green-600 p-1" to="/root">
            <img class="w-8 sm:w-10 " src="/src/assets/viewer-card.svg" alt="">
            <span class="sm:hidden">Data Viewer</span>
          </router-link>
          <div class="text-green-600 text-2xl flex items-center p-1" @click="logOut">
            <img class="w-8 sm:w-10 text-green-600" src="/src/assets/logoutgreen.svg" alt="">
            <span class="sm:hidden">Log Out</span>
          </div>
        </div>
      </aside>
    </nav>
  </header>
</template>

<style scoped>
aside:has(#toggle-menu:checked) {
  width: 80vw;
}

aside {
  transition: width .3s ease-in-out;
}

@media screen and (min-width: 640px) {

  aside:hover {
    width: 20vw;
  }

  aside:hover span {
    display: inline-block;
  }
}
</style>
