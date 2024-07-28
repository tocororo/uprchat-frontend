<script setup lang="ts">
import Header from "../../components/Header.vue";
import ListItem from "./components/ListItem.vue";
import AddButton from "../../components/AddButton.vue";
import Footer from "../../components/Footer.vue";
import { listLinks } from "../../main.ts";

interface Source {
    title: String,
    urlList: Array<String>,
}

const listSources: Array<Source> = [
    {
        "title": "Fuente 1",
        "urlList": ["url1", "url2", "url3"],
    },
    {
        "title": "Fuente 2",
        "urlList": ["url1", "url2", "url3"],
    },
    {
        "title": "Fuente 3",
        "urlList": ["url1", "url2", "url3"],
    },
    {
        "title": "Fuente 4",
        "urlList": ["url1", "url2", "url3"],
    },
]

const AddSource: Function = ():void=> {
    
}

</script>

<template>
    <Header headerTitle="Lista de Fuentes" :listLinks="listLinks"/>
    <main class="w-3/5 my-4">
        <ul class="flex flex-col w-full">
            <ListItem v-for="source in listSources" :key="source.title" :sourceName="source.title" :listUrl="source.urlList" />
        </ul>
        <AddButton class="fixed bottom-12 right-4" text="Nueva fuente" :onClickAction="AddSource"/>
    </main>
    <Footer />
</template>

<style scoped></style>
