<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import AddButton from "../../components/AddButton.vue";
import ListItem from "./components/ListItem.vue";
import LoadingAnimation from "../../components/LoadingAnimation.vue";

interface Source {
    name: string
    urls: Array<string>
    domains: Array<string>
    collector: string
}

const router = useRouter();

const listSources = ref<Array<Source>>([]);

const isLoading = ref<boolean>(false);

const fetchSources = async () => {
    isLoading.value = true;
    const response = await fetch("https://fake-backend-upr-chat.onrender.com/sources");
    listSources.value = await response.json();
    isLoading.value = false;
}
fetchSources();

const AddSource = (): void => {
    router.push({ name: "addsources" })
};


</script>

<template>
    <main class="sm:w-3/4 w-4/5 my-4">
        <ul v-show="!isLoading" class="flex flex-col w-full ">
            <ListItem v-for="source in listSources" :key="source.name" :sourceName="source.name" :listUrl="source.urls"
                :list-domains="source.domains" :collector="source.collector" />
        </ul>
        <LoadingAnimation v-show="isLoading" />
        <AddButton class="fixed bottom-14 right-4" text="Nueva fuente" :onClickAction="AddSource" />
    </main>
</template>

<style scoped></style>
