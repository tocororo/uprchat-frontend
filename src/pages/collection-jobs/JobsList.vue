<script setup lang="ts">
import Header from "../../components/Header.vue";
import AddButton from "../../components/AddButton.vue";
import Footer from "../../components/Footer.vue";
import ListItem from "./components/ListItem.vue";
import { listLinks } from "../../main.ts";

interface Collector {
    title: String,
    state: String,
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

const AddJob: Function = ():void=> {
    
}

</script>

<template>
    <Header headerTitle="Lista de Recolecciones" :listLinks="listLinks"/>
    <main class="w-3/5 my-4">
        <ul class="flex flex-col w-full">
            <ListItem v-for="job in listJobs" :key="job.title" :jobName="job.title" :state="job.state" />
        </ul>
        <AddButton class="fixed bottom-12 right-4" text="Nuevo trabajo" :onClickAction="AddJob"/>
    </main>
    <Footer />
</template>

<style scoped></style>
