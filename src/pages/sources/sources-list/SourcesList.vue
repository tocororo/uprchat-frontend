<script setup lang="ts">
import Header from "../../../components/Header.vue";
import ListItem from "./ListItem.vue";
import AddButton from "../../../components/AddButton.vue";
import Footer from "../../../components/Footer.vue";

const listSources: Array<Object> = [
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



</script>

<template>
    <Header mensaje="Lista de Fuentes" />
    <div class="w-4/5 grow">
        <div class="p-2 flex justify-end w-full">
            <AddButton />
        </div>
        <ul class="flex flex-col w-full">
            <ListItem v-for="source in listSources" :key="source.title" :sourceName="source.title"
                :listUrl="source.urlList" />
        </ul>
    </div>
    <Footer />
</template>

<style></style>
