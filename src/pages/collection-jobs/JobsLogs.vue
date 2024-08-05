<script setup lang="ts">
import { ref, type Ref } from 'vue';

import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import BasicButton from '../../components/BasicButton.vue';
import NavMenu from '../../components/NavMenu.vue';


const showNav: Ref<Boolean> = ref(false);
const showMenu = () => {
    if (showNav.value == false) {
        showNav.value = true;
    } else {
        showNav.value = false
    }
};

const back = () => { window.history.back(); };


</script>

<template>
    <Header headerTitle="Consultar Recolección" @showMenu="showMenu" />
    <NavMenu v-show="showNav" />
    <main class="sm:w-3/4 flex flex-col justify-center p-2">
        <h2 class="text-green-800 text-2xl">Recolección</h2>
        <h3 class="text-xl">Logs:</h3>
        <div class="grow rounded-lg border-2 border-green-800 shadow-lg " ></div>
        <BasicButton class="fixed bottom-12 left-8" text="Atras" :onClickAction="back"/>
    </main>
    <Footer />
</template>

<style scoped></style>
