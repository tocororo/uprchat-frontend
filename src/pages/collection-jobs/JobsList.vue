<script setup lang="ts">
import Header from "../../components/Header.vue";
import AddButton from "../../components/AddButton.vue";
import Footer from "../../components/Footer.vue";
import ListItem from "./components/ListItem.vue";


interface Collector {
    title: string,
    state: string,
}

const listJobs: Array<Collector> = [
    {
        "title": "Trabajo 1",
        "state": "En transcurso",
    },
    {
        "title": "Trabajo 2",
        "state": "En transcurso",
    },
    {
        "title": "Trabajo 3",
        "state": "Concluido",
    },
    {
        "title": "Trabajo 4",
        "state": "Concluido",
    },
]

const AddJob = ():void=> {
    window.location.pathname = "jobs/add"
}

</script>

<template>
    
    <Header headerTitle="Lista de Recolecciones" />
    <main class=" sm:w-3/5 p-2">
        <ul class="flex flex-col w-full">
            <ListItem v-for="(job, index) in listJobs" :key="index" :jobName="job.title" :state="job.state" />
            <ListItem v-for="(job, index) in listJobs" :key="index" :jobName="job.title" :state="job.state" />
        </ul>
        <AddButton class="fixed bottom-20 right-4" text="Nuevo trabajo" :onClickAction="AddJob"/>
    </main>
    <Footer />
</template>

<style scoped></style>
