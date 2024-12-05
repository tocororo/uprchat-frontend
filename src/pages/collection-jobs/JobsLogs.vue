<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';

import BasicButton from '../../components/BasicButton.vue';

const router = useRouter();

const name = useRoute().params["id"];

const back = () => { router.push({ name: "crawljobslist" }); };

</script>

<template>
    <main class="sm:w-3/4 w-1/3 flex flex-col justify-center p-2">
        <h2 class="text-green-800 text-2xl">{{ name }}</h2>
        <h3 class="text-xl">Logs:</h3>
        <div class="grow rounded-lg border-2 border-green-800 shadow-lg "></div>
        <BasicButton class="fixed bottom-14 right-4" text="Atras" :onClickAction="back" />
    </main>
</template>

<style scoped></style>
