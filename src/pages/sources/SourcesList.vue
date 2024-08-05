<script setup lang="ts">
import { ref, type Ref } from "vue";

import Header from "../../components/Header.vue";
import ListItem from "./components/ListItem.vue";
import AddButton from "../../components/AddButton.vue";
import Footer from "../../components/Footer.vue";
import NavMenu from '../../components/NavMenu.vue';

interface Source {
    title: string,
    urlList: string[],
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
];

const AddSource: Function = (): void => {
window.location.pathname = "sources/add";
};

const showNav: Ref<Boolean> = ref(false);
const showMenu = () => {
  if (showNav.value == false) {
    showNav.value = true;
  } else {
    showNav.value = false
  }
};

</script>

<template>
    <Header headerTitle="Chat" @showMenu="showMenu" />
    <NavMenu v-show="showNav" />
    <main class="w-3/5 my-4">
        <ul class="flex flex-col w-full ">
            <ListItem v-for="source in listSources" :key="source.title" :sourceName="source.title"
                :listUrl="source.urlList" />
            <ListItem v-for="source in listSources" :key="source.title" :sourceName="source.title"
                :listUrl="source.urlList" />
        </ul>
        <AddButton class="fixed bottom-14 right-4" text="Nueva fuente" :onClickAction="AddSource" />
    </main>
    <Footer />
</template>

<style scoped></style>
