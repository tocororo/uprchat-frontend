<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from "vue-router";

import AddButton from "../../components/AddButton.vue";
import ListItem from "./components/ListItem.vue";
import LoadingAnimation from "../../components/LoadingAnimation.vue";

interface Collector {
    name: string,
    sources: Array<string>
    date: string
}

const router = useRouter();

const listJobs = ref<Array<Collector>>([]);

const isLoading = ref<boolean>(false);

const fetchJobs = async () => {
    isLoading.value = true;
    const response = await fetch("https://fake-backend-upr-chat.onrender.com/jobs");
    listJobs.value = await response.json();
    isLoading.value = false;
}
fetchJobs();

const AddJob = (): void => {
    router.push({ name: "addcrawljobs" })
}

</script>

<template>
    <main class="sm:w-3/4 w-4/5 p-2">
        <ul v-show="!isLoading" class="flex flex-col w-full">
            <ListItem v-for="(job, index) in listJobs" :key="index" :jobName="job.name" :sources-list="job.sources"
                :date="job.date" />
        </ul>
        <LoadingAnimation v-show="isLoading" />
        <AddButton class="fixed bottom-20 right-4" text="Nuevo trabajo" :onClickAction="AddJob" />
    </main>
</template>

<style scoped></style>
